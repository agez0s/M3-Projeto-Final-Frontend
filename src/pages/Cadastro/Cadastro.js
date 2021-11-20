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
    const botao = evento.target.botao;
    botao.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Enviando...";

    const todo = {
      titulo,
      descricao,
      prazo,
      prioridade,
      status,
    };

    const request = await Api.fetchPost(todo);
    if (request.status === 500) {
      botao.className =
        "bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-wait";
      botao.innerText = "⚠️ Erro no servidor";
      botao.disabled = true;
      
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    const result = await request.json();
    if (result.message === "Erro no servidor") {
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
      botao.innerHTML = "✔️ Tarefa adicionada!";
      botao.disabled = true;
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="flex text-4xl p-4 m-auto justify-center">
        Cadastrando nova tarefa
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
            placeholder="Título da tarefa"
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
            className="border rounded border-blue w-full"
            required
          />

          <label
            htmlFor="prioridade"
            className="block text-gray-700 font-bold my-2"
          >
            Prioridade
          </label>
          <select id="prioridade" name="prioridade" className="w-full">
            <option value="0">Alta</option>
            <option value="1">Média</option>
            <option value="2">Baixa</option>
          </select>
          <br />

          <input id="status" type="hidden" name="status" value="0" />
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

export default Cadastro;
