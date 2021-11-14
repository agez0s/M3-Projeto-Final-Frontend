import React from 'react'
import ListTodos from '../../components/structure/ListTodos/ListTodos'

const Home = () => {
  return (
    <div className="m-2 p-8">
      <div className="text-6xl">Bem vindo!</div>
      <ListTodos/>
      </div>
  )
}

export default Home