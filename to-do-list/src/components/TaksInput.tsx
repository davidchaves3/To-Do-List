import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TaskInputProps {
  valor: string;
  onChange: (texto: string) => void;
  onAdd: () => void;
}

export function TaskInput({ valor, onChange, onAdd }: TaskInputProps) {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Digite uma nova tarefa"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onAdd}>Adicionar</Button>
    </div>
  );
}
