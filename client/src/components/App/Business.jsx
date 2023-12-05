import { nosotros } from "../../constantes/index";
import styles, { layout } from '../../../style';
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
	<div
		className={`flex flex-row p-10 rounded-[20px] ${
			index !== nosotros.length - 1 ? 'mb-6' : 'mb-0'
		} feature-card`}
		style={{ background: 'linear-gradient(to left, #e62657, #280028)' }}
	>
		<div className={`w-[140px] h-[64px] rounded-full ${styles.flexCenter} `}>
			<img src={icon} alt='star' className='w-[50%] h-[50%] object-contain' />
		</div>
		<div className='flex-1 flex-col ml-3'>
			<h4 className='font-poppins font-semibold text-white  text-[18px] leading-[23.4px] mb-1'>
				{title}
			</h4>
			<p className='font-poppins font-normal text-white text-[16px] leading-[24px]'>
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
        Somos una imprenta con raíces en México, líder en nuestra industria, y reconocemos que nuestros principales pilares son la excelencia en calidad, la entrega puntual y la devoción hacia la atención al cliente. <br/> <br/>Transformamos las ideas y proyectos de nuestros clientes en auténticas obras impresas, dedicando esfuerzos continuos y manteniendo la convicción sólida de que todos los sueños pueden materializarse a través de la impresión
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
