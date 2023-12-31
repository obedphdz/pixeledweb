
/* CrearCotizaciones.jsx */
import '../MainBody/MainBody.css'
import BodyNueva from "../NuevaOrden/neworderobed/BodyNueva";
import { sectionsForAdmin } from '../Slidebar Section/sectionsForSlide/sections';
import Slidenew from '../Slidebar Section/Slidenew';

export default function Cotizaciones() {
  return (
		<div className="body-app">
		<div className="mainContainer">
			<Slidenew sections={sectionsForAdmin} />
			<BodyNueva
							h1texto='Crear Cotizacion'
							ptexto='Ingresa los datos a Cotizar'
							btnaccion='Cotizacion'
				/>
		  </div>
		</div>
	);
}
