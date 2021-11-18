import React from "react";
import Api from "../../api/api";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prazo = evento.target.prazo.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;

    const todo = {
      titulo,
      descricao,
      prazo,
      prioridade,
      status,
    };
    const request = await Api.fetchPost(todo);
    if (request.status === 500) {
      alert("ERRO NO SERVIDOR");
      
    }
    const result = await request.json();
    if (result.error) {
      console.log(result.error)
    } else {
      alert(result.message);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="flex text-4xl p-4">Cadastrando nova tarefa</div>
      <div className="flex p-4 text-xl border-2 m-4 rounded-xl shadow-xl">
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
            placeholder="Título da tarefa"
            name="titulo"
          />

          <label
            htmlFor="descricao"
            className="block text-gray-700 font-bold my-2"
          >
            Descrição
          </label>
          <input
            className="border rounded border-blue"
            id="descricao"
            type="text"
            placeholder="Descrição"
            name="descricao"
          />

          <label
            htmlFor="diamesano"
            className="block text-gray-700 font-bold my-2"
          >
            Prazo da tarefa
          </label>
          <input
            id="prazo"
            type="datetime-local"
            name="prazo"
            className="border rounded border-blue"
          />

          <label
            htmlFor="prioridade"
            className="block text-gray-700 font-bold my-2"
          >
            Prioridade
          </label>
          <select id="prioridade" name="prioridade">
            <option value="0">Alta</option>
            <option value="1">Média</option>
            <option value="2">Baixa</option>
          </select>
          <br />

          <input id="status" type="hidden" name="status" value="0" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-4 focus:shadow-outline"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
