import Slidenew from "../Slidebar Section/Slidenew"
import { sectionsForAdmin } from "../Slidebar Section/sectionsForSlide/sections"
import Empleados from './Empleados'
import '../Orders/Orders.css'


const VistaEmp = () => {
  return (
    <div className="body-app">
        <div className="mainContainer">
            <Slidenew sections={sectionsForAdmin} />
            <div className="bodyContainerEmpCli">
                <Empleados/>
            </div>
        </div>
    </div>
  )
}

export default VistaEmp