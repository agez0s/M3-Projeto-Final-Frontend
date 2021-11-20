import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    getTodoById();
  }, []); //eslint-disable-next-line no-use-before-define

  const { id } = useParams();

  const getTodoById = async () => {
    const request = await Api.fetchGetById(id);
    const todo = await request.json();
    let prazo = todo.prazo.substr(0, 10);
    todo.prazo = prazo;
    setTodo(todo);
  };

  const handleFieldsChange = (evento) => {
    const campos = { ...todo };

    campos[evento.target.name] = evento.target.value;
    setTodo(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const botao = evento.target.botao;
    botao.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Enviando...";
    const request = await Api.fetchPut(todo, id);
    if (request.status === 500) {
      botao.className =
        "bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-wait";
      botao.innerText = "⚠️ Erro no servidor";
      botao.disabled = true;

      setTimeout(() => {
        navigate(`/view/${todo.id}`);
      }, 3000);
    }

    const response = await request.json();
    if (response.message === "Erro no servidor") {
      botao.className =
        "bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-wait";
      botao.innerText = "⚠️ Erro no servidor";
      botao.disabled = true;

      setTimeout(() => {
        navigate(`/view/${todo.id}`);
      }, 3000);
    } else {
      botao.className =
        "bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-wait";
      botao.innerHTML = "✏️ Tarefa editada!";
      botao.disabled = true;
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="flex text-4xl p-4 m-auto justify-center">
        Editando tarefa
      </div>
      <div className="flex p-4 text-xl border-2 m-auto rounded-xl shadow-xl w-1/2 justify-center">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="titulo"
            className="block text-gray-700 font-bold mb-2"
          >
            Título da tarefa
          </label>
          <input
            className="border rounded border-blue"
            id="titulo"
            type="text"
            value={todo.titulo}
            placeholder="Título da tarefa"
            onChange={handleFieldsChange}
            name="titulo"
            required
          />

          <label
            htmlFor="descricao"
            className="block text-gray-700 font-bold my-2 w-full"
          >
            Descrição
          </label>
          <textarea
            className="border rounded border-blue resize-none"
            id="descricao"
            type="text"
            onChange={handleFieldsChange}
            value={todo.descricao}
            placeholder="Descrição"
            name="descricao"
            required
          ></textarea>

          <label htmlFor="prazo" className="block text-gray-700 font-bold my-2">
            Prazo da tarefa
          </label>
          <input
            id="prazo"
            type="date"
            name="prazo"
            value={todo.prazo}
            onChange={handleFieldsChange}
            className="border rounded border-blue w-full"
            required
          />

          <label
            htmlFor="prioridade"
            className="block text-gray-700 font-bold my-2"
          >
            Prioridade
          </label>
          <select
            id="prioridade"
            name="prioridade"
            className="w-full"
            onChange={handleFieldsChange}
          >
            <option selected disabled hidden>
              Selecione
            </option>
            <option value="0">Alta</option>
            <option value="1">Média</option>
            <option value="2">Baixa</option>
          </select>
          <br />

          <label
            htmlFor="prioridade"
            className="block text-gray-700 font-bold my-2"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            className="w-full"
            onChange={handleFieldsChange}
          >
            <option selected disabled hidden>
              Selecione
            </option>
            <option value="0">A fazer</option>
            <option value="1">Fazendo</option>
            <option value="2">Feito</option>
          </select>

          <button
            type="submit"
            id="botao"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-4 focus:shadow-outline w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
