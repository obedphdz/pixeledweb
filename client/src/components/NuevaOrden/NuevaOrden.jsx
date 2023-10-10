import '../AppAdmin/Admin.css'
import Slidebar from "../Slidebar Section/Slidebar"
import BodyNueva from './BodyNueva'


const NuevaOrden = () => {
  return (
		<div className='app-body'>
			<div className='containerAdmin'>
				<Slidebar />
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