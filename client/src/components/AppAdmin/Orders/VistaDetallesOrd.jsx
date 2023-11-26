import { sectionsForAdmin } from "../Slidebar Section/sectionsForSlide/sections"
import Slidenew from "../Slidebar Section/Slidenew"
import DetallesOrdenes from "./DetallesOrdenes"

const VistaDetallesOrd = () => {
  return (
    <div className="body-app">
      <div className="mainContainer">
        <Slidenew sections={sectionsForAdmin} />
        <div className="bodyContainer">
          <DetallesOrdenes/>
        </div>
      </div>
    </div>
  )
}

export default VistaDetallesOrd