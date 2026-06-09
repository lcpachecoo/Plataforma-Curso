import { crudService } from './api';
import { Trilha } from '../models/Trilha';

export const trilhaService = crudService<Trilha>('trilhas');
