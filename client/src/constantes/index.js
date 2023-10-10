/* eslint-disable no-unused-vars */
import { people01, people02, people03, send, shield, star  } from "../assets";
import letras3d from '../assets/svg/letras3D.svg'
import anuncios from '../assets/svg/anuncios.svg'
import impGranFormato from '../assets/svg/impgranformato.svg'
import impHD from '../assets/svg/impHD.svg'
import rotulacion from '../assets/svg/rotulacion.svg'
import señaletica from '../assets/svg/señaletica.svg'
import pantallasLed from '../assets/svg/pantallasLed.svg'
import pizza from '../assets/img/nuestrosClientes/pizza5.png'
import coca from '../assets/img/nuestrosClientes/coca.png'
import vitro from '../assets/img/nuestrosClientes/vitrobw.png'
import burger from '../assets/img/nuestrosClientes/burger.png'
import Face from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'

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

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
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
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Nosotros",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Inicia Pedido",
        link: "https://www.hoobank.com/partners/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Servicios",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Contactanos",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Iniciar Sesion ",
        link: "https://www.hoobank.com/partners/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/pixeledmx/",
      },
      {
        name: "Faceboook",
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