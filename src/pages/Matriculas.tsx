import { useEffect, useState } from 'react';
import { usuarioService } from '../services/usuarioService';
import { cursoService } from '../services/cursoService';
import { matriculaService } from '../services/matriculaService';

export default function Matriculas() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [cursos, setCursos] = useState<any[]>([]);
  const [matriculas, setMatriculas] = useState<any[]>([]);
  const [idUsuario, setIdUsuario] = useState(1);
  const [idCurso, setIdCurso] = useState(1);

  const carregar = async () => {
    setUsuarios(await usuarioService.listar());
    setCursos(await cursoService.listar());
    setMatriculas(await matriculaService.listar());
  };

  useEffect(() => { carregar(); }, []);

  const salvar = async (e: React.FormEvent) => {
    e.preventDefault();
    await matriculaService.criar({
      idUsuario,
      idCurso,
      dataMatricula: new Date().toISOString().slice(0, 10),
      dataConclusao: null
    });
    carregar();
  };

  return (
    <div className="container">
      <h2>Matrículas</h2>
      <form className="card card-body mb-3" onSubmit={salvar}>
        <label className="form-label">Usuário</label>
        <select className="form-select mb-3" value={idUsuario} onChange={e => setIdUsuario(Number(e.target.value))}>
          {usuarios.map(u => <option key={u.id} value={u.id}>{u.nomeCompleto}</option>)}
        </select>

        <label className="form-label">Curso</label>
        <select className="form-select mb-3" value={idCurso} onChange={e => setIdCurso(Number(e.target.value))}>
          {cursos.map(c => <option key={c.id} value={c.id}>{c.titulo}</option>)}
        </select>

        <button className="btn btn-primary">Matricular</button>
      </form>

      <table className="table table-bordered">
        <thead><tr><th>ID Usuário</th><th>ID Curso</th><th>Data</th></tr></thead>
        <tbody>{matriculas.map(m => <tr key={m.id}><td>{m.idUsuario}</td><td>{m.idCurso}</td><td>{m.dataMatricula}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
