import { Checkbox } from "@/components/ui/checkbox";
interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

interface TaskItemProps {
  tarefa: Tarefa;
  onToggle: (id: number) => void;
}

export function TaskItem({ tarefa, onToggle }: TaskItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        checked={tarefa.concluida}
        onCheckedChange={() => onToggle(tarefa.id)}
      />
      <span className={tarefa.concluida ? "line-through text-muted-foreground" : ""}>
        {tarefa.texto}
      </span>
    </div>
  );
}
