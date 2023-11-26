
import Slidenew from "../../Slidebar Section/Slidenew"
import { sectionsForJefeDi } from "../../Slidebar Section/sectionsForSlide/sections"
import NewOrder from "../../NuevaOrden/NewOrder"
import '../../Orders/Orders.css'


const CrearOrdenDi = () => {
  return (
    <div className='body-app'>
		<div className="mainContainer">
				<Slidenew sections={sectionsForJefeDi}  />
			<div className="inputbodyContainer">
				<NewOrder 
					h1texto='Crear Orden de Producción'
					ptexto='Ingresa los datos de tu pedido'
					btnaccion='Pedido'/>
			</div>
		</div>
	</div>
  )
}

export default CrearOrdenDi