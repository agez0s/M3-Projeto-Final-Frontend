import React from "react";
import Prioridade from "../../shared/Prioridade/Prioridade";
import Prazo from "../Prazo/Prazo";

import { Link } from "react-router-dom";

const Card = (props) => {
  const todo = props.data;

  return (
    <Link
      to={`/view/${todo._id}`}
      key={todo._id}
      className="flex flex-col w-1/4 h-40 border-2 m-4 shadow-xl"
    >
      <div className="flex justify-between border-b-2 bg-gray-50 h-10">
        <div className="w-full text-xl flex truncate bg-gradient-to-l from-white to-gray-100 justify-center items-center">
          {todo.titulo}
        </div>
      </div>
      <div
        className="p-2 h-20 max-h-20 overflow-hidden"
        style={{ fontVariant: "normal" }}
      >
        {todo.descricao}
      </div>
      <div className="flex justify-between border-t-2">
        <div className="flex justify-center">
          <Prioridade prio={todo.prioridade} feito={todo.status} />
        </div>
        <div className="w-full flex justify-end pr-2 items-center bg-gradient-to-r from-white to-gray-100">
          <Prazo prazo={todo.prazo} feito={todo.status} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
