
/* JefeDise.jsx */

import Slidenew from "../Slidebar Section/Slidenew"
import OrdersInProduction from "../Orders/OrdersInProduction"
import { sectionsForDisenador} from "../Slidebar Section/sectionsForSlide/sections"
import '../Orders/Orders.css'

const Disenador = () => {
  return (
	<div className="body-app">
		<div className="mainContainer">
			<Slidenew sections={sectionsForDisenador} />
			<div className="bodyContainer">
				<OrdersInProduction />
			</div>
		</div>
  	</div>
  
  )
}

export default Disenador