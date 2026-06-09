export interface Pagamento {
  id:number;
  idAssinatura:number;
  valorPago:number;
  dataPagamento:string;
  metodoPagamento:string;
  idTransacaoGateway:string;
}
