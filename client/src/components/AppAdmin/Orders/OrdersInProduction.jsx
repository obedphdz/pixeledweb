
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../../../data/dummy';
import './Orders.css';
import Header from '../../Header/Header';

const OrdersInProduction = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  
  const actionCompleteHandler = (args) => {
    if (args.requestType === 'save' || args.requestType === 'delete') {
      // Aquí puedes realizar acciones después de que se completa una operación de edición o eliminación
      console.log('Operación de edición o eliminación completada:', args);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
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
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default OrdersInProduction;
