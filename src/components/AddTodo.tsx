import { useState } from "react";

interface addTodoProps {
  onSubmit: (title: string) => void;
}

export default function AddTodo({ onSubmit }: addTodoProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        placeholder="new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="grow border border-slate-100 rounded-s p-2 mx-2 rounded-lg focus:outline-none"
      />
      <button type="submit" className="bg-gray-900 w-14 text-white rounded-e">
        Add
      </button>
    </form>
  );
}
