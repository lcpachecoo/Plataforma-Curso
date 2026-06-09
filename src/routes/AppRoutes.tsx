import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Usuarios from '../pages/Usuarios';
import Categorias from '../pages/Categorias';
import Cursos from '../pages/Cursos';
import Modulos from '../pages/Modulos';
import Aulas from '../pages/Aulas';
import Matriculas from '../pages/Matriculas';
import Progresso from '../pages/Progresso';
import Trilhas from '../pages/Trilhas';
import Certificados from '../pages/Certificados';
import Planos from '../pages/Planos';
import Checkout from '../pages/Checkout';
import Avaliacoes from '../pages/Avaliacoes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/matriculas" element={<Matriculas />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/trilhas" element={<Trilhas />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
      </Routes>
    </BrowserRouter>
  );
}
