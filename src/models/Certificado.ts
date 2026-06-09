export interface Certificado {
  id:number;
  idUsuario:number;
  idCurso:number;
  idTrilha:number | null;
  codigoVerificacao:string;
  dataEmissao:string;
}
