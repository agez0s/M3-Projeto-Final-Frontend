import React from 'react'

const Card = (props) => {
  const todo = props.data;
  return (
    <div key={todo._id}>
      <div className="">
        <div className="">
          <h5 className="card-title">{todo.titulo}</h5>
          <span className="badge bg-primary">{todo.prioridade}</span>
        </div>
      </div>
    </div>
  )
}

export default Card