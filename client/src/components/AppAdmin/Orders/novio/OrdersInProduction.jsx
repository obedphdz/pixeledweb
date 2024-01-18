/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { GridComponent, ColumnsDirective, ColumnDirective, 
  Resize, Sort, ContextMenu, Filter, Page, ExcelExport, 
  PdfExport, Edit, Inject, Toolbar} from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../../../data/dummy';
import './Orders.css';
import { Link } from 'react-router-dom';
import Header from '../MainBody/Header/Header';
import data from './BDDinfo.json';

const OrdersInProduction = () => {
  
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
  
  //const statusData = ['Pendiente', 'Activo', 'Terminado', 'Rechazado', 'Completo', ];

  const editing = { allowDeleting: true, allowEditing: true, mode: 'Dialog', allowAdding: true};
  const toolbarOptions = ['Add', 'Edit', 'Delete'];

 /* const customizeCell = (args) => {
    if(args.data.Freight > 50 ){
      args.row.classList.add('above-50')
    }
  };*/

  const statusColors = [
    {
      Cotizacion: '#8ae0db',
      Diseño: '#89dcff',
      Impresion: '#ff073d',
      Taller: '#ff073d',
      Letras: '#ff073d',
      Completado: '#ff073d',
      Cancelado: '#ff073d',
      EnProceso: '#a3ceef'
    }
  ];

  const customizeCell = (args) => {
    if (args.column.field === 'estatus_general') {
      if (args.data[args.column.field] === 'Completado') {
        args.cell.classList.add('completadoColor');
      } else if (args.data[args.column.field] === 'Cotizacion') {
        args.cell.classList.add('cotizacionColor');
      } else if (args.data[args.column.field] === 'Cancelado'){
        args.cell.classList.add('canceladoColor');
      } else {
         args.cell.classList.add('procesoColor'); 
      }
    }
  };

  /*const gridOrderStatus = (props) => (
    <button
      type="button"
      style={{ background: props.statusColors }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >{props.ShipCountry}
    </button>
    
  );
*/
  return (
  /*  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
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
                   // <Link to={detailsButtonClick(props.rowData)}> 
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
      <br />
      <br />
      <br />
      <div>
          <h1>HOLA</h1>
      </div>
    </div> */
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Ordenes en Producción" /> 
      <GridComponent 
      dataSource={data} 
      //allowPaging={true} 
      //pageSettings={{pageSize:6}}
      editSettings={editing}
      toolbar={toolbarOptions}
      //rowDataBound={customizeCell}
      queryCellInfo={customizeCell}
      >
          <ColumnsDirective>
            <ColumnDirective field='id_cliente' headerText='ID Cliente' textAlign='Center' width='150'/>
            <ColumnDirective field='id_pedido' headerText='ID Pedido' width='150' textAlign='Center'/>
            <ColumnDirective field='estatus_general' headerText='Status' editType='dropdownedit' width='140' textAlign='Center'/>
            <ColumnDirective field='fecha_solicitud' headerText='Fecha de Solicitud' textAlign='Center'/>
            <ColumnDirective field='fecha_entrega' headerText='Fecha de Entrega' textAlign='Center'/>
            <ColumnDirective headerText='Detalles' textAlign='Center' template={ (props) => (
                <Link to='./detalles-ord'>
                <button className="btn-detalles">Ver Detalles</button>
              </Link>
              )}/>
          </ColumnsDirective>
          <Inject services={[Edit, Toolbar]}/>  
      </GridComponent>
    </div>
  );
};

export default OrdersInProduction;
