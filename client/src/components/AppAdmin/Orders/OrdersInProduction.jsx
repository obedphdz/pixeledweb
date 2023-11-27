/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../../../data/dummy';
import './Orders.css';
import { Link } from 'react-router-dom';
import Header from '../MainBody/Header/Header';

const OrdersInProduction = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  
  const actionCompleteHandler = (args) => {
    if (args.requestType === 'save' || args.requestType === 'delete') {
      // Aquí puedes realizar acciones después de que se completa una operación de edición o eliminación
      console.log('Operación de edición o eliminación completada:', args);
    }
  };

  const detailsButtonClick = (data) => {
    // Manejar el clic del botón de detalles aquí, por ejemplo, redirigir a otra página
    console.log('Detalles Button Clicked', data);
  
    // Aquí puedes realizar la acción deseada, como la redirección
    // Puedes usar la información de la fila haciendo referencia a 'data' en la función del botón
    const orderId = data.OrderID; // Asegúrate de adaptar esto según la estructura de tu data
  
    // Redirige a la página de detalles de la orden con el ID correspondiente
    return `/detalles-orden/${orderId}`;
  };
  

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Ordenes en Producción" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        actionComplete={actionCompleteHandler}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => {
            if (item.field === 'DetallesBtn') {
              // Agregar la columna de botón de detalles
              return (
                <ColumnDirective
                  key={index}
                  headerText={item.headerText}
                  width={item.width}
                  template={(props) => (
                   /*  <Link to={detailsButtonClick(props.rowData)}> */
                   <Link to='./detalles-ord'>
                      <button className="btn-detalles">Ver Detalles</button>
                    </Link>
                  )}
                />
              );
            }
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default OrdersInProduction;
