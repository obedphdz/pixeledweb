import OrdersInProduction from "../../Orders/OrdersInProduction"
import { sectionsForJefeDi } from "../../Slidebar Section/sectionsForSlide/sections"
import Slidenew from "../../Slidebar Section/Slidenew"

const MisPedidos = () => {
  return (
    <div className="body-app">
      <div className="mainContainer">
        <Slidenew sections={sectionsForJefeDi} />
        <div className="bodyContainer">
          <OrdersInProduction/>
        </div>
      </div>
    </div>
  )
}

export default MisPedidos