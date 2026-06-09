import { useEffect, useState } from 'react';
import { usuarioService } from '../services/usuarioService';
import { cursoService } from '../services/cursoService';
import { certificadoService } from '../services/certificadoService';

export default function Certificados() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [cursos, setCursos] = useState<any[]>([]);
  const [certificado, setCertificado] = useState<any>(null);
  const [idUsuario, setIdUsuario] = useState(1);
  const [idCurso, setIdCurso] = useState(1);

  useEffect(() => {
    usuarioService.listar().then(setUsuarios);
    cursoService.listar().then(setCursos);
  }, []);

  const gerar = async () => {
    const novo = await certificadoService.criar({
      idUsuario,
      idCurso,
      idTrilha: null,
      codigoVerificacao: 'CERT-' + Date.now(),
      dataEmissao: new Date().toISOString().slice(0, 10)
    });
    setCertificado(novo);
  };

  const usuario = usuarios.find(u => u.id === idUsuario);
  const curso = cursos.find(c => c.id === idCurso);

  return (
    <div className="container">
      <h2>Certificados</h2>
      <div className="card card-body mb-3">
        <select className="form-select mb-2" value={idUsuario} onChange={e => setIdUsuario(Number(e.target.value))}>
          {usuarios.map(u => <option key={u.id} value={u.id}>{u.nomeCompleto}</option>)}
        </select>
        <select className="form-select mb-2" value={idCurso} onChange={e => setIdCurso(Number(e.target.value))}>
          {cursos.map(c => <option key={c.id} value={c.id}>{c.titulo}</option>)}
        </select>
        <button className="btn btn-primary" onClick={gerar}>Gerar certificado</button>
      </div>

      {certificado && (
        <div className="border p-5 text-center">
          <h3>Certificado</h3>
          <p>Certificamos que <b>{usuario?.nomeCompleto}</b> concluiu o curso <b>{curso?.titulo}</b>.</p>
          <p>Data: {certificado.dataEmissao}</p>
          <p>Código de verificação: {certificado.codigoVerificacao}</p>
        </div>
      )}
    </div>
  );
}
