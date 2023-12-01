import { send, shield, star  } from "../assets";
import letras3d from '../assets/svg/letras3D.svg'
import anuncios from '../assets/svg/anuncios.svg'
import impGranFormato from '../assets/svg/impgranformato.svg'
import impHD from '../assets/svg/impHD.svg'
import rotulacion from '../assets/svg/rotulacion.svg'
import señaletica from '../assets/svg/señaletica.svg'
import pantallasLed from '../assets/svg/pantallasLed.svg'
import Face from '../assets/svg/ffb.svg'
import insta from '../assets/svg/lig.svg'
import pizza from '../assets/img/nuestrosClientes/pizza5.png'
import coca from '../assets/img/nuestrosClientes/coca.png'
import vitro from '../assets/img/nuestrosClientes/vitrobw.png'
import burger from '../assets/img/nuestrosClientes/burger.png'

export const navLinks = [
  {
    id: "#home",
    title: "Inicio",
  },
  {
    id: "#nosotros",
    title: "Nostros",
  },
  {
    id: "#servicios",
    title: "Servicios",
  },
  {
    id: "#contactanos",
    title: "Contactanos",
  },
  {
    id: '/login',
    title: "Iniciar Sesion",
  },
];

export const nosotros = [
  {
    id: "feature-1",
    icon: star,
    title: "Diseño Cautivador",
    content:
      "Analizamos elementos, tipografía y matices artísticos.",
  },  
  {
    id: "feature-2",
    icon: shield,
    title: "Tu Visión, Nuestra Experiencia Artística",
    content:
      "Tu visión, nuestra experiencia artística. Experimentamos con elementos visuales, teoría del color e impacto.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Explora Estilos y Diseño Seguro",
    content:
      "Diseños que resuenan y cautivan. Mezclamos gráficos, narración y finura estética para un impacto duradero.",
  },
];

export const stats = [
  {
    id: "servicio-1",
    img: pantallasLed,
  },
  {
    id: "servicio-2",
    img: rotulacion,
  },
  {
    id: "servicio-3",
    img: señaletica,
  },
  {
    id: "servicio-4",
    img: letras3d,
  },
  {
    id: "servicio-5",
    img: impGranFormato,
  },
  {
    id: "servicio-6",
    img: anuncios,
  },
  {
    id: "servicio-7",
    img: impHD,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Inicio",
        link: '#home',
      },
      {
        name: "Nosotros",
        link: "#nosotros",
      },
      {
        name: "Inicia Pedido",
        link: "/login",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Servicios",
        link: "#servicios",
      },
      {
        name: "Contactanos",
        link: "#contactanos",
      },
      {
        name: "Iniciar Sesion ",
        link: "/login",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Instagram",
        icon: insta,
        link: "https://www.instagram.com/pixeledmx/",
      },
      {
        name: "Faceboook",
        icon: Face,
        link: "https://www.facebook.com/pixeledags",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: insta,
    link: "https://www.instagram.com/pixeledmx/",
  },
  {
    id: "social-media-2",
    icon: Face,
    link: "https://www.facebook.com/pixeledags",
  }
];

export const clients = [
  {
    id: "client-1",
    logo: coca,
  },
  {
    id: "client-2",
    logo: burger,
  },
  {
    id: "client-3",
    logo: vitro,
  },
  {
    id: "client-4",
    logo: pizza,
  },
];