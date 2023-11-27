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
