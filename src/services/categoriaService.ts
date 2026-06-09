import { crudService } from './api';
import { Categoria } from '../models/Categoria';

export const categoriaService = crudService<Categoria>('categorias');
