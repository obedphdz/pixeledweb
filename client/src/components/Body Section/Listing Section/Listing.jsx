import './Listing.css'
import { Link } from 'react-router-dom';

// Imported Icons ==============> 
import {BsArrowRightShort} from 'react-icons/bs'

// Imported img   ==============> 
import img from '../../../assets/img/imgPixeled/img (1).png'
import img2 from '../../../assets/img/imgPixeled/img (2).png'
import img3 from '../../../assets/img/imgPixeled/img (3).png'
import img4 from '../../../assets/img/imgPixeled/img1.jpeg'
import userImg from '../../../assets/img/admin1.png'
import userImg2 from '../../../assets/img/imgPixeled/user1.jpg'
import userImg3 from '../../../assets/img/imgPixeled/user2.jpg'

const Listing = () => {
  return (
     
    <div className='listingSection'>

      <div className="heading flex">
        <h1> Ordenes en Producción. </h1>
        <Link to='/ad/ordenes'>
          <button className='btn flex'>
              Ver todo <BsArrowRightShort className="icon"/>
          </button>
        </Link>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <img src={img} alt="ImageName" />
          <h3>Lona</h3>
        </div>

        <div className="singleItem">
          <img src={img2} alt="ImageName" />
          <h3>Lona mate</h3>
        </div>
      
        <div className="singleItem">
          <img src={img3} alt="ImageName" />
          <h3>Lona Traslucida</h3>
        </div>
      
        <div className="singleItem">
          <img src={img4} alt="ImageName" />
          <h3>Vinil brillante</h3>
        </div>

        <div className="singleItem">
          <img src={img3} alt="ImageName" />
          <h3>Vinil Mate</h3>
        </div>

        <div className="singleItem">
          <img src={img2} alt="ImageName" />
          <h3>Microperforado</h3>
        </div>

      </div>

      <div className="sellers flex">

        <div className="topSellers">
          <div className="heading flex">
            <h3>Diseñadores y Empleados</h3>
              <Link to='/ad/empleados'>
                <button className='btn flex'>
                  Ver todo <BsArrowRightShort className="icon"/>
                </button>
              </Link>
          </div>

          <div className="cardSellers flex">
            <div className="users">
              <img src={userImg} alt="UserImage" />
              <img src={userImg2} alt="UserImage" />
              <img src={userImg3} alt="UserImage" />
              <img src={userImg2} alt="UserImage" />

            </div>
            <div className="cardText">
              <span>
                14.556 Viniles vendidos <br/>
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>

        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Lista de Clientes.</h3>
              <Link to='/ad/clientes'>
                <button className='btn flex'>
                  Ver todo <BsArrowRightShort className="icon"/>
                </button>
              </Link>
          </div>

          <div className="cardSellers flex">
            <div className="users">
              <img src={userImg2} alt="UserImage" />
              <img src={userImg} alt="UserImage" />
              <img src={userImg3} alt="UserImage" />
              <img src={userImg2} alt="UserImage" />
            </div>
            <div className="cardText">
              <span>
                27,342 viniles sold <br/>
                <small>
                  10 Sellers <span className="date">15 Days</span>
                </small>
              </span>
            </div>
          </div>


        </div>

      </div>


    </div>
  )
}

export default Listing