import { AggregateColumnDirective,  AggregateColumnsDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject, AggregateDirective, AggregatesDirective, Aggregate, Edit, Group, Page, Toolbar} from '@syncfusion/ej2-react-grids';
import { MdArrowBackIos } from "react-icons/md";
import { dataDetalles } from '../../../../data/dummy';
import {Link} from 'react-router-dom';
import Header from '../../MainBody/Header/Header';
import '../Orders.css'

function DetallesOrdenes() {
  const toolbarOptions = ['Delete', 'Update', 'Cancel'];
  const editOption = { allowEditing: true, allowDeleting: true, mode: 'Batch' };
  const groupOptions = { columns: ['ShipCountry'], showDropArea: false, }
  const footerSum = (props) => {
    return (<span>Sum: {props.Sum}</span>)
  }
  const groupFooterSum = (props) => {
    return (<span>Sum: {props.Sum}</span>)
  }
  const footerAvg = (props) => {
    return (<span>Max: {props.Average}</span>)
  }

  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl detallesDiv">
       <Link to='/ad/ordenes'>
        <MdArrowBackIos className='backIcon' title="Volver a Ordenes"/>
        </Link>
        <Header category="Admin" title="Detalles Orden" />
        <div className='control-pane'>
            <div className='control-section'>
            <GridComponent dataSource={dataDetalles} allowPaging={true}
                allowGrouping={true} groupSettings={groupOptions}
                toolbar={toolbarOptions} editSettings={editOption} height={268}>
                <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='120' textAlign='Right' />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='Freight' headerText='Freight' format='C2' editType='numericedit' width='150' />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                </ColumnsDirective>
                <AggregatesDirective>
                <AggregateDirective>
                    <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Sum' format='C2'
                        footerTemplate={footerSum} />
                    </AggregateColumnsDirective>
                </AggregateDirective>
                <AggregateDirective>
                    <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Sum' format='C2'
                        groupFooterTemplate={groupFooterSum} />
                    </AggregateColumnsDirective>
                </AggregateDirective>
                <AggregateDirective>
                    <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Average' format='C2'
                        groupCaptionTemplate={footerAvg} />
                    </AggregateColumnsDirective>
                </AggregateDirective>
                </AggregatesDirective>
                <Inject services={[Page, Aggregate, Edit, Group, Toolbar]} />
            </GridComponent>
                </div>
            </div>
        </div>
    );
}
export default DetallesOrdenes;