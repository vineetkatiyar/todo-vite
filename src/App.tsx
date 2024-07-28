import { useState } from "react";
import { dummyTodo } from "./data/todos";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(dummyTodo);

  function todoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodos(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="h-screen px-20 py-10 space-y-5">
      <h1 className=" text-center font-bold text-3xl py-5">My Todos</h1>
      <div className="max-w-lg m-auto bg-slate-200 p-5 rounded-md space-y-6">
        <AddTodo onSubmit={addTodos} />
        <TodoList
          todos={todos}
          onCompletedChange={todoCompleted}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  );
}

export default App;
