import React from "react";

const CardEsquerdo = (props) => {
  let porcentagem = {
    width: (100 - props.porcentagem) + "%"
  };
  
  let bigNumber = props.bigNumber;
  let texto = props.children;
  return (
     <div className="flex flex-col bg-gradient-to-r from-blue-800 to-red-800 w-36 border-2 m-4 shadow-2xl">
         <div className="flex bg-white text-9xl p-2 justify-center">{bigNumber}</div>
         <div className="flex bg-white text-base p-2 justify-center">{texto}</div>
         <div className="flex bg-white place-self-end" style={porcentagem}>&nbsp;</div>
         
    </div>
  );
};

export default CardEsquerdo;
