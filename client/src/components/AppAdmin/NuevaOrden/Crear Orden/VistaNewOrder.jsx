import '../../MainBody/MainBody.css'
import '../../Orders/Orders.css'
import Slidenew from '../../Slidebar Section/Slidenew';
import NewOrder from "./NewOrder"
import { sectionsForAdmin } from '../../Slidebar Section/sectionsForSlide/sections';
import Header from '../../MainBody/Header/Header';
import { OrderContextProvider } from '../Orders Context/OrderContext';

const VistaNewOrder = () => {
  return (
    <OrderContextProvider>
      <div className='body-app'>
        <div className="mainContainer">
          <Slidenew sections={sectionsForAdmin}  />
          <div className="inputbodyContainer">
            <div className="m-2 md:m-0 mt-2 p-2 md:p-6 bg-white rounded-3xl crearOrdenDiv">
              <Header category='Admin' title="Crear Orden de Producción." />
              <NewOrder 
                ptexto='Ingresa los datos de tu pedido'
                btnaccion='Pedido'/>
            </div>
          </div>
        </div>
      </div>
    </OrderContextProvider>
  );
}

export default VistaNewOrder;
