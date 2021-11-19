import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import View from "./pages/View/View";
import Edit from "./pages/Edit/Edit";

import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
