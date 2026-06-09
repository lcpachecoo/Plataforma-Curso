import CrudPage from './CrudPage';
import { planoService } from '../services/planoService';
import { Plano } from '../models/Plano';

export default function Planos() {
  return (
    <CrudPage<Plano>
      title="Planos"
      service={planoService}
      empty={{ nome: '', descricao: '', preco: 0, duracaoMeses: 0 } as Plano}
      fields={[
      { name: 'nome', label: 'Nome', type: 'text' },
      { name: 'descricao', label: 'Descrição', type: 'text', textarea: true },
      { name: 'preco', label: 'Preço', type: 'number' },
      { name: 'duracaoMeses', label: 'Duração meses', type: 'number' }
      ]}
    />
  );
}
