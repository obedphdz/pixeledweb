/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */

/* NewOrder.jsx */
import { useState, useEffect} from 'react';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import SubirArchivo from './Archivo/subirArchivo';
import Modal from './ModalOrder/Modal'
import {materialData, acabadosData, tipoImpresionData} from './MaterialData/materialData.json';
import './NewOrder.css';
import { useLocalStorage } from "./useLocalStorage"

const NewOrder = (props) => {

  const dateValue = new Date();

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
  const [importe, setImporte] = useLocalStorage('importe', 100);
  const [material, setMaterial] = useLocalStorage('material', null);
  const [acabado, setAcabado] = useLocalStorage('acabado', null);
  const [tipoImpresion, setTipoImpresion] = useLocalStorage('tipoImpresion', null);
  const [fechaEnvio, setFechaEnvio] = useLocalStorage('fechaEnvio', dateValue);
  const [fechaEntrega, setFechaEntrega] = useLocalStorage('fechaEntrega', dateValue);
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
    importe: 100,
    material: null,
    acabado: null,
    tipoImpresion: null,
    fechaEnvio: dateValue,
    fechaEntrega: dateValue,
    archivo: '',
    notas: '',
  });

  
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    // Antes de mostrar el modal, nos aseguramos de que los datos estén guardados
    handleCreateOrder();
    setShowModal(true);
  };

    /* Material Data */
    const localFields = { text: 'name', value: 'name' };

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
      importe: importe,
      material: material,
      acabado: acabado,
      tipoImpresion: tipoImpresion,
      fechaEnvio: fechaEnvio,
      fechaEntrega: fechaEntrega,
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
        importe,
        material,
        acabado,
        tipoImpresion,
        fechaEnvio,
        fechaEntrega,
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
        importe: 100,
        material: null,
        acabado: null,
        tipoImpresion: null,
        fechaEnvio: dateValue,
        fechaEntrega: dateValue,
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
        case "importe":
          setImporte(value);
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
      console.log("Continue with order clicked .. ");
      // Aquí puedes implementar la lógica para continuar con otro archivo
      // Puedes realizar alguna acción o simplemente limpiar el estado actual y permitir al usuario agregar más archivos
      setFormData({
        ...formData,
        archivo: '', // Limpiar el campo de archivo
      });
    };
  
    const handleSendOrder = () => {
       // Guardar datos del pedido
       console.log('Datos del pedido enviados: (Send Order clicked ... )', formData);

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
                    <div className="control-label">Importe</div>
                    <NumericTextBoxComponent  
                      id='importe' 
                      format='c3' 
                      decimals={3} 
                      validateDecimalOnType={true} 
                      onChange={(e) => setImporte(e.value)}
                      value={importe} 
                      input={(args) => handleInputChange('importe', args.value)}>
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
          <button className='hvr-shutter-out-horizontal' type='submit'  onClick={handleCreateOrder} id='crearPedido'>
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