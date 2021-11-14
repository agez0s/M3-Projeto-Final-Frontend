import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <nav className="flex bg-gradient-to-r from-blue-800 via-blue-600 to-white text-white">
            <div className="text-4xl m-8">
            📋 TodoList App
            </div>
            <div className="flex justify-around text-2xl p-8">
                <div className="mx-8">➕ Adicionar tarefa</div>
                <div>📝 Listar tarefas</div>
            </div>
        </nav>
    )
}

export default Header
