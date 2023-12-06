import Slidenew from "../Slidebar Section/Slidenew"
import { sectionsForAdmin } from "../Slidebar Section/sectionsForSlide/sections"
import App from "./Ejemplo/App"



const VistaEmp = () => {
  return (
    <div className="body-app">
        <div className="mainContainer">
            <Slidenew sections={sectionsForAdmin} />
            <div className="bodyContainer">
                <App/>
            </div>
        </div>
    </div>
  )
}

export default VistaEmp