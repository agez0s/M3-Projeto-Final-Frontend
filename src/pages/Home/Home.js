import React, { useState, useEffect } from "react";
import ListTodos from "../../components/structure/ListTodos/ListTodos";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    const request = await fetch("http://localhost:3001/");
    const data = await request.json();
    setTodos(data);
  };
  return (
    <div className="container">
      <ListTodos data={todos} />
    </div>
  );
};

export default Home;
