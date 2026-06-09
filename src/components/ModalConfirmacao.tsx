type Props = {
  show: boolean;
  mensagem: string;
  onConfirmar: () => void;
  onCancelar: () => void;
};

export default function ModalConfirmacao({ show, mensagem, onConfirmar, onCancelar }: Props) {
  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header"><h5 className="modal-title">Confirmação</h5></div>
          <div className="modal-body"><p>{mensagem}</p></div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCancelar}>Cancelar</button>
            <button className="btn btn-danger" onClick={onConfirmar}>Excluir</button>
          </div>
        </div>
      </div>
    </div>
  );
}
