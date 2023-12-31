// Modal.jsx
import { useState, useEffect } from 'react';
import { DialogUtility } from '@syncfusion/ej2-react-popups';

const Modal = ({ showModal,orderSummary, handleContinueWithOrder, handleSendOrder}) => {
    const [statusText, setStatusText] = useState('');
    let dialogObj;

    const promptOkAction = () => {
        handleContinueWithOrder();
    };

    const promptCancelAction = () => {
        dialogObj.hide();
        setStatusText("The user canceled the prompt dialog");
        handleSendOrder();
    };

    useEffect(() => {
        if (showModal) {
            setStatusText('');
            dialogObj = DialogUtility.confirm({
                title: 'Resumen del Pedido:',
                width: '400px',
                content: `<div><p>${JSON.stringify(orderSummary)}</p><button class="continue-button" onclick=${handleContinueWithOrder}>Continuar con Orden</button><button class="send-button" onclick=${handleSendOrder}>Enviar Pedido</button></div>`,
                okButton: { text: 'Continuar Orden', click: promptOkAction },
                cancelButton: { text: 'Enviar Orden', click: promptCancelAction },
            });
        }
    }, [showModal]);

    return (
        <div className="App" id='dialog-target'>
            <span>{statusText}</span>
        </div>
    );
};

export default Modal;
