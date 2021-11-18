import React from "react";

const Prioridade = (props) => {
  let prioriCor = "";
  let prioriTexto = "";
  if (props.feito !== 2) {
    if (props.prio === 0) {
      prioriCor = "bg-red-400 flex p-2 justify-center w-8";
      prioriTexto = "!!!";
    } else if (props.prio === 1) {
      prioriCor = "bg-yellow-500 flex p-2 justify-center w-8";
      prioriTexto = "!!";
    } else if (props.prio === 2) {
      prioriCor = "bg-green-500 flex p-2 justify-center w-8";
      prioriTexto = "!";
    }
    return <div className={prioriCor}>{prioriTexto}</div>;
  }
  else {
    return <div className="flex p-2 justify-center">✔️</div>
  }
  
};

export default Prioridade;
