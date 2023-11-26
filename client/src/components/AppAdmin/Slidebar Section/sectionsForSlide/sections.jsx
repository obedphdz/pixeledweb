import {MdOutlinePriceChange } from 'react-icons/md'
import {BsFillClipboardPlusFill, BsClockHistory} from 'react-icons/bs'
import {HiOutlineClipboardList} from 'react-icons/hi'

/* Jefe Diseñador */
export const sectionsForJefeDi = [
	{
	  title: 'Pedidos',
	  items: [
		{ name: 'Crear Pedido', icon: <MdOutlinePriceChange />, link: '/crear-orden-dise' },
		{ name: 'Asignacion de Pedidos', icon: <BsFillClipboardPlusFill />, link: '/admin' },
		{ name: 'Solicitar Material', icon: <HiOutlineClipboardList />, link: '/admin' },
		{ name: 'Pedidos Asignados', icon: <MdOutlinePriceChange />, link: '/admin' },
		{ name: 'Historial de Pedidos', icon: <BsClockHistory />, link: '/admin' },
	  ],
	},
	/* {
	  title: 'Admin',
	  items: [
		{ name: 'Precios', icon: <MdPriceCheck />, link: '/precios' },
	  ],
	}, */
];

/* Admin General */
export const sectionsForAdmin = [
	{
		title: 'Pedidos',
		items: [
		  { name: 'Crear Cotización', icon: <MdOutlinePriceChange />, link: '/crear-cotiza' },
		  { name: 'Nueva Orden', icon: <BsFillClipboardPlusFill />, link: '/nueva-orden' },
		  { name: 'Ordenes en Producción', icon: <HiOutlineClipboardList />, link: '/ordenes' },
		  { name: 'Historial de Pedidos', icon: <BsClockHistory />, link: '/historial' },
		],
	  },
]