import {useEffect} from 'react'
import './Top.css'

// Imported Icons ==============> 
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdCircleNotifications} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

// Imported img/videos ==============> 
import adminImg2 from '../../../assets/img/imgPixeled/admin1.png'
import img1 from '../../../assets/img/imgPixeled/img (12).png'
import video3 from '../../../assets/img/imgPixeled/video4.mp4'

const Top = () => {
     
    /* Reproduce video en navegadores que puedan bloquearlo */
            useEffect(() => {
            const handleVideoEnded = () => {
                video.currentTime = 0;
                video.play();
            };

            const video = document.getElementById('my-video');
            video.addEventListener('ended', handleVideoEnded);
            video.play();

            return () => {
                video.removeEventListener('ended', handleVideoEnded);
            };
            }, []); 

return (
  <div className='topSection'>
    <div className="headerSection flex">
      <div className="title">
        <h1>Bienvenido Admin!</h1>
        <p> Panel de Control Administrativo. </p>
      </div>

      <div className="searchBar flex">
        <input type='text' placeholder='Search here'></input> 
        <BiSearchAlt className='icon' />
      </div>

      <div className="adminDiv flex">
        <TbMessageCircle className='icon'/>
        <MdCircleNotifications className='icon'/>
        <div className="adminImage">
          <img src={adminImg2} alt=''></img>
        </div>
      </div>
    </div>

    <div className="cardSection flex">

      <div className="rightCard flex">
        <h1>Ordenes de Producción - Historial Pedidos</h1>
        <p></p>      
        <div className="buttons flex">
          <button className="btn">Ordenes Producción</button>
          <button className="btn transparent">Historial Pedidos</button>
        </div>

        <div className="videoDiv">
            <video muted className='Video' id="my-video">
                <source src={video3} type="video/mp4"/>
            </video>
        </div>


      </div>

      <div className="leftCard flex">
        <div className="main flex">

          <div className="textDiv">
            <h1>Pago a Proveedores</h1>
           
            <a href="#myOrders">
              <span className="flex link">
                Ir a Proveedores <BsArrowRightShort className='icon'/>
              </span>
            </a>
          </div>

         <div className="imgDivTop">
            <img src={img1} alt="imgPixeled" />
          </div> 

        </div>
      </div>

    </div>
  </div>
  )
}

export default Top