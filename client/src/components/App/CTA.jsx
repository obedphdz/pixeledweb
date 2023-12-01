import styles from "../../../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mt-20`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading3}>Prueba nuestro servicio ahora!</h2>
      <p className={`${styles.paragraph2} max-w-full sm:max-w-[470px] mt-1 sm:mr-80`}>
      Estamos listos para satisfacer tus necesidades de manera rápida y eficiente. ¡Comienza hoy mismo!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
