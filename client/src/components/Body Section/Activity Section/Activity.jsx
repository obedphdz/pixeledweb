import './Activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import user1 from '../../../assets/img/users/user2.png'
import user2 from '../../../assets/img/users/user6.png'
import user3 from '../../../assets/img/users/user4.png'
import user4 from '../../../assets/img/users/user5.png'

const Activity = () => {
  return (
    <div className='activitySection'>

      <div className="heading flex">
        <h1>Solicitudes de Material</h1>
        <Link to='/material'>
          <button className='btn flex'>
            See All 
            <BsArrowRightShort className='icon'/>        
          </button>
        </Link>
      </div>

      <div className="secContainer grid">

        <div className="singleCustomer flex">
          <img src={user1} alt="CustomerImage" />
          <div className="customerDetails">
            <span className='name'>Cristobal Diseño</span>
            <small>Orderno un nuevo vinil.</small>
          </div>
          <div className="duration">
            1hr and 2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="CustomerImage" />
          <div className="customerDetails">
            <span className='name'>Liss Diseño</span>
            <small>Ordeno material tabloides</small>
          </div>
          <div className="duration">
            21 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="CustomerImage" />
          <div className="customerDetails">
            <span className='name'>Vero</span>
            <small>Orderno material papel impresion</small>
          </div>
          <div className="duration">
            8 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="CustomerImage" />
          <div className="customerDetails">
            <span className='name'>Montserrat</span>
            <small>Ordeno un nuevo vinil</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

      </div>

    </div>
  )
}

export default Activity