import {stats} from '../../constantes/index'
import styles from '../../../style'


const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mt-20 mb-16`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <img src={stat.img} alt="servicio" className="sm:w-[192px] h-[50px] object-contain" />
        </div>
      ))}
    </section>
  );
  

export default Stats;