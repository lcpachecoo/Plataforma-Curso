import { crudService } from './api';
import { Avaliacao } from '../models/Avaliacao';

export const avaliacaoService = crudService<Avaliacao>('avaliacoes');
