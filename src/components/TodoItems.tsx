import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface todoItemsProps {
  todo: Todo;
  todoCompletedChange: (id: number, completed: boolean) => void;
  onDelete : (id: number) => void;
}

export default function TodoItems({
  todo,
  todoCompletedChange,
  onDelete
}: todoItemsProps) {
  return (
    <div className=" flex items-center gap-1">
      <label className="flex items-center border p-2 rounded gap-2 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={(e) => todoCompletedChange(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : " "}>
          {todo.title}
        </span>
      </label>
      <button
      onClick={() => onDelete(todo.id)}
       className="p-2">
        <Trash2 size={20} className="text-gray-500 text-center" />
      </button>
    </div>
  );
}
