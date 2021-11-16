import React from "react";
import Prioridade from "../../shared/Prioridade/Prioridade";
import Prazo from "../Prazo/Prazo";

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
      <div className="flex justify-between border-b-2 bg-gray-50 h-10">
      <div className="w-full text-2xl flex truncate pl-4 bg-gradient-to-l from-white to-gray-100">
        {todo.titulo}
      </div>
      <div className="flex w-10 justify-center items-center bg-red-600">✖️</div>
      </div>
      <div
        className="p-2 h-20 max-h-20 overflow-hidden"
        style={{ fontVariant: "normal" }}
      >
        {todo.descricao}
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center">
          <Prioridade prio={todo.prioridade} />
        </div>
        <div className="w-full flex justify-end pr-2 items-center bg-gradient-to-r from-white to-gray-100"><Prazo prazo={todo.prazo}/></div>
      </div>
    </div>
  );
};

export default Card;
