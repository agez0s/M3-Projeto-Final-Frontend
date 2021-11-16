import React from "react";
import Card from "../Card/Card";
import CardEsquerdo from "../CardEsquerdo/CardEsquerdo";

const ListTodos = (props) => {
  const todos = props.data;

  let [todoAlta, todoPassouPrazo] = [0, 0];

  let hoje = new Date().toISOString();
  console.log(hoje);
  todos.forEach((todo) => {
    if (todo.prioridade === 0) {
      todoAlta++;
    }
    console.log(todo.prazo)
    if (todo.prazo < hoje) {
      todoPassouPrazo++;
    }
  });
  let porcentagemPrioridade = (todoAlta / todos.length) * 100;
  let porcentagemPrazo = (todoPassouPrazo / todos.length) * 100;

  return (
    <div
      className="flex m-8 rounded-xl border-2 p-4 bg-gray-50"
      style={{ fontVariant: "small-caps" }}
    >
      <div
        className="flex flex-wrap m-4 p-4 self-start border-r border-black"
        style={{ maxWidth: "30%" }}
      >
        <CardEsquerdo porcentagem="0" bigNumber={todos.length}>
          Tarefas
        </CardEsquerdo>
        <CardEsquerdo porcentagem={porcentagemPrioridade} bigNumber={todoAlta}>
          Alta prioridade
        </CardEsquerdo>
        <CardEsquerdo
          porcentagem={porcentagemPrazo}
          bigNumber={todoPassouPrazo}
        >
          Fora do prazo
        </CardEsquerdo>
      </div>
      <div className="flex flex-wrap m-4 p-4 self-start justify-evenly" style={{maxWidth: "60%"}}>
        <div className="w-full flex text-5xl justify-center mb-4" style={{ fontVariant: "normal" }}>Bem vindo! Listando suas tarefas:</div>
        {todos.map((todo) => (
          <Card data={todo} key={todo._id} />
        ))}
      </div>
    </div>
  );
};

export default ListTodos;
