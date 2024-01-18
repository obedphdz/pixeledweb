import {stats,  stats1, stats2 } from '../../constantes/index'
import styles from '../../../style'


const Stats = () => (
  <section className={`${styles.flexCenter} flex-row sm:mt-20 mb-16`}>
    {/* Stats solo para tamaños de pantalla sm y más grandes */}
    <div className="hidden sm:flex flex-row flex-wrap">
      {stats.map((stat) => (
        <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
          <img src={stat.img} alt="servicio" className="w-[192px] h-[50px] mb-3 object-contain" />
        </div>
      ))}
    </div>

    {/* Stats1 para tamaños de pantalla móviles */}
    <div className="flex-1 sm:w-1/2 md:w-1/4 p-3 sm:hidden xs:hidden ss:hidden md:hidden">
      {stats1.map((stat) => (
        <img key={stat.id} src={stat.img} alt="servicio" className="w-full h-auto mb-3 max-w-[200px]" />
      ))}
    </div>

    {/* Stats2 para tamaños de pantalla móviles */}
    <div className="flex-1 sm:w-1/2 md:w-3/4 p-3 sm:mt-3 sm:hidden xs:hidden ss:hidden md:hidden">
      {stats2.map((stat) => (
        <img key={stat.id} src={stat.img} alt="servicio" className="w-full h-auto mb-3 max-w-[130px]" />
      ))}
    </div>
  </section>
);
export default Stats;