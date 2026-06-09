import CrudPage from './CrudPage';
import { avaliacaoService } from '../services/avaliacaoService';
import { Avaliacao } from '../models/Avaliacao';

export default function Avaliacoes() {
  return (
    <CrudPage<Avaliacao>
      title="Avaliações"
      service={avaliacaoService}
      empty={{ idUsuario: 0, idCurso: 0, nota: 5, comentario: '', dataAvaliacao: '' } as Avaliacao}
      fields={[
        { name: 'idUsuario', label: 'ID Usuário', type: 'number' },
        { name: 'idCurso', label: 'ID Curso', type: 'number' },
        { name: 'nota', label: 'Nota', type: 'number' },
        { name: 'comentario', label: 'Comentário', type: 'text', textarea: true },
        { name: 'dataAvaliacao', label: 'Data avaliação', type: 'date' }
      ]}
    />
  );
}
