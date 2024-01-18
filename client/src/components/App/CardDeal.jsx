import img2  from "../../assets/img/img2.jpg";
import styles, { layout } from "../../../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} sm:${styles.heading2Mobile}`}>
        Dale presencia <br className="sm:block hidden" />a tu marca.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 sm:max-w-none`}>
        Transforma tu negocio con nuestro expertise en branding y estrategias de marketing. Dale presencia a tu marca y destaca en un mercado competitivo. Juntos, construiremos una imagen que dejará huella.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={img2} alt="PixImage" className="w-full h-full rounded-[20px]" />
    </div>
  </section>
);

export default CardDeal;
