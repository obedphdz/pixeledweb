// MiModal.jsx
import Modal from 'react-modal';
import './MiModal.css';

const MiModal = ({ showModal, handleCloseModal, handleContinueWithOrder, handleSendOrder, pedidos }) => {
  return (
    <div className="modal-container">
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Ejemplo de Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h1>Detalles del Pedido</h1>
        {/* Renderiza aquí los detalles de todos los pedidos */}
        {pedidos.map((pedido, index) => (
          <div key={index}>
            <h3>Cliente: {pedido.cliente.nombre}</h3>
            <ul>
              {pedido.detalles.map((detalle, i) => (
                <li key={i}>
                  <p>Ancho: {detalle.base}</p>
                  <p>Altura: {detalle.altura}</p>
                  <p>Material: {detalle.material}</p>
                  <p>Acabados: {detalle.acabados}</p>
                  <p>Tipo de Impresión: {detalle.tipoImpresion}</p>
                  {/* Agrega más detalles según sea necesario */}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button className="continue-button" onClick={handleContinueWithOrder}>
          Continuar con Orden
        </button>
        <button className="send-button" onClick={handleSendOrder}>
          Enviar Pedido
        </button>
        <button className="close-button" onClick={handleCloseModal}>
          Cerrar modal
        </button>
      </Modal>
    </div>
  );
};

export default MiModal;
