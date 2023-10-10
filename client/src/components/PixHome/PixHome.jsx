
import Admin  from '../AppAdmin/Admin'
import ErrorPage from '../ErrorPage/ErrorPage'
import Login from '../Login/Login';
import Register from '../Register/Register'
import NuevaOrden from '../NuevaOrden/NuevaOrden'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from '../App/App';
import CrearCotizaciones from '../CrearCotizaciones/CrearCotizaciones';
import VerCotizaciones from '../VerCotizaciones/VerCotizaciones';
import Precios from '../PreciosLista/Precios';


function PixHome() {
    return (	

      <div >
        <Router>
          <Routes>
            {/* <Route path="/" element={<><NavBar/><Slider/><Banner/></>}/> */}        
            <Route path="/" element={<App/>}/> 
            <Route path="/admin" element={<Admin/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/nueva' element={<NuevaOrden/>}/>
            <Route path='/precios' element={<Precios/>}/>
            <Route path='/nuevaCotiza' element={<CrearCotizaciones/>}/>
            <Route path='/verCotiza' element={<VerCotizaciones/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </Router> 
      </div>
	);
}

export default PixHome;

