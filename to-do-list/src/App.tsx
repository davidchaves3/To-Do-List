import { useState } from "react";
import './App.css'
import "./components/Header"
import { Header } from "./components/Header";

interface Tarefa{
  id:number;
  texto:string;
  concluida:boolean;
}
function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  return(
   <Header/>
   
  )
}

export default App
