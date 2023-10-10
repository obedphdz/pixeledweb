import { nosotros } from "../../constantes/index";
import styles, { layout } from '../../../style';
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (

  <div className={`flex flex-row p-10 rounded-[20px] ${index !== nosotros.length - 1 ? "mb-6" : "mb-0"} feature-card hover:text-white`} 
                    style={{ backgroundColor: 
                    'hsla(290, 10%, 55%, 0.412)' }}>

    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimPurple`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1 hover:text-white">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>

);

const Business = () =>  (
  <div className="principal">
    <section id="nosotros" className={layout.section} >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Sobre nosotros. <br className="sm:block hidden" /> 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Somos una empresa originaria de México que domina su campo y comprende que nuestra excelencia en calidad, puntualidad en entregas y dedicación al servicio al cliente constituyen nuestros mayores activos. <br/> <br/>Convertimos los proyectos de nuestros clientes en auténticas realidades, empleando incansables esfuerzos y una sólida creencia en que todos los sueños son alcanzables.
        </p>

        <Button styles={`mt-10`} /></div>

        <div className={`${layout.sectionImg} flex-col`}>
          {nosotros.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index}/>
          ))}
        </div>
      </section>
    </div>
);

export default Business;
