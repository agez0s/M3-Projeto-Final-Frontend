import React from "react";
import Card from "../Card/Card";

const ListTodos = (props) => {
  const todos = props.data;

  let [todoAlta, todoPassouPrazo] = [0, 0];

  let hoje = new Date().toISOString();
  console.log(hoje);
  todos.forEach((todo) => {
    if (todo.prioridade === 0) {
      todoAlta++;
    }
    if (todo.prazo < hoje) {
      todoPassouPrazo++;
    }
  });

  return (
    <div className="flex flex-wrap" style={{fontVariant: "small-caps"}}>
      Total de {todos.length} tarefas
      {todoAlta} alta prioridade
      {todoPassouPrazo} passou do prazo
      {todos.map((todo) => (
        <Card data={todo} key={todo._id} />
      ))}
    </div>
  );
};

export default ListTodos;
