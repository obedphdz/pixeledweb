
import Slidenew from "../../Slidebar Section/Slidenew"
import {sectionsForJefeDi} from '../JefeDise'
import BodyNueva from '../../NuevaOrden/BodyNueva'


const CrearOrdenDi = () => {
  return (
    <div className='body-app'>
		<div className="mainContainer">
				<Slidenew sections={sectionsForJefeDi}  />
				<BodyNueva
					h1texto='Crear Orden de Producción'
					ptexto='Ingresa los datos de tu pedido'
					btnaccion='Pedido'
				/>
		</div>
	</div>
  )
}

export default CrearOrdenDi