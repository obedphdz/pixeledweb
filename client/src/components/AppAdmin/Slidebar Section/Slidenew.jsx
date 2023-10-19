

/* Slidenew.jsx */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import './Slidenew.css';
import ItemSlide from './ItemSlide';
import {Link} from 'react-router-dom'

/* Imported images */
import logo1 from '../../../assets/svg/pixecol.svg';

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
import {FaBars} from 'react-icons/fa'
import { TbStatusChange, TbChartInfographic, TbArrowBarLeft } from 'react-icons/tb';


const Slidenew = () => {
    const [open, setOpen] = useState(true);
  
    const handleToggle = () => {
      setOpen(!open);
    };
  
    const sideBarVariants = {
      true: {
        width: '17.8%',
      },
      false: {
        width: '3rem',
      },
    };
  
    const menuListsVariants = {
      true: {},
      false: {
        display: 'none',
      },
    };
  
    return (
      <motion.div
        className={`containerSlide grid ${!open ? 'closed' : ''}`}
        animate={{ width: open ? '17.8%' : '7rem' }}
        initial={`${open}`}
        variants={sideBarVariants}
    >
      <div className='logoDiv flex'>
      <Link to='/admin'>
          <img
            src={logo1}
            alt='pixeledImage'
            className={`imagenPix ${!open ? 'hidden' : ''}`}
          />
        </Link>
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sideBarVariants}
        >
          {/* Icono para mostrar/ocultar la barra lateral */}
          <motion.div
            whileHover={{
              scale: 1.4,
              rotate: 180,
            }}
            onClick={handleToggle}
          >
            <TbArrowBarLeft style={{ fontSize: '15px' }}/>
          </motion.div>
        </motion.div>
      </div>
  
      <div className='menuDiv'>
        <h3 className='divTile'>Pedidos</h3>
        <ul className='menuLists grid' data-variants={menuListsVariants}>
          <li>
            <Link to='/nuevaCotiza'>
              <ItemSlide icon={<MdOutlinePriceChange />} showName={open} name='Crear Cotización' />
            </Link>
          </li>
          <li>
            <Link to='/nueva'>
              <ItemSlide icon={<BsFillClipboardPlusFill />} showName={open} name='Nueva Orden' />
            </Link>
          </li>
          <li>
            <Link to=''>
             <ItemSlide icon={<HiOutlineClipboardList />} showName={open} name='Ordenes en Producción' />
            </Link>
          </li>
          <li>
            <Link to=''>
              <ItemSlide icon={<BsClockHistory />} showName={open} name='Historial Pedidos' />
            </Link>
          </li>
        </ul>
      </div>

  
      <div className='settingsDiv'>
            <h3 className='divTile'>Admin</h3>
            <ul className='menuLists grid'>
              <li>
                <Link to=''>
                  <ItemSlide icon={<MdPriceCheck />} showName={open} name='Precios' />
                </Link>
              </li>
              <li>
                <Link to=''>
                  <ItemSlide icon={<MdPriceCheck />} showName={open} name='Proveedores' />
                </Link>
              </li>
              <li>
                <Link to=''>
                  <ItemSlide icon={<FiUsers />} showName={open} name='Clientes' />
                </Link>
              </li>
              <li>
                <Link to=''>
                  <ItemSlide icon={<BiSpreadsheet />} showName={open} name='Solicitud de Material' />
                </Link>
              </li>
              <li>
                <Link to=''>
                  <ItemSlide icon={<TbChartInfographic />} showName={open} name='Comisiones' />
                </Link>
              </li>
              <li>
                <Link to=''>
                  <ItemSlide icon={<BsPersonBoundingBox />} showName={open} name='Empleados' />
                </Link>
              </li>

              <li>
                <Link to='/'>
                  <button className={`btnLogOut ${!open ? 'hidden' : ''}`}>
                    <BiLogOut className='icon' />
                    <span style={{ display: open ? 'inline' : 'none' }}>Cerrar Sesión</span>
                  </button>
                </Link>
              </li>

            </ul>
          </div>


      </motion.div>
    );
  };

export default Slidenew