import { crudService } from './api';
import { Assinatura } from '../models/Assinatura';

export const assinaturaService = crudService<Assinatura>('assinaturas');
