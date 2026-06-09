import { crudService } from './api';
import { Curso } from '../models/Curso';

export const cursoService = crudService<Curso>('cursos');
