
import Slidenew from "../../Slidebar Section/Slidenew"
import { sectionsForJefeDi } from "../../Slidebar Section/sectionsForSlide/sections"
import '../../Orders/Orders.css'
import Asignacion from "./Asignacion"


const VistaAsigPedi = () => {
  return (
    <div className='body-app'>
		<div className="mainContainer">
				<Slidenew sections={sectionsForJefeDi}  />
			<div className="inputbodyContainer">
				<Asignacion/>
			</div>
		</div>
	</div>
  )
}

export default VistaAsigPedi