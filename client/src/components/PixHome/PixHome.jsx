
import Admin  from '../AppAdmin/Admin'
import ErrorPage from '../ErrorPage/ErrorPage'
import Login from '../Login/Login';
import Register from '../Register/Register'
import NuevaOrden from '../AppAdmin/NuevaOrden/NuevaOrden'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from '../App/App';
import CrearCotizaciones from '../AppAdmin/CrearCotizaciones/CrearCotizaciones';
import Precios from '../AppAdmin/PreciosLista/Precios';
import Cliente from '../AppCliente/Cliente';
import JefeDise from '../AppAdmin/AppJefeDiseñador/JefeDise';
import Diseñador from '../AppAdmin/AppDiseñador/Diseñador';
import CrearOrdenDi from '../AppAdmin/AppJefeDiseñador/CrearOrdenDi/CrearOrdenDi';
import VistaOrdenes from '../AppAdmin/Orders/VistaOrdenes';
import VistaEmp from '../AppAdmin/Empleados/VistaEmp';



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
            <Route path='/nueva-orden' element={<NuevaOrden/>}/>
            <Route path='/precios' element={<Precios/>}/>
            <Route path='/crear-cotiza' element={<CrearCotizaciones/>}/>
            <Route path='/cliente' element={<Cliente/>}/>
            <Route path='/jefe-dise' element={<JefeDise/>}/>
            <Route path='/diseñador' element={<Diseñador/>}/>
            <Route path='/ordenes' element={<VistaOrdenes/>}/>
            <Route path='/crear-orden' element={<NuevaOrden/>}/>
            <Route path='/empleados' element={<VistaEmp/>}/>
            <Route path='/crear-orden-dise' element={<CrearOrdenDi/>}/>

            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </Router> 
      </div>
	);
}

export default PixHome;

