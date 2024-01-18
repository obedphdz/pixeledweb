/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */

/* NewOrder.jsx */
import './NewOrder.css';
import { useLocalStorage } from "../useLocalStorage"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';
import Modal from '../ModalOrder/Modal'
import SideAr from '../SideArchivos/SideAr';
import SubirArchivo from '../Archivo/subirArchivo';
import { useOrderContext, OrderContextProvider  } from '../Orders Context/OrderContext'; 
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { FaChevronCircleDown } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaCircleChevronDown } from "react-icons/fa6";
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import {materialData, acabadosData, tipoTrabajoData} from '../MaterialData/materialData.json';


const NewOrder = (props) => {

  const dateValue = new Date();
  const navigate = useNavigate();
  const [pedidos, setPedidos] = useState([]);
  const { orders, addOrder, clearOrders, isDataSaved, setDatosGuardados } = useOrderContext();
  
  /* Guardamos en el LocalStorage los datos personales del cliente */
  const [nombreCliente, setnombreCliente] = useLocalStorage('nombreCliente', '');
  const [apePatCliente, setapePatCliente] = useLocalStorage('apePatCliente', '');
  const [apeMatCliente, setapeMatCliente] = useLocalStorage('apeMatCliente', '');
  const [contactoCliente, setcontactoCliente] = useLocalStorage('contactoCliente', '');

  /*  Guardamos en el LocalStorage los demas valores */
  const [instalacion, setInstalacion] = useLocalStorage('instalacion', false);
  const [barniz, setBarniz] = useLocalStorage('barniz', false);
  const [cantidad, setCantidad] = useLocalStorage('cantidad', 1);
  const [base, setBase] = useLocalStorage('base', 1);
  const [altura, setAltura] = useLocalStorage('altura', 1);
  const [precioUnitario, setprecioUnitario] = useLocalStorage('precioUnitario', 100);
  const [material, setMaterial] = useLocalStorage('material', null);
  const [acabado, setAcabado] = useLocalStorage('acabado', null);
  const [tipoTrabajo, setTipoTrabajo] = useLocalStorage('tipoTrabajo', null);
  const [fechaEnvio, setFechaEnvio] = useLocalStorage('fechaEnvio', dateValue);
  const [fechaEntrega, setFechaEntrega] = useLocalStorage('fechaEntrega', dateValue);
  const [fechaInstalacion, setFechaInstalacion] = useLocalStorage('fechaInstalacion', dateValue);
  const [archivo, setArchivo] = useLocalStorage('archivo', '');
  const [notas, setNotas] = useLocalStorage('notas', '');

  /* Mostrar Modal */
  const [showModal, setShowModal] = useState(false);

    /* Material Data */
    const localFields = { text: 'name', value: 'name' };

   /* Objeto que sirve para dar un resumen de los datos en el modal */ 
    const orderSummary = {
      nombreCliente: nombreCliente,
      apePatCliente: apePatCliente,
      apeMatCliente: apeMatCliente,
      contactoCliente: contactoCliente,
      instalacion: instalacion,
      barniz: barniz,
      cantidad: cantidad,
      base: base,
      altura: altura,
      precioUnitario: precioUnitario,
      material: material,
      acabado: acabado,
      tipoTrabajo: tipoTrabajo,
      fechaEnvio: fechaEnvio,
      fechaEntrega: fechaEntrega,
      fechaInstalacion:  fechaInstalacion,
      archivo: archivo,
      notas: notas,
    };
    
     /* Funcion  para limpiar los datos del archivo actual. */
     const handleResetOrder = () => {
      // Limpiar datos del archivo actual
      setArchivo('');
      setCantidad(1);
      setBase(1);
      setAltura(1);
      setprecioUnitario(100);
      setMaterial(null);
      setAcabado(null);
      setTipoTrabajo(null);
      setInstalacion(false);
      setBarniz(false);
      setFechaEnvio(new Date());
      setFechaEntrega(new Date());
      setFechaInstalacion(new Date());
      setNotas('');
    };

    const handleCreateOrder = () => {
      // Validar que los campos requeridos estén completos antes de crear el pedido
      if (!nombreCliente || !apePatCliente || !apeMatCliente) {
        // Muestra un mensaje de error o realiza alguna acción
        alert("No se han llenado los datos personales del usuario. ");
        return;
      }
  
      // Crea un nuevo objeto de pedido con los datos actuales
      const nuevaOrden = {
        nombreCliente,
        apePatCliente,
        apeMatCliente,
        contactoCliente,
        instalacion,
        barniz,
        cantidad,
        base,
        altura,
        precioUnitario,
        material,
        acabado,
        tipoTrabajo,
        fechaEnvio,
        fechaEntrega,
        fechaInstalacion,
        archivo,
        notas
      };
  
      // Almacena el nuevo pedido en el estado "pedidos"
      setPedidos([...pedidos, nuevaOrden]);

      // Almacena el nuevo pedido utilizando la función proporcionada por el contexto
      addOrder(nuevaOrden);

      setShowModal(true);

      console.log('Órdenes almacenadas:', nuevaOrden);
      
      // Marca los datos como guardados
      setDatosGuardados(true);

       // Marca los datos como guardados usando isDataSaved del contexto
      isDataSaved(true);

      handleResetOrder();

      navigate('/ad/nueva-orden');
    };
    
    const handleInputChange = (name, value) => {
      console.log(`Setting ${name} to:`, value);
      switch (name) {
        case "nombreCliente":
          setnombreCliente(value);
          break;
        case "apePatCliente":
          setapePatCliente(value);
          break;
        case "apeMatCliente":
          setapeMatCliente(value);
          break;
        case "contactoCliente":
          setcontactoCliente(value);
          break;
        case "instalacion":
          setInstalacion(value);
          break;
        case "barniz":
          setBarniz(value);
          break;
        case "cantidad":
          setCantidad(value);
          break;
        case "base":
          setBase(value);
          break;
        case "altura":
          setAltura(value);
          break;
        case "precioUnitario":
          setprecioUnitario(value);
          break;
        case "material":
          setMaterial(value);
          break;
        case "acabado":
          setAcabado(value);
          break;
        case "tipoTrabajo":
          setTipoTrabajo(value);
          break;
        case "fechaEnvio":
          setFechaEnvio(value);
          break;
        case "fechaEntrega":
          setFechaEntrega(value);
          break;
        case "fechaInstalacion":
          setFechaInstalacion(value);
          break;
        case "archivo":
          // If value is a file, you might want to handle it differently
          // For simplicity, assuming it's the file URL for now
          setArchivo(value);          
          break;
        case "notas":
          setNotas(value);
          break;
        default:
          break;
      }
    };
  
    const handleContinueWithOrder = () => {
      // Esta función se llama cuando el usuario elige continuar con otro archivo
      // Limpiamos los datos del archivo actual
      console.log("Continue With Order clicked");
      setDatosGuardados(true);
      
      isDataSaved(true);
  
      // Recargar la página
      navigate('/ad/nueva-orden');
      
    };
    
  const handleSendOrder = () => {
  /*         // Obtener la lista de archivos seleccionados del componente SideAr
      const selectedFiles = this.state.selectedFiles;

      // Obtener los datos de la orden del componente MainAr
      const orderData = this.props.orderData;

      // Enviar la orden a un servidor
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/orders");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify({
        selectedFiles,
        orderData
      }));
 */
      // Mostrar un mensaje de confirmación
      alert("La orden se ha enviado correctamente");
      // Esta función se llama cuando el usuario elige enviar el pedido
      handleCreateOrder();
      setDatosGuardados(true);
      isDataSaved(true);
      
      handleResetOrder(true);
    };

    const handleShowModal = () => {
      handleCreateOrder();
      setShowModal(true);
  }

    // Función para manejar la selección de archivos desde SideAr
  const handleFileSelected = (selectedFile) => {
    // Aquí puedes manejar la lógica para mostrar el formulario correspondiente al archivo seleccionado
    console.log('Archivo seleccionado:', selectedFile);

/*       // Obtener el archivo seleccionado del componente SideAr
    const file = selectedFile.file;

    // Agregar el archivo seleccionado a la lista de archivos seleccionados del componente MainAr
    this.setState({
      selectedFiles: [...this.state.selectedFiles, file]
    });

    // Actualizar el estado del componente MainAr
    this.forceUpdate(); */

    handleResetOrder();
  };

  // Función para manejar el evento de finalizar la orden desde SideAr
  const handleFinalizarOrden = () => {
    // Aquí puedes manejar la lógica para finalizar la orden
    alert('Finalizar Orden');
  };

  /* Visibilidad componente datosCliente */
  const [datosClientesVisible, setDatosClientesVisible] = useState(true);


    return (
        <div className='control-pane principalDiv'>
          <div className='tituloNew'>
              <p  className='tituloNew'>{props.ptexto}</p>
          </div>
          <FaCircleChevronDown
              className="iconoDown"
              onClick={() => setDatosClientesVisible(!datosClientesVisible)}
          />
          <div className='control-section input-content-wrapper'>
            {/* Datos Personales Cliente */}
            {datosClientesVisible && (
              <div className="datosClientes">
                  <p className='miP'>Datos Personales Cliente.</p>

                  <div className="row custom-margin custom-padding-5 material inputDatos">
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6 inputDat">
                      <TextBoxComponent 
                        placeholder="Nombre" 
                        cssClass="e-outline" 
                        onChange={(e) => setnombreCliente(e.target.value)}
                        value={nombreCliente}
                        required={true}
                        floatLabelType="Auto" 
                        id='nombreCliente' 
                        input={(args) => handleInputChange('nombreCliente', args.value)}/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6 inputDat">
                      <TextBoxComponent 
                        placeholder="Apellido Paterno" 
                        onChange={(e) => setapePatCliente(e.target.value)}
                        value={apePatCliente}
                        cssClass="e-outline" 
                        required={true}
                        floatLabelType="Auto" 
                        id='apePatCliente'
                        input={(args) => handleInputChange('apePatCliente', args.value)} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6 inputDat ">
                      <TextBoxComponent 
                        placeholder="Apellido Materno" 
                        onChange={(e) => setapeMatCliente(e.target.value)}
                        value={apeMatCliente}
                        cssClass="e-outline" 
                        required={true}
                        floatLabelType="Auto" 
                        id='apeMatCliente'
                        input={(args) => handleInputChange('apeMatCliente', args.value)} />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6 inputDat">
                      <TextBoxComponent 
                        placeholder="Contacto tel" 
                        onChange={(e) => setcontactoCliente(e.target.value)}
                        value={contactoCliente}
                        cssClass="e-outline" 
                        floatLabelType="Auto"
                        required={true} 
                        id='contactoCliente' 
                        input={(args) => handleInputChange('contactoCliente', args.value)} />
                    </div>
                  </div>
              </div>
            )}
          {/* Tu Pedido */}
          <div className="row custom-margin tuPedido">
            <div className='control-sectionPedido'>
              <p className='tituloPedido'>Tú Pedido.</p>
                <div className="content-wrapper format-wrapper sample-numeric">
                    <div className="control-label">Cantidad</div>
                    <NumericTextBoxComponent 
                      id='cantidad' 
                      format='n3' 
                      decimals={3} 
                      validateDecimalOnType={true}
                      onChange={(e) => setCantidad(e.value)}
                      value={cantidad} 
                      input={(args) => handleInputChange('cantidad', args.value)}
                      ></NumericTextBoxComponent>
                    <div className="control-label">Base</div>
                    <NumericTextBoxComponent  
                      id='base' 
                      format='n3' 
                      decimals={3} 
                      validateDecimalOnType={true} 
                      onChange={(e) => setBase(e.value)}
                      value={base} 
                      input={(args) => handleInputChange('base', args.value)}>
                    </NumericTextBoxComponent>
                    <div className="control-label">Altura</div>
                    <NumericTextBoxComponent  
                      id='altura' 
                      format='n3' 
                      decimals={3} 
                      validateDecimalOnType={true} 
                      onChange={(e) => setAltura(e.value)}
                      value={altura} 
                      input={(args) => handleInputChange('altura', args.value)}>
                    </NumericTextBoxComponent>
                    <div className="control-label">Precio Unitario</div>
                    <NumericTextBoxComponent  
                      id='precioUnitario' 
                      format='c3' 
                      decimals={3} 
                      validateDecimalOnType={true} 
                      onChange={(e) => setprecioUnitario(e.value)}
                      value={precioUnitario} 
                      input={(args) => handleInputChange('precioUnitario', args.value)}>
                    </NumericTextBoxComponent>
            </div>
          </div>
        </div>
      
      {/* Material */}    
        <div className='control-paneMaterial'>
          <div className='control-section'>
            <div className='col-lg-6'>
              <h4>Material</h4>
              <DropDownListComponent
                 id="material"
                 dataSource={materialData}
                 fields={localFields}
                 value={material}
                 onChange={(e) => setMaterial(e.target.value)}
                 input={(args) => handleInputChange('material', args.value)}
                 placeholder="Selecciona tu material"
                 popupHeight="220px"
              />
            </div>

            <div className='col-lg-6'>
              <h4>Acabados</h4>
              <DropDownListComponent
                id="acabado"
                dataSource={acabadosData} 
                fields={localFields}
                value={acabado}
                change={(e) => setAcabado(e.value)}
                input={(args) => handleInputChange('acabado', args.value)}
                placeholder="Selecciona tu acabado"
                popupHeight="220px"
              />
            </div>

            <div className='col-lg-6'>
              <h4>Tipo de Trabajo</h4>
              <DropDownListComponent
                id="tipoTrabajo"
                dataSource={tipoTrabajoData} 
                fields={localFields}
                value={tipoTrabajo}
                change={(e) => setTipoTrabajo(e.value)}
                input={(args) => handleInputChange('tipoTrabajo', args.value)}
                placeholder="Selecciona el tipo de trabajo."
                popupHeight="220px"
              />
            </div>
          </div>
          
        <br/><br/>
          {/* Fecha Envio de Archivo */}
          <div className="row custom-margin">
            <div className='control-section'>
              Fecha Envio de Archivo
              <div className='datepicker-control-section'>
                    <DatePickerComponent 
                      id="fechaEnvio" 
                      value={fechaEnvio}
                      change={(e) => setFechaEnvio(e.value)}
                      input={(args) => handleInputChange('fechaEnvio', args.value)}
                      format='dd/MM/yyyy'>
                    </DatePickerComponent>
                </div>
            </div>
            {/* Fecha Estimada de entrega */}
            <div className='control-pane'>
              Fecha Estimada de Entrega
                <div className='control-section'>
                  <div className='datepicker-control-section'>
                    <DatePickerComponent 
                      id="fechaEntrega" 
                      value={fechaEntrega}
                      change={(e) => setFechaEntrega(e.value)}
                      input={(args) => handleInputChange('fechaEntrega', args.value)}
                      format='dd/MM/yyyy'>
                    </DatePickerComponent>
                  </div>
                </div>
            </div>

            {/* Fecha Instalacion: solo mostrarse en caso de que activaron el switchComponent de 'instalacion' */}
          {instalacion && (
            <div className='control-pane'>
              Fecha de Instalación
              <div className='control-section'>
                <div className='datepicker-control-section'>
                  <DatePickerComponent 
                    id="fechaInstalacion" 
                    value={fechaInstalacion}
                    change={(e) => setFechaInstalacion(e.value)}
                    input={(args) => handleInputChange('fechaInstalacion', args.value)}
                    format='dd/MM/yyyy'>
                  </DatePickerComponent>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Switch Instalacion/Barniz */}
        <div className="control-pane switchInstBarniz">
            <div className="col-lg-12 control-section">
                <div className="switch-content">
                    <div className="container switch-control">
                        <div>
                            <h4 className="heading">Seleccionar Sí/No</h4>
                        </div>
                        <div>
                            <label htmlFor="unchecked" style={{ padding: "20px 14px 10px", marginLeft:'10px' }}> Instalación: </label>
                            <SwitchComponent 
                              id="instalacion" 
                              change={(e) => setInstalacion(e.checked)}
                              checked={instalacion} 
                              input={(args) => handleInputChange('instalacion', args.value)}
                            > 
                            </SwitchComponent>
                            <label htmlFor="unchecked" style={{ padding: "20px 14px 10px 0", marginLeft:'30px'}}> Barniz Antigrafitti: </label>
                            <SwitchComponent 
                              id="barniz"
                              change={(e) => setBarniz(e.checked)}
                              checked={barniz} 
                              input={(args) => handleInputChange('barniz', args.value)} >
                            </SwitchComponent>  
                        </div>
                    </div>
                </div>
            </div>
      </div>
  
          <div className="row custom-margin">
            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <b>Archivo</b>
              <SubirArchivo 
                id="archivo"
                value={archivo}
                onFileSelected={(fileUrl) => handleInputChange('archivo', fileUrl)}
              />
            </div>
          </div>
          <div className="row custom-margin textA">
            <h1>Notas</h1>
              <textarea 
              className='textCont' 
              type='text' 
              name='notas' 
              id="notas"
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
              />
          </div>
        </div>
      </div>

      <div className="controlBtn">
          <button className='hvr-shutter-out-horizontal' type='button' onClick={handleShowModal} id='agregarArchivo'>
            Guardar archivo.
          </button>
      </div>

        {/* Componente lateral donde contienen los archivos si es que se desea agregar mas */}
        <SideAr 
          onFileSelected={handleFileSelected} 
          onFinalizarOrden={handleFinalizarOrden} 
          setDatosGuardados={setDatosGuardados} 
          isDataSaved={isDataSaved}
        />

        {/* Modal que muestra un resumen de lo llenado en el form */}
        <Modal
          showModal={showModal}
          orderSummary={orderSummary}
          handleCloseModal={() => setShowModal(false)}
          handleContinueWithOrder={handleContinueWithOrder}
          handleSendOrder={handleSendOrder}
        />
    </div>
    );
}

export default NewOrder