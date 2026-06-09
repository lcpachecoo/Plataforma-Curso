import CrudPage from './CrudPage';
import { aulaService } from '../services/aulaService';
import { Aula } from '../models/Aula';

export default function Aulas() {
  return (
    <CrudPage<Aula>
      title="Aulas"
      service={aulaService}
      empty={{ idModulo: 0, titulo: '', tipoConteudo: '', urlConteudo: '', duracaoMinutos: 0, ordem: 0 } as Aula}
      fields={[
      { name: 'idModulo', label: 'ID Módulo', type: 'number' },
      { name: 'titulo', label: 'Título', type: 'text' },
      { name: 'tipoConteudo', label: 'Tipo conteúdo', type: 'text' },
      { name: 'urlConteudo', label: 'URL conteúdo', type: 'text' },
      { name: 'duracaoMinutos', label: 'Duração minutos', type: 'number' },
      { name: 'ordem', label: 'Ordem', type: 'number' }
      ]}
    />
  );
}
