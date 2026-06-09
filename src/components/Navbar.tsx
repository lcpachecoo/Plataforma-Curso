import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    ['/', 'Home'], ['/usuarios', 'Usuários'], ['/categorias', 'Categorias'], ['/cursos', 'Cursos'],
    ['/modulos', 'Módulos'], ['/aulas', 'Aulas'], ['/matriculas', 'Matrículas'], ['/progresso', 'Progresso'],
    ['/trilhas', 'Trilhas'], ['/certificados', 'Certificados'], ['/planos', 'Planos'], ['/checkout', 'Checkout'], ['/avaliacoes', 'Avaliações']
  ];

  return (
    <>
      <style>
        {`
          .hover-borda {
            border: 1px solid transparent; 
            transition: border-color 0.3s ease;
            white-space: nowrap;
          }
          .hover-borda:hover {
            border-color: white !important;
          }
          
          .menu-rolavel::-webkit-scrollbar {
            display: none;
          }
          .menu-rolavel {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-dark mb-4" style={{ backgroundColor: '#580202' }}>
        <div className="container-fluid px-4">
          <Link className="navbar-brand text-white fw-bold border border-white px-3 py-1 rounded me-4" to="/">
            Cursos Online
          </Link>
          
          <div className="navbar-nav flex-nowrap overflow-x-auto menu-rolavel w-100">
            {links.map(([to, label]) => (
              <Link key={to} className="nav-link text-white fw-bold px-3 py-1 rounded hover-borda me-2" to={to}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}