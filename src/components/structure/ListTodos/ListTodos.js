import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    const request = await fetch("http://localhost:3001/");
    // data = recebe os dados da api (musicas).
    const data = await request.json();
    // atualizo meu estado em memoria com as musicas - para atualizar no DOM.
    setTodos(data);
  };

  return (
    <div className="flex flex-wrap">
      Total de {todos.length} tarefas
      {todos.map((todo) => (
        <Card data={todo} key={todo._id} />
      ))}
    </div>
  );
};

export default ListTodos;
