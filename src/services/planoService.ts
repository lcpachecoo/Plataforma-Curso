import { crudService } from './api';
import { Plano } from '../models/Plano';

export const planoService = crudService<Plano>('planos');
