import React from "react";
import Prioridade from "../../shared/Prioridade/Prioridade";

const Card = (props) => {
  const todo = props.data;
  // let prioridade;
  // if (todo.prioridade === 0) {
  //   prioridade = "Alta";
  // } else if (todo.prioridade === 1) {
  //   prioridade = "Média";
  // } else if (todo.prioridade === 2) {
  //   prioridade = "Baixa";
  // }
  return (
    <div
      key={todo._id}
      className="flex flex-col w-1/4 h-40 border-2 m-4 shadow-xl"
    >
      <div className="text-2xl flex justify-center truncate h-10 border-b-2 bg-gray-50">
        {todo.titulo}
      </div>
      <div
        className="p-2 h-20 max-h-20"
        style={{ fontVariant: "normal" }}
      >
        {todo.descricao}
      </div>
      <div className="flex flex-end">
        <div className="text-xl flex flex-end">
          <Prioridade prio={todo.prioridade} />
        </div>
        <div className="text-xl">Teste</div>
      </div>
    </div>
  );
};

export default Card;
