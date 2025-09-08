import { TaskItem } from "./TaskItem";

interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

interface TaskListProps {
  tarefas: Tarefa[];
  onToggle: (id:number) => void;
  onRemove: (id: number) => void; 
}

export function TaskList({ tarefas, onToggle, onRemove }: TaskListProps) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 font-semibold text-lg text-neutral-800">
        Suas Tarefas ({tarefas.length})
      </h2>

      {tarefas.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-300/70 p-6 text-center text-neutral-500">
          Sem tarefas por aqui. Adicione a primeira! ✨
        </div>
      ) : (
        <div className="space-y-3">
          {tarefas.map((t) => (
            <TaskItem key={t.id} tarefa={t} onToggle={onToggle} onRemove={onRemove} />
          ))}
        </div>
      )}
    </section>
  );
}