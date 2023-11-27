import { sectionsForJefeDi } from "../../Slidebar Section/sectionsForSlide/sections"
import Slidenew from "../../Slidebar Section/Slidenew"
import HistorialPedi from "../../HistorialPedidos/HistorialPedi"

const HistorialJefeDise = () => {
  return (
    <div className="body-app">
        <div className="mainContainer">
            <Slidenew sections={sectionsForJefeDi} />
            <div className="bodyContainer">
                <HistorialPedi/>
            </div>
        </div>
    </div>
  )
}

export default HistorialJefeDise