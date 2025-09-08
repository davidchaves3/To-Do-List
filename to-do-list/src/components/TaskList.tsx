import { TaskItem } from "./TaskItem";

interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

interface TaskListProps {
  tarefas: Tarefa[];
  onToggle: (id:number) => void;
}

export function TaskList({ tarefas, onToggle }: TaskListProps) {
  if (tarefas.length === 0) {
    return <p className="text-sm text-muted-foreground">Nenhuma tarefa ainda.</p>;
  }

  return (
    <div className="space-y-2">
      {tarefas.map((t) => (
        <TaskItem key={t.id} tarefa={t} onToggle={onToggle} />
      ))}
    </div>
  );
}
