import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "../../api/api";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const View = () => {
  // inicializa o estado musica para poder fazer as alteracoes do dom.
  const navigate = useNavigate();

  const [todo, setTodo] = useState({});

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // chama o use effect sem parametro de dependencia (executa uma vez ao renderizar o componente)
  // chamando a funcao getMusicaById
  useEffect(() => {
    getTodoById();
  }, []);

  // acessa o id no parametro da url;
  const { id } = useParams();

  // faz a chamada para a api passando o id como parametro para buscar o objeto da musica (invidual por id)
  const getTodoById = async () => {
    const request = await Api.fetchGetById(id);
    const todo = await request.json();
    setTodo(todo);
  };

  let dataPrazo = new Date(todo.prazo).toLocaleString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  let dataCriacao = new Date(todo.dataCriacao).toLocaleString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  let hoje = new Date().toISOString();
  let textoPrazo = "";
  let diasDiferentes = Math.floor(
    (Date.parse(todo.prazo) - Date.parse(hoje)) / 86400000
  );

  if (diasDiferentes < 0) {
    textoPrazo = `há ${Math.abs(diasDiferentes)} dias`;
  } else {
    textoPrazo = `em ${diasDiferentes} dias`;
  }

  let prioridade = "";
  if (todo.prioridade === 0) {
    prioridade = "Alta";
  } else if (todo.prioridade === 1) {
    prioridade = "Média";
  } else {
    prioridade = "Baixa";
  }

  let statusTodo = "";
  if (todo.status === 2) {
    statusTodo = `Feito`;
  } else if (todo.status === 1) {
    statusTodo = `Fazendo`;
  } else {
    statusTodo = `A fazer`;
  }

  const handleDelete = async (evento) => {
    evento.preventDefault()
    const botao = evento.target.botaoDelete;
    botao.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Deletando...";

    const request = await Api.fetchDelete(id);
    if (request.status === 500) {
      botao.className =
        "bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-wait";
      botao.innerText = "⚠️ Erro no servidor";
      botao.disabled = true;
      
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    const response = await request.json();
    if (response.message === "Erro no servidor") {
      botao.className =
        "bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-wait";
      botao.innerHTML = "⚠️Erro no servidor";
      botao.disabled = true;
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      botao.className =
        "bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-wait";
      botao.innerHTML = "🗑️ Tarefa deletada!";
      botao.disabled = true;
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    };
  return (
    <div className="flex flex-col self-center m-4 border-2 border-black w-1/3 rounded shadow-xl">
      <div className="flex p-4 text-4xl border-b-2 border-dashed border-black">
        {todo.titulo}
      </div>
      <div className="flex p-4 text-2xl border-b-2 border-dashed border-black">
        {todo.descricao}
      </div>
      <div className="inline p-4 text-xl align-middle">
        <i class="far fa-calendar text-2xl"></i>&nbsp;Prazo: {dataPrazo} (
        {textoPrazo})
      </div>
      <div className="justify-between border-b-2 border-black flex">
        <div className="inline text-xl mx-4 align-middle">
          <i class="fas fa-exclamation-circle"></i>&nbsp;Prioridade:{" "}
          {prioridade}
        </div>
        <div className="inline text-xl mx-4 align-middle">
          <i class="fas fa-tasks"></i>&nbsp;Status: {statusTodo}
        </div>
      </div>
      <div className="flex justify-end mx-2 pb-10">
        Tarefa criada em {dataCriacao}
      </div>
      <div className="flex justify-between self-center w-1/2 p-4">
        <Link
          to={`/edit/${todo._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Editar
        </Link>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onOpenModal}
        >
          Deletar
        </button>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        
        <div className="flex flex-col text-xl m-4">Confirma exclusão da tarefa?<form onSubmit={handleDelete}>
        <button type="submit" id="botaoDelete" className="my-4 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sim</button>
        </form></div>
      </Modal>
    </div>
  );
};

export default View;
