import { useState, useEffect, useRef } from 'react';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import './MiModal.css'

const Modal = ({ showModal, orderSummary, handleContinueWithOrder, handleSendOrder }) => {
    const [statusText, setStatusText] = useState('');
    const dialogObjRef = useRef(null);

    const promptContinueAction = () => {
        dialogObjRef.current.hide();
        handleContinueWithOrder();
    };

    const promptSendAction = () => {
        dialogObjRef.current.hide();
        setStatusText("Orden Enviada al servidor. ");
        handleSendOrder();
    };

    useEffect(() => {
        if (showModal) {
            setStatusText('');
            dialogObjRef.current = DialogUtility.confirm({
                title: 'Resumen del Pedido:',
                width: '400px',
                content: `
                    <div id="dialog-content">
                        <p>
                            <strong>Nombre:</strong> ${orderSummary.nombreCliente} <br />
                            <strong>Apellido Paterno:</strong> ${orderSummary.apePatCliente} <br />
                            <strong>Apellido Materno:</strong> ${orderSummary.apeMatCliente} <br />
                            <strong>Contacto Tel:</strong> ${orderSummary.contactoCliente} <br />
                            <strong>Instalación:</strong> ${orderSummary.instalacion ? 'Sí' : 'No'} <br />
                            <strong>Barniz Antigrafitti:</strong> ${orderSummary.barniz ? 'Sí' : 'No'} <br />
                            <strong>Cantidad:</strong> ${orderSummary.cantidad} <br />
                            <strong>Base:</strong> ${orderSummary.base} <br />
                            <strong>Altura:</strong> ${orderSummary.altura} <br />
                            <strong>Precio Unitario: $</strong> ${orderSummary.precioUnitario} <br />
                            <strong>Material:</strong> ${orderSummary.material} <br />
                            <strong>Acabado:</strong> ${orderSummary.acabado} <br />
                            <strong>Tipo de Impresión:</strong> ${orderSummary.tipoTrabajo} <br />
                            <strong>Fecha de Envío:</strong> ${orderSummary.fechaEnvio} <br />
                            <strong>Fecha de Entrega:</strong> ${orderSummary.fechaEntrega} <br />
                            <strong>Fecha Instalación:</strong> ${orderSummary.fechaInstalacion} <br />
                            <strong>Archivo:</strong> ${orderSummary.archivo} <br />
                            <strong>Notas:</strong> ${orderSummary.notas} <br />
                        </p>
                    </div>
                `,
                okButton: { text: 'Continuar Orden', click: promptContinueAction },
                cancelButton: { text: 'Enviar Orden', click: promptSendAction },
                showCloseIcon: true,
                closeOnEscape: true
            });
        }
    }, [showModal]);

    useEffect(() => {
        return () => {
            // Cleanup function, clear the dialog reference when the component unmounts
            if (dialogObjRef.current) {
                dialogObjRef.current.destroy();
                dialogObjRef.current = null;
            }
        };
    }, []);

    return (
        <div className="App" id='dialog-target'>
            <span>{statusText}</span>
        </div>
    );
};

export default Modal;
