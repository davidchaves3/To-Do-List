import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react"; 
interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}
interface TaskItemProps {
  tarefa: Tarefa;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void; 
}

export function TaskItem({ tarefa, onToggle, onRemove }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white border border-neutral-200/70 px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
      <label className="flex items-center gap-3 cursor-pointer">
        <Checkbox
          checked={tarefa.concluida}
          onCheckedChange={() => onToggle(tarefa.id)}
          className="rounded-full data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
        />
        <span className={tarefa.concluida ? "line-through text-neutral-400" : "text-neutral-800"}>
          {tarefa.texto}
        </span>
      </label>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Remover tarefa"
        className="rounded-full hover:bg-red-50 hover:text-red-600"
        onClick={() => onRemove(tarefa.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
