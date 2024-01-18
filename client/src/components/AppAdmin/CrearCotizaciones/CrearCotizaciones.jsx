
/* CrearCotizaciones.jsx */
import '../MainBody/MainBody.css'
import { sectionsForAdmin } from '../Slidebar Section/sectionsForSlide/sections';
import Slidenew from '../Slidebar Section/Slidenew';
import NewOrder from "../NuevaOrden/Crear Orden/NewOrder"
import Header from '../MainBody/Header/Header';
import { OrderContextProvider } from '../NuevaOrden/Orders Context/OrderContext'; 

export default function Cotizaciones() {
  return (
	<OrderContextProvider>
		<div className='body-app'>
			<div className="mainContainer">
					<Slidenew sections={sectionsForAdmin}  />
				<div className="inputbodyContainer">
					<div className="m-2 md:m-0 mt-2 p-2 md:p-6 bg-white rounded-3xl crearOrdenDiv">
					<Header category='Admin' title="Crea tu Cotización." />
						<NewOrder 
							ptexto='Ingresa los datos de tu pedido'
							btnaccion='Pedido'/>
					</div>
				</div>
			</div>
		</div>
	</OrderContextProvider>
	);
}
