import CrudPage from './CrudPage';
import { trilhaService } from '../services/trilhaService';
import { Trilha } from '../models/Trilha';

export default function Trilhas() {
  return (
    <CrudPage<Trilha>
      title="Trilhas"
      service={trilhaService}
      empty={{ titulo: '', descricao: '', idCategoria: 0 } as Trilha}
      fields={[
      { name: 'titulo', label: 'Título', type: 'text' },
      { name: 'descricao', label: 'Descrição', type: 'text', textarea: true },
      { name: 'idCategoria', label: 'ID Categoria', type: 'number' }
      ]}
    />
  );
}
