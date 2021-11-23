import React, { useState, useEffect } from "react";
import ListTodos from "../../components/structure/ListTodos/ListTodos";
import Api from "../../api/api"

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState("visible");
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    const request = await Api.fetchGetAll();
    const data = await request.json();
    setTodos(data);
    setLoading("hidden")
  };
  return (
    <div className="container">
      <div className="w-full h-full text-4xl justify-center black flex mt-10 absolute bg-white" style={{ visibility: loading }}>Carregando tarefas...</div>
      
      <ListTodos data={todos} />
    </div>
  );
};

export default Home;
