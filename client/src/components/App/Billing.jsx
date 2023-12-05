import styles, { layout } from "../../../style";
import img1 from '../../assets/img/img1.jpg'
import stripe from '../../assets/img/servicios/stripe1.png'
import paypal from '../../assets/img/servicios/pago2.png'


const Billing = () => (
    <section className={layout.section}>
      <div className={layout.sectionImgReverse}>
        <img src={img1} alt="pixImage" className="w-[100%] h-[100%] relative z-[5] rounded-[20px]"/>
  
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
  
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Imagínalo  <br className="sm:block hidden" /> y nosotros lo hacemos realidad
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Imagína tu proyecto, y nosotros lo hacemos realidad. Además, ofrecemos la conveniencia de pago en línea para tus productos y servicios. ¡Hazlo posible hoy!
        </p>
  
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={stripe} alt="google_play" className="w-[148.86px] h-[72.05px] object-contain mr-5 cursor-pointer" />
          <img src={paypal} alt="google_play" className="w-[168.86px] h-[72.05px] object-contain cursor-pointer mt-3" />
        </div>
      </div>
    </section>
  );

export default Billing