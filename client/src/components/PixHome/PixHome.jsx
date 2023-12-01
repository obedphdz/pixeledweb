import Admin from '../AppAdmin/Admin';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NuevaOrden from '../AppAdmin/NuevaOrden/NuevaOrden';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App/App';
import CrearCotizaciones from '../AppAdmin/CrearCotizaciones/CrearCotizaciones';
import Precios from '../AppAdmin/PreciosLista/Precios';
import Cliente from '../AppCliente/Cliente';
import JefeDise from '../AppAdmin/AppJefeDiseñador/JefeDise';
import CrearOrdenDi from '../AppAdmin/AppJefeDiseñador/CrearOrdenDi/CrearOrdenDi';
import VistaOrdenes from '../AppAdmin/Orders/VistaOrdenes';
import VistaEmp from '../AppAdmin/Empleados/VistaEmp';
import VistaDetallesOrd from '../AppAdmin/Orders/VistaDetallesOrd';
import MiModal from '../AppAdmin/NuevaOrden/ModalOrder/MiModal';
import VistaClientes from '../AppAdmin/Clientes/VistaClientes';
import VistaHistorial from '../AppAdmin/HistorialPedidos/VistaHistorial';
import Disenador from '../AppAdmin/AppDiseñador/Disenador';
import VistaDetallesDise from '../AppAdmin/AppDiseñador/VistaDetallesDise';
import HistorialDise from '../AppAdmin/AppDiseñador/HistorialDise';
import HistorialJefeDise from '../AppAdmin/AppJefeDiseñador/HistorialPedidos/HistorialJefeDise';
import VistaAsigPedi from '../AppAdmin/AppJefeDiseñador/AsignacionPedidos/VistaAsigPedi';
import MisPedidos from '../AppAdmin/AppJefeDiseñador/Pedidos Asignados/MisPedidos';

function PixHome() {
	return (
		<div>
			<Router>
				<Routes>
					{/* <Route path="/" element={<><NavBar/><Slider/><Banner/></>}/> */}
					<Route path='/' element={<App />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/ad' element={<Admin />} />
					<Route path='/ad/nueva-orden' element={<NuevaOrden />} />
					<Route path='/ad/precios' element={<Precios />} />
					<Route path='/ad/crear-cotiza' element={<CrearCotizaciones />} />
					<Route path='/ad/ordenes' element={<VistaOrdenes />} />
					<Route path='/ad/ordenes/detalles-ord' element={<VistaDetallesOrd />}/>
					<Route path='/ad/empleados' element={<VistaEmp />} />
					<Route path='/ad/historial' element={<VistaHistorial />} />
					<Route path='/ad/clientes' element={<VistaClientes />} />

					<Route path='/jd' element={<JefeDise />} />
					<Route path='/jd/crear-orden-dise' element={<CrearOrdenDi />}/>
					<Route path='/jd/historial' element={<HistorialJefeDise />} />
					<Route path='/jd/asignar' element={<VistaAsigPedi />} />
					<Route path='/jd/detalles-ord' element={<VistaDetallesDise />}/>
					<Route path='/jd/pedidos' element={<MisPedidos />} />

					<Route path='/di' element={<Disenador />} />
					<Route path='/di/detalles-ord' element={<VistaDetallesDise />}/>
					<Route path='/di/historial' element={<HistorialDise />} />
					<Route path='/di/mis-pedidos' element={<MisPedidos />} />

					<Route path='/modal' element={<MiModal />} />
					<Route path='/cliente' element={<Cliente />} />

					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default PixHome;
