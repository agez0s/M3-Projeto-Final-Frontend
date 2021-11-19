import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "../../api/api";


const View = () => {
  // inicializa o estado musica para poder fazer as alteracoes do dom.
  const [todo, setTodo] = useState({});

  // chama o use effect sem parametro de dependencia (executa uma vez ao renderizar o componente)
  // chamando a funcao getMusicaById
  useEffect(() => {
    getTodoById();
  });

  // acessa o id no parametro da url;
  const { id } = useParams();
  console.log(id);

  // faz a chamada para a api passando o id como parametro para buscar o objeto da musica (invidual por id)
  const getTodoById = async () => {
    const request = await Api.fetchGetById(id);
    const todo = await request.json();
    setTodo(todo);
  };

  return (
    <div>
      Teste
    </div>
    );
};

export default View;
