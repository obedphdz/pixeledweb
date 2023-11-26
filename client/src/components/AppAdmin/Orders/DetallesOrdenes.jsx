import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Aggregate, Edit, Toolbar, Group, AggregateColumnsDirective, AggregateColumnDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { detallesOrdersData } from '../../../data/dummy';
import Header from '../MainBody/Header/Header';


function DetallesOrdenes() {
    function footerSum(props) {
        return (<span>Sum: {props.Sum}</span>);
    }
    function groupFooterSum(props) {
        return (<span>Sum: {props.Sum}</span>);
    }
    function groupcFooterAvg(props) {
        return (<span>Average: {props.Average}</span>);
    }
    const pageSettings = { pageCount: 5 };
    const groupSettings = { showDropArea: false, columns: ['CustomerID'] };
    const toolbarOptions = ['Delete', 'Update', 'Cancel'];
    const editSettings = { allowEditing: true, allowDeleting: true, mode: 'Batch' };


    return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Detalles Orden" />
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={detallesOrdersData} allowPaging={true} pageSettings={pageSettings} toolbar={toolbarOptions} editSettings={editSettings} allowGrouping={true} groupSettings={groupSettings}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Customer Name' isPrimaryKey={true} width='150'></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
                    <ColumnDirective field='Freight' headerText='Freight' editType='numericedit' width='120' format='C2' textAlign='Right'></ColumnDirective>
                    <ColumnDirective field='OrderDate' headerText='Order Date' editType='datepickeredit' format='yMd' width='170'></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150'></ColumnDirective>
                </ColumnsDirective>
                <AggregatesDirective>
                    <AggregateDirective>
                    <AggregateColumnsDirective>
                        <AggregateColumnDirective field='Freight' type='Sum' format='C2' footerTemplate={footerSum}> </AggregateColumnDirective>
                    </AggregateColumnsDirective>
                    </AggregateDirective>
                    <AggregateDirective>
                    <AggregateColumnsDirective>
                        <AggregateColumnDirective field='Freight' type='Sum' format='C2' groupFooterTemplate={groupFooterSum}> </AggregateColumnDirective>
                    </AggregateColumnsDirective>
                    </AggregateDirective>
                    <AggregateDirective>
                    <AggregateColumnsDirective>
                        <AggregateColumnDirective field='Freight' type='Average' format='C2' groupCaptionTemplate={groupcFooterAvg}> </AggregateColumnDirective>
                    </AggregateColumnsDirective>
                    </AggregateDirective>
                </AggregatesDirective>
                <Inject services={[Page, Aggregate, Edit, Toolbar, Group, Edit]}/>
                </GridComponent>
                </div>
            </div>
        </div>
    );
}
export default DetallesOrdenes;