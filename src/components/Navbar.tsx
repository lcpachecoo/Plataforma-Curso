import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    ['/', 'Home'], ['/usuarios', 'Usuários'], ['/categorias', 'Categorias'], ['/cursos', 'Cursos'],
    ['/modulos', 'Módulos'], ['/aulas', 'Aulas'], ['/matriculas', 'Matrículas'], ['/progresso', 'Progresso'],
    ['/trilhas', 'Trilhas'], ['/certificados', 'Certificados'], ['/planos', 'Planos'], ['/checkout', 'Checkout'], ['/avaliacoes', 'Avaliações']
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Cursos Online</Link>
        <div className="navbar-nav flex-wrap">
          {links.map(([to, label]) => <Link key={to} className="nav-link" to={to}>{label}</Link>)}
        </div>
      </div>
    </nav>
  );
}
