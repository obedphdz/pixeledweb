import '../MainBody/MainBody.css'
import Slidenew from '../Slidebar Section/Slidenew';
import BodyNueva from './BodyNueva'
import {MdOutlinePriceChange } from 'react-icons/md'
import {BsFillClipboardPlusFill, BsClockHistory} from 'react-icons/bs'
import {HiOutlineClipboardList} from 'react-icons/hi'

const sectionsForAdmin = [
	{
		title: 'Pedidos',
		items: [
		  { name: 'Crear Cotización', icon: <MdOutlinePriceChange />, link: '/crear-cotiza' },
		  { name: 'Nueva Orden', icon: <BsFillClipboardPlusFill />, link: '/nueva-orden' },
		  { name: 'Ordenes en Producción', icon: <HiOutlineClipboardList />, link: '/ordenes' },
		  { name: 'Historial de Pedidos', icon: <BsClockHistory />, link: '/' },
		],
	  },
]

const NuevaOrden = () => {
  return (
	<div className='body-app'>
		<div className="mainContainer">
				<Slidenew sections={sectionsForAdmin}  />
				<BodyNueva
					h1texto='Crear Orden de Producción'
					ptexto='Ingresa los datos de tu pedido'
					btnaccion='Pedido'
				/>
		</div>
	</div>
	);
}

export default NuevaOrden