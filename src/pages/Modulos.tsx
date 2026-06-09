import CrudPage from './CrudPage';
import { moduloService } from '../services/moduloService';
import { Modulo } from '../models/Modulo';

export default function Modulos() {
  return (
    <CrudPage<Modulo>
      title="Módulos"
      service={moduloService}
      empty={{ idCurso: 0, titulo: '', ordem: 0 } as Modulo}
      fields={[
      { name: 'idCurso', label: 'ID Curso', type: 'number' },
      { name: 'titulo', label: 'Título', type: 'text' },
      { name: 'ordem', label: 'Ordem', type: 'number' }
      ]}
    />
  );
}
