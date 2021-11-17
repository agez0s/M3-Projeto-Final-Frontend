import React from "react";

const Cadastro = () => {
  const apiURL = "http://localhost:3001/add";

  return (
    <div className="container">
      <div className="flex text-4xl p-4">Cadastrando nova tarefa</div>
      <div className="flex p-4 text-xl border-2 m-4 rounded-xl shadow-xl">
        <form method="POST" action={apiURL}>
          <label htmlFor="titulo" className="block text-gray-700 font-bold mb-2">Título da tarefa</label>
          <input
          className="border rounded border-blue"
            id="titulo"
            type="text"
            placeholder="Título da tarefa"
            name="titulo"
          />

          <label htmlFor="descricao" className="block text-gray-700 font-bold my-2">Descrição</label>
          <input
            id="descricao"
            type="text"
            placeholder="Descrição"
            name="descricao"
          />

          <label htmlFor="diamesano" className="block text-gray-700 font-bold my-2">Data</label>
          <input id="diamesano" type="datetime-local" name="diamesano" />

          <label htmlFor="prioridade" className="block text-gray-700 font-bold my-2">Prioridade</label>
          <input id="prioridade" type="text" name="prioridade" /><br/>

          <input id="status" type="hidden" name="status" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
