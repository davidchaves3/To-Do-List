import { useState, useEffect } from "react";
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

  function removerTarefa(id: number) {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  }

  useEffect(() => {
    const pendentes = tarefas.filter((t) => !t.concluida).length;
    document.title = `(${pendentes}) tarefas pendentes`;
  }, [tarefas]);

  return(
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f6f6f6]">
      <div className="mx-auto max-w-3xl p-4 md:py-10">
        <div className="rounded-2xl bg-[#FFFCEE] shadow-xl ring-1 ring-black/5 p-6 md:p-8">
          <Header />
          <TaskInput valor={texto} onChange={setTexto} onAdd={adicionarTarefa} />
          <TaskList
            tarefas={tarefas}
            onToggle={alterarTarefa}
            onRemove={removerTarefa} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;