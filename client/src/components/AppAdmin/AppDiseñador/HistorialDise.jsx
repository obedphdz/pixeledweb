import Slidenew from "../Slidebar Section/Slidenew"
import { sectionsForDisenador } from "../Slidebar Section/sectionsForSlide/sections"
import HistorialPedi from "../HistorialPedidos/HistorialPedi"

const HistorialDise = () => {
  return (
    <div className="body-app">
        <div className="mainContainer">
            <Slidenew sections={sectionsForDisenador} />
            <div className="bodyContainer">
                <HistorialPedi/>
            </div>
        </div>
    </div>
  )
}

export default HistorialDise