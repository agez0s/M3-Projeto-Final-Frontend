import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';

import { Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
    </Routes>
    </>
  );
}

export default App;
