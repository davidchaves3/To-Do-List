import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskInput } from "./components/TaksInput";
import { TaskList } from "./components/TaskList";

interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [texto, setTexto] = useState("");

  function adicionarTarefa(){
    const titulo = texto.trim();
    if (texto === ""){
      return;
    }

    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: titulo,
      concluida: false,
    }

    setTarefas((prev) => [...prev, novaTarefa])
    setTexto("")
  }

  function alterarTarefa(id:number){
    setTarefas((anteriores) =>
      anteriores.map((t) => 
        t.id === id? { ...t, concluida: !t.concluida}:t
      )
    );
  }
  return (
    <div className="p-4 space-y-4">
      <Header />
      <TaskInput valor= {texto} onChange={setTexto} onAdd={adicionarTarefa} /> 
      <TaskList tarefas={tarefas} onToggle={alterarTarefa} />


    </div>
  );
}

export default App;
