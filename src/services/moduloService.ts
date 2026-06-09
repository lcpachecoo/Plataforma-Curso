import { crudService } from './api';
import { Modulo } from '../models/Modulo';

export const moduloService = crudService<Modulo>('modulos');
