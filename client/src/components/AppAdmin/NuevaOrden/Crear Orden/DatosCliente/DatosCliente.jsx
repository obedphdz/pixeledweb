import { TextBoxComponent  } from '@syncfusion/ej2-react-inputs';
import { useLocalStorage } from "../../useLocalStorage"


export const [nombreCliente, setnombreCliente] = useLocalStorage('nombreCliente', '');
export const [apePatCliente, setapePatCliente] = useLocalStorage('apePatCliente', '');
export const [apeMatCliente, setapeMatCliente] = useLocalStorage('apeMatCliente', '');
export const [contactoCliente, setcontactoCliente] = useLocalStorage('contactoCliente', '');

export const handleInputChangeDatosCliente = (name, value) => {
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
    }
  };

const DatosCliente = () => {
    
  return (
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
            input={(args) => handleInputChangeDatosCliente('nombreCliente', args.value)}/>
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
            input={(args) => handleInputChangeDatosCliente('apePatCliente', args.value)} />
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
            input={(args) => handleInputChangeDatosCliente('apeMatCliente', args.value)} />
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
            input={(args) => handleInputChangeDatosCliente('contactoCliente', args.value)} />
        </div>
        </div>
    </div>
  )
}

export default DatosCliente