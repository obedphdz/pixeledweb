import {MdOutlinePriceChange } from 'react-icons/md'
import {BsFillClipboardPlusFill, BsClockHistory} from 'react-icons/bs'
import {HiOutlineClipboardList} from 'react-icons/hi'

/* Admin General */
export const sectionsForAdmin = [
	{
		title: 'Pedidos',
		items: [
		  { name: 'Crear Cotización', icon: <MdOutlinePriceChange />, link: '/ad/crear-cotiza' },
		  { name: 'Nueva Orden', icon: <BsFillClipboardPlusFill />, link: '/ad/nueva-orden' },
		  { name: 'Ordenes en Producción', icon: <HiOutlineClipboardList />, link: '/ad/ordenes' },
		  { name: 'Historial de Pedidos', icon: <BsClockHistory />, link: '/ad/historial' },
		],
	},/* 
		{
			title: 'Admin',
			items: [
			  { name: 'Precios', icon: <MdOutlinePriceChange />, link: '/precios' },
			],
		}, */
]

/* Jefe Diseñador */
export const sectionsForJefeDi = [
	{
	  title: 'Pedidos',
	  items: [
		{ name: 'Crear Pedido', icon: <MdOutlinePriceChange />, link: '/jd/crear-orden-dise' },
		{ name: 'Asignacion de Pedidos', icon: <BsFillClipboardPlusFill />, link: '/jd/asignar' },
		{ name: 'Solicitar Material', icon: <HiOutlineClipboardList />, link: '/jd/material' },
		{ name: 'Pedidos Asignados', icon: <MdOutlinePriceChange />, link: '/jd/pedidos' },
		{ name: 'Historial de Pedidos', icon: <BsClockHistory />, link: '/jd/historial' },
	  ],
	},
];

/* Disenador */
export const sectionsForDisenador = [
	{
		title: 'Pedidos',
		items: [
		  { name: 'Pedidos Asignados', icon: <MdOutlinePriceChange />, link: '/ad' },
		  { name: 'Historial de Pedidos', icon: <BsClockHistory />, link: '/di/historial' },
		  { name: 'Solicitar Material', icon: <HiOutlineClipboardList />, link: '/ad' }
		],
	  },
]
