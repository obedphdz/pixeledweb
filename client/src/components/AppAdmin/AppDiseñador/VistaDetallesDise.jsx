import {sectionsForDisenador } from "../Slidebar Section/sectionsForSlide/sections"
import Slidenew from "../Slidebar Section/Slidenew"
import DetallesOrdenes from "../Orders/DetallesOrdenes"

const VistaDetallesDise = () => {
  return (
    <div className="body-app">
      <div className="mainContainer">
        <Slidenew sections={sectionsForDisenador} />
        <div className="bodyContainer">
          <DetallesOrdenes/>
        </div>
      </div>
    </div>
  )
}

export default VistaDetallesDise