import { sectionsForAdmin } from "../Slidebar Section/sectionsForSlide/sections"
import Slidenew from "../Slidebar Section/Slidenew"
import OrdersInProduction from "./OrdersInProduction"



const VistaOrdenes = () => {
  return (
    <div className="body-app">
        <div className="mainContainer">
			<Slidenew sections={sectionsForAdmin} />
			<div className="ordersContainer">
				<OrdersInProduction/>
			</div>
		</div>
    </div>
  )
}

export default VistaOrdenes