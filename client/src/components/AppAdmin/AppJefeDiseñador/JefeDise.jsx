
/* JefeDise.jsx */

import Slidenew from "../Slidebar Section/Slidenew"
import {MdOutlinePriceChange } from 'react-icons/md'
import {BsFillClipboardPlusFill, BsClockHistory} from 'react-icons/bs'
import {HiOutlineClipboardList} from 'react-icons/hi'
import OrdersInProduction from "../Orders/OrdersInProduction"
import '../Orders/Orders.css'
 
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

const JefeDise = () => {
  return (
	<div className="body-app">
	<div className="mainContainer">
		<Slidenew sections={sectionsForJefeDi} />
	  <div className="ordersContainer">
		<OrdersInProduction />
	  </div>
	</div>
  </div>
  )
}

export default JefeDise