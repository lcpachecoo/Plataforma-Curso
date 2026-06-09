import { crudService } from './api';
import { Pagamento } from '../models/Pagamento';

export const pagamentoService = crudService<Pagamento>('pagamentos');
