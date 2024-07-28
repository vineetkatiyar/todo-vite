import TodoItems from "./TodoItems"
import {Todo} from "../types/todo"

interface TodoItemProps{
     todos : Todo[];
     onCompletedChange : (id : number , completed : boolean) => void;
     onDelete : (id : number) => void;

}

export default function TodoList({
     todos,
     onCompletedChange,
     onDelete
} :TodoItemProps ){

     const todoShorted = todos.sort((a, b) => {
          if (a.completed === b.completed) {
               return a.id -b.id;
          }
          return a.completed ? 1 : -1;
     })

     return(
          <>
          <div className="space-y-2">
          {todoShorted.map((todo) => (
            <TodoItems
              todoCompletedChange={onCompletedChange}
              key={todo.id}
              todo={todo}
              onDelete= {onDelete}
            />
          ))}
        </div>
        {
          todos.length ===0 && (
               <p className="text-gray-500 text-center text-sm "> No Todos. Add new todos here</p>
          )
        }
          </>
     )
}