import styles from '../../../style';
import NavBar from '../NavBar/NavBar'
import Stats from './Stats';
import Business from './Business';
import Billing from './Billing';
import CardDeal from './CardDeal';
import CTA from './CTA';
import Footer from './Footer';
import Find from './Find/Find';
import Contact from './Contact/Contact';
import Clients from './Clients';
import Inicio from './Inicio';


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <NavBar/>
            </div>
        </div>
        
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Inicio/>
          </div>
        </div>
        
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business />
        <Find/>
        <Billing />
        <CardDeal />
        <Contact/>
        <Clients/>
        <CTA/>
        <Footer /> 
      </div>
    </div>
  </div>
  );

export default App