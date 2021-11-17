import React from "react";
import Card from "../Card/Card";
import CardEsquerdo from "../CardEsquerdo/CardEsquerdo";

const ListTodos = (props) => {
  const todos = props.data;

  let [todoAlta, todoPassouPrazo, todoFazendo] = [0, 0, 0];

  let hoje = new Date().toISOString();
  todos.forEach((todo) => {
    if (todo.prioridade === 0) {
      todoAlta++;
    }
    if (todo.prazo < hoje) {
      todoPassouPrazo++;
    }
    if (todo.status !== 0) {
      todoFazendo++;
    }
  });
  let porcentagemPrioridade = (todoAlta / todos.length) * 100;
  let porcentagemPrazo = (todoPassouPrazo / todos.length) * 100;
  let porcentagemFazendo = (todoFazendo / todos.length) * 100;

  return (
    <div className="flex m-8 rounded-xl border-2 p-4 bg-gray-50">
      <div
        className="flex flex-wrap m-4 p-4 self-start border-r border-black"
        style={{ maxWidth: "30%" }}
      >
        <CardEsquerdo porcentagem="100" bigNumber={todos.length}>
          Tarefas
        </CardEsquerdo>
        <CardEsquerdo porcentagem={porcentagemFazendo} bigNumber={todoFazendo}>
          Incompletas
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
      <div
        className="flex flex-wrap m-4 p-4 self-start justify-evenly"
        style={{ maxWidth: "60%" }}
      >
        <div
          className="w-full flex text-5xl justify-center mb-4"
          style={{ fontVariant: "normal" }}
        >
          Bem vindo! Listando suas tarefas:
        </div>
        {todos.map((todo) => (
          <Card data={todo} key={todo._id} />
        ))}
      </div>
    </div>
  );
};

export default ListTodos;
