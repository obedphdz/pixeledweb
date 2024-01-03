/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */

/* NewOrder.jsx */
import { useState, useEffect, useRef} from 'react';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import SubirArchivo from './Archivo/subirArchivo';
import Modal from './ModalOrder/Modal'
import {materialData, acabadosData, tipoImpresionData} from './MaterialData/materialData.json';
import './NewOrder.css';
import { useLocalStorage } from "./useLocalStorage"
import { useNavigate } from 'react-router-dom';


const NewOrder = (props) => {

  const dateValue = new Date();
  const navigate = useNavigate();


  /* Guardamos en el LocalStorage los datos personales del cliente */
  const [nombreCliente, setnombreCliente] = useLocalStorage('nombreCliente', '');
  const [apePatCliente, setapePatCliente] = useLocalStorage('apePatCliente', '');
  const [apeMatCliente, setapeMatCliente] = useLocalStorage('apeMatCliente', '');
  const [contactoCliente, setcontactoCliente] = useLocalStorage('contactoCliente', '');

  /* Otros valores */
  const [instalacion, setInstalacion] = useLocalStorage('instalacion', false);
  const [barniz, setBarniz] = useLocalStorage('barniz', false);
  const [cantidad, setCantidad] = useLocalStorage('cantidad', 1);
  const [base, setBase] = useLocalStorage('base', 1);
  const [altura, setAltura] = useLocalStorage('altura', 1);
  const [precioUnitario, setprecioUnitario] = useLocalStorage('precioUnitario', 100);
  const [material, setMaterial] = useLocalStorage('material', null);
  const [acabado, setAcabado] = useLocalStorage('acabado', null);
  const [tipoImpresion, setTipoImpresion] = useLocalStorage('tipoImpresion', null);
  const [fechaEnvio, setFechaEnvio] = useLocalStorage('fechaEnvio', dateValue);
  const [fechaEntrega, setFechaEntrega] = useLocalStorage('fechaEntrega', dateValue);
  const [fechaInstalacion, setFechaInstalacion] = useLocalStorage('fechaInstalacion', dateValue);
  const [archivo, setArchivo] = useLocalStorage('archivo', '');
  const [notas, setNotas] = useLocalStorage('notas', '');

  const [formData, setFormData] = useState({
    nombreCliente: '',
    apePatCliente: '',
    apeMatCliente: '',
    contactoCliente,
    instalacion: false,
    barniz: false,
    cantidad: 1,
    base: 1,
    altura: 1,
    precioUnitario: 100,
    material: null,
    acabado: null,
    tipoImpresion: null,
    fechaEnvio: dateValue,
    fechaEntrega: dateValue,
    fechaInstalacion: dateValue,
    archivo: '',
    notas: '',
  });

  /* Mostrar Modal */
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    // Antes de mostrar el modal, nos aseguramos de que los datos estén guardados
    handleCreateOrder();
    setShowModal(true);
  };

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
      tipoImpresion: tipoImpresion,
      fechaEnvio: fechaEnvio,
      fechaEntrega: fechaEntrega,
      fechaInstalacion:  fechaInstalacion,
      archivo: archivo,
      notas: notas,
    };
    
    const handleCreateOrder = () => {
      // Validar que los campos requeridos estén completos antes de crear el pedido
      if (!nombreCliente || !apePatCliente || !apeMatCliente) {
        // Muestra un mensaje de error o realiza alguna acción
        console.log("No se han llenado los datos personales del usuario. ");
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
        tipoImpresion,
        fechaEnvio,
        fechaEntrega,
        fechaInstalacion,
        archivo,
        notas
      };
  
      // Aquí deberías enviar el nuevo pedido al backend y almacenarlo en la base de datos
      // Puedes utilizar la función fetch o alguna librería para realizar la solicitud HTTP
  
      // Limpia el estado del formulario después de enviar los datos
      setFormData({
        nombreCliente: '',
        apePatCliente: '',
        apeMatCliente: '',
        contactoCliente,
        instalacion: false,
        barniz: false,
        cantidad: 1,
        base: 1,
        altura: 1,
        precioUnitario: 100,
        material: null,
        acabado: null,
        tipoImpresion: null,
        fechaEnvio: dateValue,
        fechaEntrega: dateValue,
        fechaInstalacion: dateValue,
        archivo: '',
        notas: '',
      });
  
      // Cierra el modal
      setShowModal(false);

      console.log('Órdenes almacenadas:', nuevaOrden);
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
        case "tipoImpresion":
          setTipoImpresion(value);
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
      setArchivo('');
    
      // Reiniciamos los valores necesarios para el nuevo archivo
      setCantidad(1);
      setBase(1);
      setAltura(1);
      setprecioUnitario(100);
      setMaterial(null);
      setAcabado(null);
      setInstalacion(null);
      setBarniz(null);
      setTipoImpresion(null);
      setArchivo(null);
      setFechaEnvio(new Date());
      setFechaEntrega(new Date());
      setFechaInstalacion(new Date());
      setNotas('');
    
      // También puedes limpiar el estado de formData si es necesario
      setFormData({
        nombreCliente: '',
        apePatCliente: '',
        apeMatCliente: '',
        contactoCliente,
        instalacion: false,
        barniz: false,
        cantidad: 1,
        base: 1,
        altura: 1,
        precioUnitario: 100,
        material: null,
        acabado: null,
        tipoImpresion: null,
        fechaEnvio: new Date(),
        fechaEntrega: new Date(),
        fechaInstalacion: new Date(),
        archivo: '',
        notas: '',
      });

      // Recargar la página
      navigate('/ad/nueva-orden');
    };
    
  
    const handleSendOrder = () => {
       // Guardar datos del pedido
      console.log("handleSendOrder clicked");
      // Esta función se llama cuando el usuario elige enviar el pedido
      handleCreateOrder(); 


      // Aquí podrías realizar alguna acción adicional antes de enviar el pedido, si es necesario
      // Luego, puedes enviar los datos al backend para almacenarlos en la base de datos

      /*   Ejemplo de cómo podrías hacer una solicitud al backend usando fetch
      fetch('http://tu-backend.com/api/guardarPedido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Puedes ajustar los datos que envías según tu API
      })
        .then(response => response.json())
        .then(data => {
          // Aquí puedes manejar la respuesta del backend, si es necesario
          console.log('Respuesta del backend:', data);
        })
        .catch(error => {
          // Manejar errores de la solicitud al backend
          console.error('Error al enviar pedido al backend:', error);
        }); */

        // Reiniciamos los valores necesarios para el nuevo archivo
       setnombreCliente('');
       setapePatCliente('');
       setapeMatCliente('');
       setcontactoCliente('');
       setCantidad(1);
       setBase(1);
       setAltura(1);
       setprecioUnitario(100);
       setMaterial(null);
       setAcabado(null);
       setTipoImpresion(null);
       setArchivo('');
       setInstalacion(null);
       setBarniz(null);
       setFechaEnvio(new Date());
       setFechaEntrega(new Date());
       setFechaInstalacion(new Date());
       setNotas('');

       // Recargar la página
      navigate('/ad/nueva-orden');
};

    return (
        <div className='control-pane'>
          <div className='tituloNew'>
              <h1>{props.h1texto}</h1>
              <p>{props.ptexto}</p>
          </div>
          <div className='control-section input-content-wrapper'>
            {/* Datos Personales Cliente */}
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
                  /* value={formData.nombreCliente} */
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
          {/* Tu Pedido */}
          <div className="row custom-margin">
          <div className='control-sectionPedido'>
          <p className='tituloPedido'>Tú Pedido</p>
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
              <h4>Tipo Impresión</h4>
              <DropDownListComponent
                id="tipoImpresion"
                dataSource={tipoImpresionData} 
                fields={localFields}
                value={tipoImpresion}
                change={(e) => setTipoImpresion(e.value)}
                input={(args) => handleInputChange('tipoImpresion', args.value)}
                placeholder="Selecciona tu impresión"
                popupHeight="220px"
              />
            </div>
          </div>
          
        <br/><br/>
        </div>
          {/* Fecha Envio de Archivo */}
          <div className="row custom-margin">
            <div className='control-section'>
              Fecha Envio de Archivo
              <div className='datepicker-control-section'>
                    <DatePickerComponent 
                      id="fechaEnvio" 
                      value={fechaEnvio}
                      change={(e) => setFechaEnvio(e.value)}
                      input={(args) => handleInputChange('fechaEnvio', args.value)}>
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
                      input={(args) => handleInputChange('fechaEntrega', args.value)}>
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
                    input={(args) => handleInputChange('fechaInstalacion', args.value)}>
                  </DatePickerComponent>
                </div>
              </div>
            </div>
          )}

          </div>

        {/* Switch Instalacion/Barniz */}
        <div className="control-pane">
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
        {/* Botones */}
        <div className='contBotones'>
          <button className='hvr-shutter-out-horizontal' type='button' onClick={handleShowModal} id='agregarArchivo'>
            Agregar otro archivo
          </button>
          <button className='hvr-shutter-out-horizontal' type='submit'  onClick={handleSendOrder} id='crearPedido'>
            Crear Pedido
          </button>
        </div>

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