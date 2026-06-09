import CrudPage from './CrudPage';
import { categoriaService } from '../services/categoriaService';
import { Categoria } from '../models/Categoria';

export default function Categorias() {
  return (
    <CrudPage<Categoria>
      title="Categorias"
      service={categoriaService}
      empty={{ nome: '', descricao: '' } as Categoria}
      fields={[
      { name: 'nome', label: 'Nome', type: 'text' },
      { name: 'descricao', label: 'Descrição', type: 'text', textarea: true }
      ]}
    />
  );
}
