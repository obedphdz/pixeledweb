import '../MainBody/MainBody.css'
import Slidenew from '../Slidebar Section/Slidenew';
import BodyNueva from './BodyNueva'


const NuevaOrden = () => {
  return (
	<div className='body-app'>
		<div className="mainContainer">
				<Slidenew />
				<BodyNueva
					h1texto='Crear Orden de Producción'
					ptexto='Ingresa los datos de tu pedido'
					btnaccion='Pedido'
				/>
			</div>
		</div>
	);
}

export default NuevaOrden