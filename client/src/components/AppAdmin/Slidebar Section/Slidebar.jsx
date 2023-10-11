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
	BsQuestionCircle,
	BsFillClipboardPlusFill,
	BsClockHistory,
} from 'react-icons/bs';
 import { BiSpreadsheet, BiLogOut } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { TbStatusChange, TbChartInfographic } from 'react-icons/tb';

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
			<Link to='/admin'>
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
						<Link to='/nuevaCotiza' className='menuLink flex'>
							<MdOutlinePriceChange className='icon' />
							<span className='smallText'>Crear Cotización</span>
						</Link>
					</li>

					<li className='listItem'>
						<Link to='/nueva' className='menuLink flex'>
							<BsFillClipboardPlusFill className='icon' />
							<span className='smallText'>Nueva Orden</span>
						</Link>
					</li>

					<li className='listItem'>
						<Link to='' className='menuLink flex'>
							<HiOutlineClipboardList className='icon' />
							<span className='smallText'>Ordenes en Producción</span>
						</Link>
					</li>

					<li className='listItem'>
						<a href='#settings' className='menuLink flex'>
							<Link to=''>
								<TbStatusChange className='icon' />
								<span className='smallText'>Estatus de Pedidos</span>
							</Link>
						</a>
					</li>

					<li className='listItem'>
						<a href='#products' className='menuLink flex'>
							<Link to=''>
								<BsClockHistory className='icon' />
								<span className='smallText'>Historial Pedidos</span>
							</Link>
						</a>
					</li>
				</ul>
			</div>

			<div className='settingsDiv'>
				<h3 className='divTile'>Admin</h3>

				<ul className='menuLists grid'>
					<li className='listItem'>
						<a href='#acabados' className='menuLink flex'>
							<Link to='/precios'>
								<MdPriceCheck className='icon' />
								<span className='smallText'>Precios</span>
							</Link>
						</a>
					</li>
					<li className='listItem'>
						<a href='#users' className='menuLink flex'>
							<Link to=''>
								<MdPriceCheck className='icon' />
								<span className='smallText'>Proveedores</span>
							</Link>
						</a>
					</li>

					<li className='listItem'>
						<a href='#design' className='menuLink flex'>
							<Link to=''>
								<FiUsers className='icon' />
								<span className='smallText'>Clientes</span>
							</Link>
						</a>
					</li>

					<li className='listItem'>
						<a href='#print' className='menuLink flex'>
							<Link to=''>
								<BiSpreadsheet className='icon' />
								<span className='smallText'>Solicitud de Material</span>
							</Link>
						</a>
					</li>

					<li className='listItem'>
						<a href='#materi' className='menuLink flex'>
							<Link to=''>
								<TbChartInfographic className='icon' />
								<span className='smallText'>Comisiones</span>
							</Link>
						</a>
					</li>

					<li className='listItem'>
						<a href='#users' className='menuLink flex'>
							<Link to=''>
								<BsPersonBoundingBox className='icon' />
								<span className='smallText'>Empleados</span>
							</Link>
						</a>
					</li>

					<Link to={'/'}>
						<button className='btnLogOut'>
								<BiLogOut className='icon' />
								<span>Cerrar Sesión</span>
						</button>
					</Link>
				</ul>
			</div>

			<div className='sideBarCard'>
				<BsQuestionCircle className='icon' />
				<div className='cardContent'>
					<div className='circle1'></div>
					<div className='circle2'></div>

					<h3>Help Center</h3>
					<p>
						Having trouble in Pixeled, please contact us for more questions.
					</p>
					<button className='btn'>Go to help center</button>
				</div>
			</div>
		</div>
	);
};

export default Slidebar;
