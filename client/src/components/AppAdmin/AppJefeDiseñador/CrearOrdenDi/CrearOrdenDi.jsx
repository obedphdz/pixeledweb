
import Slidenew from "../../Slidebar Section/Slidenew"
import { sectionsForJefeDi } from "../../Slidebar Section/sectionsForSlide/sections"
import NewOrder from "../../NuevaOrden/Crear Orden/NewOrder"
import '../../Orders/Orders.css'
import Header from '../../MainBody/Header/Header';
import { OrderContextProvider } from '../../NuevaOrden/Orders Context/OrderContext';


const CrearOrdenDi = () => {
  return (
    <OrderContextProvider>
		<div className='body-app'>
			<div className="mainContainer">
					<Slidenew sections={sectionsForJefeDi}  />
				<div className="inputbodyContainer">
					<div className="m-2 md:m-0 mt-2 p-2 md:p-6 bg-white rounded-3xl">
						<Header category='Jefe Admin' title="Crear Orden de Producción." />
							<NewOrder 
								ptexto='Ingresa los datos de tu pedido'
								btnaccion='Pedido'/>
					</div>
				</div>
			</div>
		</div>
    </OrderContextProvider>
  )
}

export default CrearOrdenDi