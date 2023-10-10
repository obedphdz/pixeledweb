import {stats} from '../../constantes/index'
import styles from '../../../style'


const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mt-20 mb-16`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
          {/* <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p> */}
          <img src={stat.img} alt="servicio" className="sm:w-[192px] h-[50px] object-contain" />
        </div>
      ))}
    </section>
  );
  

export default Stats;