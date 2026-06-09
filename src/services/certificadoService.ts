import { crudService } from './api';
import { Certificado } from '../models/Certificado';

export const certificadoService = crudService<Certificado>('certificados');
