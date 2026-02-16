import { useEffect, useState } from "react";

const GetTodos = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const res = await fetch("https://dummyjson.com/todos");
    const data = await res.json();
    setTodos(data.todos);
    console.log("Todos Data:", data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <>
      Todos Component
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todo-tile">
            <div>Task: {todo.todo}</div>
            <div>Completed: {todo.completed ? "Yes" : "No"}</div>
          </div>
        );
      })}
    </>
  );
};

export default GetTodos;
