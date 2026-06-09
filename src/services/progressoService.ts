import { crudService } from './api';
import { ProgressoAula } from '../models/ProgressoAula';

export const progressoService = crudService<ProgressoAula>('progressosAulas');
