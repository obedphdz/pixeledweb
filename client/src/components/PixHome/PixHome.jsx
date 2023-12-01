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
					<Route path='/admin' element={<Admin />} />
					<Route path='/admin/nueva-orden' element={<NuevaOrden />} />
					<Route path='/admin/precios' element={<Precios />} />
					<Route path='/admin/crear-cotiza' element={<CrearCotizaciones />} />
					<Route path='/admin/ordenes' element={<VistaOrdenes />} />
					<Route
						path='/admin/ordenes/detalles-ord'
						element={<VistaDetallesOrd />}
					/>
					<Route path='/admin/empleados' element={<VistaEmp />} />
					<Route path='/admin/historial' element={<VistaHistorial />} />
					<Route path='/admin/clientes' element={<VistaClientes />} />

					<Route path='/jefe-dise' element={<JefeDise />} />
					<Route
						path='/jefe-dise/crear-orden-dise'
						element={<CrearOrdenDi />}
					/>
					<Route path='/jefe-dise/historial' element={<HistorialJefeDise />} />
					<Route path='/jefe-dise/asignar' element={<VistaAsigPedi />} />
					<Route
						path='/jefe-dise/detalles-ord'
						element={<VistaDetallesDise />}
					/>
					<Route path='/jefe-dise/pedidos' element={<MisPedidos />} />

					<Route path='/diseñador' element={<Disenador />} />
					<Route
						path='/diseñador/detalles-ord'
						element={<VistaDetallesDise />}
					/>
					<Route path='/diseñador/historial' element={<HistorialDise />} />
					<Route path='/diseñador/mis-pedidos' element={<MisPedidos />} />

					<Route path='/modal' element={<MiModal />} />
					<Route path='/cliente' element={<Cliente />} />

					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default PixHome;
