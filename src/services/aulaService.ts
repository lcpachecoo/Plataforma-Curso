import { crudService } from './api';
import { Aula } from '../models/Aula';

export const aulaService = crudService<Aula>('aulas');
