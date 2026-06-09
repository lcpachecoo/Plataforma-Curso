import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const crudService = <T extends { id?: number }>(resource: string) => ({
  listar: async (): Promise<T[]> => (await api.get<T[]>(`/${resource}`)).data,
  buscarPorId: async (id: number): Promise<T> => (await api.get<T>(`/${resource}/${id}`)).data,
  criar: async (data: Omit<T, 'id'>): Promise<T> => (await api.post<T>(`/${resource}`, data)).data,
  atualizar: async (id: number, data: T): Promise<T> => (await api.put<T>(`/${resource}/${id}`, data)).data,
  excluir: async (id: number): Promise<void> => { await api.delete(`/${resource}/${id}`); }
});
