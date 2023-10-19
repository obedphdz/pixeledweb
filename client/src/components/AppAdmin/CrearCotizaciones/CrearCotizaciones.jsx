import '../MainBody/MainBody.css'
import BodyNueva from "../NuevaOrden/BodyNueva";
import Slidenew from '../Slidebar Section/Slidenew';

export default function Cotizaciones() {
  return (
		<>
		<div className='body-app'>
			<div className="mainContainer">
					<Slidenew />
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
