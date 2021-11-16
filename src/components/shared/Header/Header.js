import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav
      className="flex bg-gradient-to-r from-blue-800 via-blue-600 to-white text-white justify-between"
      style={{ fontVariant: "small-caps" }}
    >
      <div className="flex flex-row">
        <div className="text-4xl m-8">📋 TodoList App</div>
        <div className="flex justify-around text-2xl p-8">
          <div className="mx-8">
            <Link to="/cadastro">➕ Adicionar tarefa</Link>
          </div>
          <div>
            <Link to="/">📝 Listar tarefas</Link>
          </div>
        </div>
      </div>
      <div className="flex mx-20">
        <div
          className="self-center text-black place-self-end text-xl font-bold"
          style={{ fontVariant: "small-caps" }}
        >
          {new Date().toLocaleString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }) + ""}
        </div>
      </div>
    </nav>
  );
};

export default Header;
