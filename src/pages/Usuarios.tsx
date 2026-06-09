import CrudPage from './CrudPage';
import { usuarioService } from '../services/usuarioService';
import { Usuario } from '../models/Usuario';

export default function Usuarios() {
  return (
    <CrudPage<Usuario>
      title="Usuários"
      service={usuarioService}
      empty={{ nomeCompleto: '', email: '', senhaHash: '', dataCadastro: '' } as Usuario}
      fields={[
      { name: 'nomeCompleto', label: 'Nome completo', type: 'text' },
      { name: 'email', label: 'E-mail', type: 'email' },
      { name: 'senhaHash', label: 'Senha hash', type: 'text' },
      { name: 'dataCadastro', label: 'Data cadastro', type: 'date' }
      ]}
    />
  );
}
