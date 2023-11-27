import {MdOutlinePriceChange } from 'react-icons/md'
import {BsFillClipboardPlusFill, BsClockHistory} from 'react-icons/bs'
import {HiOutlineClipboardList} from 'react-icons/hi'

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

/* Jefe Diseñador */
export const sectionsForJefeDi = [
	{
	  title: 'Pedidos',
	  items: [
		{ name: 'Crear Pedido', icon: <MdOutlinePriceChange />, link: '/jefe-dise/crear-orden-dise' },
		{ name: 'Asignacion de Pedidos', icon: <BsFillClipboardPlusFill />, link: '/jefe-dise/asignar' },
		{ name: 'Solicitar Material', icon: <HiOutlineClipboardList />, link: '/jefe-dise/material' },
		{ name: 'Pedidos Asignados', icon: <MdOutlinePriceChange />, link: '/jefe-dise/pedidos' },
		{ name: 'Historial de Pedidos', icon: <BsClockHistory />, link: '/jefe-dise/historial' },
	  ],
	},
	/* {
	  title: 'Admin',
	  items: [
		{ name: 'Precios', icon: <MdPriceCheck />, link: '/precios' },
	  ],
	}, */
];

/* Disenador */
export const sectionsForDisenador = [
	{
		title: 'Pedidos',
		items: [
		  { name: 'Pedidos Asignados', icon: <MdOutlinePriceChange />, link: '/admin' },
		  { name: 'Historial de Pedidos', icon: <BsClockHistory />, link: '/diseñador/historial' },
		  { name: 'Solicitar Material', icon: <HiOutlineClipboardList />, link: '/admin' }
		],
	  },
]
