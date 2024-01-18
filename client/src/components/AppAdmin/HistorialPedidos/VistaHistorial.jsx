import Slidenew from "../Slidebar Section/Slidenew"
import { sectionsForAdmin } from "../Slidebar Section/sectionsForSlide/sections"
import HistorialPedi from "./HistorialPedi"

const VistaHistorial = () => {
  return (
    <div className="body-app">
        <div className="mainContainer">
            <Slidenew sections={sectionsForAdmin} />
            <div className="bodyContainerHistorial">
                <HistorialPedi/>
            </div>
        </div>
    </div>
  )
}

export default VistaHistorial