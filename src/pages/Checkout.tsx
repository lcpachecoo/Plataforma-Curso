import { useEffect, useState } from 'react';
import { usuarioService } from '../services/usuarioService';
import { planoService } from '../services/planoService';
import { assinaturaService } from '../services/assinaturaService';
import { pagamentoService } from '../services/pagamentoService';

export default function Checkout() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [planos, setPlanos] = useState<any[]>([]);
  const [mensagem, setMensagem] = useState('');
  const [idUsuario, setIdUsuario] = useState(1);
  const [idPlano, setIdPlano] = useState(1);
  const [metodo, setMetodo] = useState('Cartão');

  useEffect(() => {
    usuarioService.listar().then(setUsuarios);
    planoService.listar().then(setPlanos);
  }, []);

  const plano = planos.find(p => p.id === idPlano);

  const pagar = async () => {
    const inicio = new Date();
    const fim = new Date();
    fim.setMonth(fim.getMonth() + (plano?.duracaoMeses || 1));

    const assinatura = await assinaturaService.criar({
      idUsuario,
      idPlano,
      dataInicio: inicio.toISOString().slice(0, 10),
      dataFim: fim.toISOString().slice(0, 10)
    });

    await pagamentoService.criar({
      idAssinatura: assinatura.id!,
      valorPago: plano?.preco || 0,
      dataPagamento: inicio.toISOString().slice(0, 10),
      metodoPagamento: metodo,
      idTransacaoGateway: 'TX-' + Date.now()
    });

    setMensagem('Assinatura e pagamento gerados com sucesso.');
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="card card-body">
        <label className="form-label">Usuário</label>
        <select className="form-select mb-2" value={idUsuario} onChange={e => setIdUsuario(Number(e.target.value))}>
          {usuarios.map(u => <option key={u.id} value={u.id}>{u.nomeCompleto}</option>)}
        </select>

        <label className="form-label">Plano</label>
        <select className="form-select mb-2" value={idPlano} onChange={e => setIdPlano(Number(e.target.value))}>
          {planos.map(p => <option key={p.id} value={p.id}>{p.nome} - R$ {p.preco}</option>)}
        </select>

        <label className="form-label">Método de pagamento</label>
        <select className="form-select mb-2" value={metodo} onChange={e => setMetodo(e.target.value)}>
          <option>Cartão</option>
          <option>Pix</option>
          <option>Boleto</option>
        </select>

        <button className="btn btn-success" onClick={pagar}>Finalizar pagamento</button>
      </div>

      {mensagem && <div className="alert alert-success mt-3">{mensagem}</div>}
    </div>
  );
}
