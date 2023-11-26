/* eslint-disable no-unused-vars */

import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import './NewOrder.css';
import { useState } from 'react';
import * as dataSource from './data/data.json';
import SubirArchivo from './Archivo/subirArchivo';
import MiModal from './ModalOrder/MiModal';

const NewOrder = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [limpiarDatos, setLimpiarDatos] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [pedidoActual, setPedidoActual] = useState({
  clientes: [{ nombre: '', telefono: '' }],
  filas: [{
    cantidad: '',
    archivo: '',
    base: '',
    altura: '',
    material: '',
    acabados: '',
    nota: '',
  }],
});

  const [clientes, setClientes] = useState([{ nombre: '', telefono: '' }]);
	const [filas, setFilas] = useState([
		{
			cantidad: '',
			archivo: '',
			base: '',
			altura: '',
			material: '',
			acabados: '',
			nota: '',
		},
	]);

	const handleAddFila = () => {
		setFilas([
			...filas,
			{
				cantidad: '',
				archivo: '',
				base: '',
				altura: '',
				material: '',
				acabados: '',
				nota: '',
			},
		]);
	};

	const handleClienteChange = (index, event) => {
		const { name, value } = event.target;
		const newClientes = [...clientes];
		newClientes[index][name] = value;
		setClientes(newClientes);
	};

	const handleFilaChange = (index, event) => {
		const { name, value } = event.target;
		const newFilas = [...filas];
		newFilas[index][name] = value;
		setFilas(newFilas);
	};

  const floatFocus = (args) => {
        args.target.parentElement.classList.add("e-input-focus");
  };
    const floatBlur = (args) => {
        args.target.parentElement.classList.remove('e-input-focus');
    };
    const onIconClick = (args) => {
        args.persist();
        setTimeout(() => {
            args.target.classList.add('e-input-btn-ripple');
        }, 500);
    };
    const onIconUnClick = (args) => {
        args.target.classList.remove('e-input-btn-ripple');
    };
    
    const dateValue = new Date();

    const data = dataSource; // You need to import your data source here
    const fieldMaterial = { dataSource: data.materialData, value: 'id', text: 'name', child: 'subChild' };
    const fieldAcabados = { dataSource: data.acabadosData, value: 'id', text: 'name', child: 'subChild' };
    const fieldTipoImpresion = { dataSource: data.tipoImpresionData, value: 'id', text: 'name', child: 'subChild' };
    const [value, setValue] = useState(null);
    const [text, setText] = useState(null);
  
    const onChange = (args) => {
      setValue(args.value && args.value.length > 0 ? args.value[0] : '');
      setText(args.element.value);
    };

    /* Modal de las ordenes */

    const handleShowModal = () => {
      setLimpiarDatos(false);
      setShowModal(true);
      setPedidoActual({
        clientes: [...clientes],
        filas: [...filas],
      });
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleContinueWithOrder = () => {
      // Almacena el pedido actual en la lista de pedidos
    setPedidos([...pedidos, { cliente: clientes[0], detalles: filas }]);
    // Limpia los datos para un nuevo pedido
    setClientes([{ nombre: '', telefono: '' }]);
    setFilas([
      {
        cantidad: '',
        archivo: '',
        base: '',
        altura: '',
        material: '',
        acabados: '',
        nota: '',
      },
    ]);
    // Cierra el modal
    setShowModal(false);
    };
  
    const handleSendOrder = () => {
      // Puedes agregar lógica adicional para guardar los datos de la orden completa del cliente
      handleCloseModal();
    };
  

    return (
        <div className='control-pane'>
          <div className='tituloSeccion'>
              <h1>{props.h1texto}</h1>
              <p>{props.ptexto}</p>
          </div>
          <div className='control-section input-content-wrapper'>
            {/* Datos Personales Cliente */}
            <div className="row custom-margin material b-DatosPersonalesCliente">
              <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <b>Datos Personales Cliente.</b>
              </div>
            </div>
            <div className="row custom-margin custom-padding-5 material inputDatos">
              <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                <TextBoxComponent placeholder="Nombre" cssClass="e-outline" floatLabelType="Auto" id='nombreCliente' />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                <TextBoxComponent placeholder="Apellido Paterno" cssClass="e-outline" floatLabelType="Auto" id='apePatCliente' />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                <TextBoxComponent placeholder="Apellido Materno" cssClass="e-outline" floatLabelType="Auto" id='apeMatCliente' />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                <TextBoxComponent placeholder="Contacto tel" cssClass="e-outline" floatLabelType="Auto" id='contactoCliente' />
              </div>
            </div>
  
          {/* Tu Pedido */}
          <div className="row custom-margin">
            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <b>Tu Pedido</b>
            </div>
          </div>
          <div className='control-section'>
            <div className="content-wrapper format-wrapper sample-numeric">
                <div className="control-label">Cantidad</div>
                     {/* Render the Numeric Textbox with decimal places as 3 */}
                    <NumericTextBoxComponent format='n3' decimals={3} validateDecimalOnType={true} value={1}></NumericTextBoxComponent>
                    <div className="control-label">Base</div>
                    <NumericTextBoxComponent format='n3' decimals={3} validateDecimalOnType={true} value={1}></NumericTextBoxComponent>
                    <div className="control-label">Altura</div>
                    <NumericTextBoxComponent format='n3' decimals={3} validateDecimalOnType={true} value={1}></NumericTextBoxComponent>
                    <div className="control-label">Importe</div>
                    <NumericTextBoxComponent format='c3' decimals={3} validateDecimalOnType={true} value={100}></NumericTextBoxComponent>
            </div>
          </div>

          {/* Material */}
        <div className='row custom-margin custom-padding-5'>
          <div className='control-section'>
            <div className="control-label">Material</div>
            <div className='col-lg-8'>
              <div id="acabados">
                <DropDownTreeComponent fields={fieldMaterial} change={onChange.bind(this)} changeOnBlur={false} placeholder="Selecciona tu  material" popupHeight="200px" />
              </div>
            </div>
          </div>
        </div>


          {/* Acabados */}
        <div className='row custom-margin custom-padding-5'>
          <div className='control-section'>
            <div className="control-label">Acabados</div>
            <div className='col-lg-8'>
              <div id="acabados">
                <DropDownTreeComponent fields={fieldAcabados} change={onChange.bind(this)} changeOnBlur={false} placeholder="Selecciona tus acabados" popupHeight="200px" />
              </div>
            </div>
          </div>
        </div>

        {/* Tipo Impresion */}
        <div className='row custom-margin custom-padding-5'>
          <div className='control-section'>
            <div className="control-label">Tipo de Impresión</div>
            <div className='col-lg-8'>
              <div id="tipoImpresion">
                <DropDownTreeComponent fields={fieldTipoImpresion} change={onChange.bind(this)} changeOnBlur={false} placeholder="Selecciona tu impresion" popupHeight="200px" />
              </div>
            </div>
          </div>
        </div>
  
          {/* Fecha Envio de Archivo */}
          <div className="row custom-margin">
            <div className='control-section'>
              Fecha Envio de Archivo
              <div className='datepicker-control-section'>
                    <DatePickerComponent value={dateValue}></DatePickerComponent>
                </div>
            </div>
            <div className='control-pane'>
                        Fecha Estimada de Entrega
                        <div className='control-section'>
                            <div className='datepicker-control-section'>
                                <DatePickerComponent value={dateValue}></DatePickerComponent>
                            </div>
                        </div>
            </div>
          </div>
  
          <div className="row custom-margin">
            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <b>Archivo</b>
              <SubirArchivo />
            </div>
          </div>
          <div className="row custom-margin textA">
            <h1>Notas</h1>
            <textarea className='textCont' type='text' name='nota' />
          </div>
        </div>
        {/* Botones */}
        <div className='contBotones'>
        <button className='hvr-shutter-out-horizontal' type='button' onClick={handleShowModal}>
          Agregar otro archivo
        </button>
        <button className='hvr-shutter-out-horizontal' type='submit'>
          Crear {props.btnaccion}
        </button>
        </div>

        <MiModal
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
        handleContinueWithOrder={handleContinueWithOrder}
        handleSendOrder={handleSendOrder}
        pedidos={pedidos} // Pasa la lista de pedidos al modal
      />
    </div>
    );
}

export default NewOrder