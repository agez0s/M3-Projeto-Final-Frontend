import React from "react";

const Card = (props) => {
  const todo = props.data;
  let prioridade;
  if (todo.prioridade === 0) {
    prioridade = "Alta";
  }
  else if(todo.prioridade === 1 ) {
      prioridade = "Média"
  }
  else if(todo.prioridade === 2) {
      prioridade = "Baixa"
  }
  return (
    <div key={todo._id}>
      <div className="text-xl">
        {todo.titulo}
        <div className="">
          <span className="badge bg-primary">{prioridade}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
