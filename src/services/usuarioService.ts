import { crudService } from './api';
import { Usuario } from '../models/Usuario';

export const usuarioService = crudService<Usuario>('usuarios');
