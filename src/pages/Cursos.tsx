import CrudPage from './CrudPage';
import { cursoService } from '../services/cursoService';
import { Curso } from '../models/Curso';

export default function Cursos() {
  return (
    <CrudPage<Curso>
      title="Cursos"
      service={cursoService}
      empty={{ titulo: '', descricao: '', idInstrutor: 0, idCategoria: 0, nivel: '', dataPublicacao: '', totalAulas: 0, totalHoras: 0 } as Curso}
      fields={[
      { name: 'titulo', label: 'Título', type: 'text' },
      { name: 'descricao', label: 'Descrição', type: 'text', textarea: true },
      { name: 'idInstrutor', label: 'ID Instrutor', type: 'number' },
      { name: 'idCategoria', label: 'ID Categoria', type: 'number' },
      { name: 'nivel', label: 'Nível', type: 'text' },
      { name: 'dataPublicacao', label: 'Data publicação', type: 'date' },
      { name: 'totalAulas', label: 'Total aulas', type: 'number' },
      { name: 'totalHoras', label: 'Total horas', type: 'number' }
      ]}
    />
  );
}
