import '../MainBody/MainBody.css'
import '../Orders/Orders.css'
import Slidenew from '../Slidebar Section/Slidenew';
import NewOrder from "./NewOrder"
import { sectionsForAdmin } from '../Slidebar Section/sectionsForSlide/sections';

const NuevaOrden = () => {
  return (
		<div className='body-app'>
			<div className="mainContainer">
					<Slidenew sections={sectionsForAdmin}  />
				<div className="inputbodyContainer">
					<NewOrder 
						h1texto='Crear Orden de Producción'
						ptexto='Ingresa los datos de tu pedido'
						btnaccion='Pedido'/>
				</div>
			</div>
		</div>
	);
}

export default NuevaOrden