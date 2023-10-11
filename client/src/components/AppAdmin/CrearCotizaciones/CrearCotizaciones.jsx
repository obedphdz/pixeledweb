import '../Admin.css';
import BodyNueva from "../NuevaOrden/BodyNueva";
import Slidebar from "../Slidebar Section/Slidebar";

export default function Cotizaciones() {
  return (
		<>
			<div className='app-body'>
				<div className='containerAdmin'>
					<Slidebar />
					<BodyNueva
						h1texto='Crear Cotizacion'
						ptexto='Ingresa los datos a Cotizar'
						btnaccion='Cotizacion'
					/>
				</div>
			</div>
		</>
	);
}
