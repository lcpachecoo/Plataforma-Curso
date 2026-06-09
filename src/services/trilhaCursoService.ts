import { crudService } from './api';
import { TrilhaCurso } from '../models/TrilhaCurso';

export const trilhaCursoService = crudService<TrilhaCurso>('trilhasCursos');
