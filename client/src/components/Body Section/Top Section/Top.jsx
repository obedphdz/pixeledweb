import {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Top.css'

// Imported Icons ==============> 
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
      
            const navigate = useNavigate();

            const handleOrdenes = () => {
              navigate('/ad/ordenes');
            };

            const handleHistorial = () => {
              navigate('/ad/historial');
            };

return (
  <div className='topSection'>
    <div className="headerSection flex">
      <div className="title">
        <h1>Bienvenido Admin.</h1>
        <p> Panel de Control Administrativo. </p>
      </div>
      ____________________________________________________________________________________________________________
      <div className="adminDiv flex">
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
            <button className="btn" onClick={handleOrdenes}>Ordenes Producción</button>
            <button className="btn transparent" onClick={handleHistorial}>Historial Pedidos</button>
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
            <h1>Crear un pedido</h1>
           
            <Link to='/ad/nueva-orden'>
              <span className="flex link">
                Ir a Crear Pedido <BsArrowRightShort className='icon'/>
              </span>
            </Link>
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