import Slidenew from "../Slidebar Section/Slidenew"
import { sectionsForAdmin } from "../Slidebar Section/sectionsForSlide/sections"
import Clientes from "./Clientes"

const VistaClientes = () => {
  return (
    <div className="body-app">
        <div className="mainContainer">
            <Slidenew sections={sectionsForAdmin} />
            <div className="bodyContainer">
                <Clientes/>
            </div>
        </div>
    </div>
  )
}

export default VistaClientes