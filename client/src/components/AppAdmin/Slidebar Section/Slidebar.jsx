import './Slidebar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* Imported images */
import logo1 from '../../../assets/svg/pixecol.svg';
import logoResp from '../../../assets/svg/logoPixBco.svg'

/* Imported icons */
import { HiOutlineClipboardList } from 'react-icons/hi';
import { MdOutlinePriceChange, MdPriceCheck } from 'react-icons/md';
import {
	BsPersonBoundingBox,
	BsFillClipboardPlusFill,
	BsClockHistory,
} from 'react-icons/bs';
 import { BiSpreadsheet, BiLogOut } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { TbChartInfographic } from 'react-icons/tb';

const Slidebar = () => {

	const [isResponsive, setIsResponsive] = useState(false);

	// Function to check screen width and update state
	const checkScreenWidth = () => {
	  setIsResponsive(window.innerWidth <= 820);
	};
  
	// Add event listener to check screen width on window resize
	useEffect(() => {
	  checkScreenWidth();
	  window.addEventListener('resize', checkScreenWidth);
	  return () => {
		window.removeEventListener('resize', checkScreenWidth);
	  };
	}, []);

	return (
		<div className={`sideBar grid ${isResponsive ? 'responsive' : ''}`}>
			<Link to='/ad'>
				<div className='logoDiv flex'>
				<img
					src={isResponsive ? logoResp : logo1}
					alt='img name'
					className={`imagenPix ${isResponsive ? 'responsiveLogo' : ''}`}
				/>
				</div>
			</Link>

			<div className='menuDiv'>
				<h3 className='divTile'>Pedidos</h3>

				<ul className='menuLists grid'>
					<li className='listItem'>
						<Link to='/ad/crear-cotiza' className='menuLink flex'>
							<MdOutlinePriceChange className='icon' />
							<span className='smallText'>Crear Cotización</span>
						</Link>
					</li>

					<li className='listItem'>
						<Link to='/ad/nueva-orden' className='menuLink flex'>
							<BsFillClipboardPlusFill className='icon' />
							<span className='smallText'>Nueva Orden</span>
						</Link>
					</li>

					<li className='listItem'>
						<Link to='/ad/ordenes' className='menuLink flex'>
							<HiOutlineClipboardList className='icon' />
							<span className='smallText'>Ordenes en Producción</span>
						</Link>
					</li>

					<li className='listItem'>
							<Link to='/ad/historial' className='menuLink flex'>
								<BsClockHistory className='icon' />
								<span className='smallText'>Historial Pedidos</span>
							</Link>
					</li>
				</ul>
			</div>

			<div className='settingsDiv'>
				<h3 className='divTile'>Admin</h3>

				<ul className='menuLists grid'>
					<li className='listItem'>
							<Link to='/precios' className='menuLink flex'>
								<MdPriceCheck className='icon' />
								<span className='smallText'>Precios</span>
							</Link>
					</li>
					<li className='listItem'>
							<Link to='' className='menuLink flex'>
								<MdPriceCheck className='icon' />
								<span className='smallText'>Proveedores</span>
							</Link>
					</li>

					<li className='listItem'>
							<Link to='/ad/clientes' className='menuLink flex'>
								<FiUsers className='icon' />
								<span className='smallText'>Clientes</span>
							</Link>
					</li>

					<li className='listItem'>
							<Link to='' className='menuLink flex'>
								<BiSpreadsheet className='icon' />
								<span className='smallText'>Solicitud de Material</span>
							</Link>
					</li>

					<li className='listItem'>
							<Link to='' className='menuLink flex'>
								<TbChartInfographic className='icon' />
								<span className='smallText'>Comisiones</span>
							</Link>
					</li>

					<li className='listItem'>
							<Link to='/ad/empleados' className='menuLink flex'>
								<BsPersonBoundingBox className='icon' />
								<span className='smallText'>Empleados</span>
							</Link>
					</li>

					<Link to={'/'}>
						<button className='btnLogOut'>
								<BiLogOut className='icon' />
								<span>Cerrar Sesión</span>
						</button>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Slidebar;
