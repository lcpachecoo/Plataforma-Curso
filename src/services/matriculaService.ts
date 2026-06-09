import { crudService } from './api';
import { Matricula } from '../models/Matricula';

export const matriculaService = crudService<Matricula>('matriculas');
