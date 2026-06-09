import { useEffect, useState } from 'react';
import FormInput from '../components/FormInput';
import Table from '../components/Table';
import ModalConfirmacao from '../components/ModalConfirmacao';

type Field = { name: string; label: string; type?: string; textarea?: boolean };
type Service<T> = {
  listar: () => Promise<T[]>;
  criar: (data: any) => Promise<T>;
  atualizar: (id: number, data: any) => Promise<T>;
  excluir: (id: number) => Promise<void>;
};
type Entity = { id?: number; [key: string]: any };

export default function CrudPage<T extends Entity>({
  title, fields, empty, service
}: {
  title: string;
  fields: Field[];
  empty: T;
  service: Service<T>;
}) {
  const [items, setItems] = useState<T[]>([]);
  const [form, setForm] = useState<T>(empty);
  const [editId, setEditId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const carregar = async () => setItems(await service.listar());

  useEffect(() => { carregar(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: type === 'number' ? Number(value) : value });
  };

  const salvar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) await service.atualizar(editId, { ...form, id: editId });
    else await service.criar(form);
    setForm(empty);
    setEditId(null);
    carregar();
  };

  const editar = (item: T) => {
    setForm(item);
    setEditId(item.id!);
  };

  const excluir = async () => {
    if (deleteId) await service.excluir(deleteId);
    setDeleteId(null);
    carregar();
  };

  return (
    <div className="container">
      <h2>{title}</h2>

      <form onSubmit={salvar} className="card card-body mb-4">
        {fields.map(f => (
          <FormInput key={f.name} {...f} value={form[f.name] ?? ''} onChange={handleChange} />
        ))}

        <div>
          <button className="btn btn-primary me-2" type="submit">{editId ? 'Salvar' : 'Cadastrar'}</button>
          <button className="btn btn-secondary" type="button" onClick={() => { setForm(empty); setEditId(null); }}>
            Cancelar
          </button>
        </div>
      </form>

      <Table columns={[...fields.map(f => f.label), 'Ações']} data={items} renderRow={(item) => (
        <tr key={item.id}>
          {fields.map(f => <td key={f.name}>{String(item[f.name] ?? '')}</td>)}
          <td>
            <button className="btn btn-sm btn-warning me-2" onClick={() => editar(item)}>Editar</button>
            <button className="btn btn-sm btn-danger" onClick={() => setDeleteId(item.id!)}>Excluir</button>
          </td>
        </tr>
      )} />

      <ModalConfirmacao
        show={deleteId !== null}
        mensagem="Deseja excluir este registro?"
        onConfirmar={excluir}
        onCancelar={() => setDeleteId(null)}
      />
    </div>
  );
}
