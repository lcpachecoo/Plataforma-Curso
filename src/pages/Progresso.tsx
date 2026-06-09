import { useEffect, useState } from 'react';
import { usuarioService } from '../services/usuarioService';
import { aulaService } from '../services/aulaService';
import { progressoService } from '../services/progressoService';

export default function Progresso() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [aulas, setAulas] = useState<any[]>([]);
  const [progressos, setProgressos] = useState<any[]>([]);
  const [idUsuario, setIdUsuario] = useState(1);
  const [idAula, setIdAula] = useState(1);

  const carregar = async () => {
    setUsuarios(await usuarioService.listar());
    setAulas(await aulaService.listar());
    setProgressos(await progressoService.listar());
  };

  useEffect(() => { carregar(); }, []);

  const concluir = async () => {
    await progressoService.criar({
      idUsuario,
      idAula,
      dataConclusao: new Date().toISOString().slice(0, 10),
      status: 'Concluída'
    });
    carregar();
  };

  return (
    <div className="container">
      <h2>Progresso de Aulas</h2>
      <div className="card card-body mb-3">
        <label className="form-label">Usuário</label>
        <select className="form-select mb-2" value={idUsuario} onChange={e => setIdUsuario(Number(e.target.value))}>
          {usuarios.map(u => <option key={u.id} value={u.id}>{u.nomeCompleto}</option>)}
        </select>

        <label className="form-label">Aula</label>
        <select className="form-select mb-2" value={idAula} onChange={e => setIdAula(Number(e.target.value))}>
          {aulas.sort((a, b) => a.ordem - b.ordem).map(a => <option key={a.id} value={a.id}>{a.ordem} - {a.titulo}</option>)}
        </select>

        <button className="btn btn-success" onClick={concluir}>Marcar aula como concluída</button>
      </div>

      <p>Total de aulas concluídas do usuário: {progressos.filter(p => p.idUsuario === idUsuario).length}</p>

      <table className="table table-bordered">
        <thead><tr><th>ID Aula</th><th>Status</th><th>Data conclusão</th></tr></thead>
        <tbody>{progressos.filter(p => p.idUsuario === idUsuario).map(p => (
          <tr key={p.id}><td>{p.idAula}</td><td>{p.status}</td><td>{p.dataConclusao}</td></tr>
        ))}</tbody>
      </table>
    </div>
  );
}
