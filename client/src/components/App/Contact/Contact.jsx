import styles from '../../../../style'
import ContactSection from './ContactSection'

const Contact = () => {
  return (
    <section id="contactanos" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full pink__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Contáctanos! <br className="sm:block hidden" /> 
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        ¿Tienes alguna pregunta o sugerencia? ¡Estamos deseando escucharte y ayudarte en lo que necesites!
        </p>
      </div>
    </div>
    
      <ContactSection/>

    </section>
  )
}

export default Contact