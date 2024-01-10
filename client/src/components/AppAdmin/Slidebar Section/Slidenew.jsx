/* Slidenew.jsx */
import { useState} from 'react';
import { motion } from 'framer-motion'; 
import './Slidenew.css';
import ItemSlide from './ItemSlide';
import {Link} from 'react-router-dom'

/* Imported images */
import logo1 from '../../../assets/svg/pixecol.svg';

/* Imported icons */
import { BsPersonBoundingBox } from 'react-icons/bs';
 import { BiLogOut } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import {TbArrowBarLeft } from 'react-icons/tb';


const Slidenew  = ({ sections }) => {
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
        <Link to='/ad'>
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
            <TbArrowBarLeft style={{ fontSize: '15px' }} className='iconArrowBar'/>
          </motion.div>
        </motion.div>
      </div>

      <div className='menuDiv'>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className='divTile'>{section.title}</h3>
            <ul className='menuLists grid' data-variants={menuListsVariants}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link to={item.link}>
                    <ItemSlide icon={item.icon} showName={open} name={item.name} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  
      <div className='settingsDiv'>
            <h3 className='divTile'>Admin</h3>
            <ul className='menuLists grid'>
              <li>
                <Link to='/ad/clientes'>
                  <ItemSlide icon={<FiUsers />} showName={open} name='Clientes' />
                </Link>
              </li>
              <li>
                <Link to='/ad/empleados'>
                  <ItemSlide icon={<BsPersonBoundingBox />} showName={open} name='Empleados' />
                </Link>
              </li>

              <li>
                <Link to='/'>
                  <button className={`btnLogOut ${!open ? 'hidden' : ''}`}>
                  <span style={{ display: open ? 'inline' : 'none' }} className='spanLogOut'>
                  <BiLogOut className='iconLogOut' />
                    Cerrar Sesión</span>
                  </button>
                </Link>
              </li>

            </ul>
      </div>


      </motion.div>
    );
  };

export default Slidenew