import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Inject } from '@syncfusion/ej2-react-grids';
import { categoryData } from '@syncfusion/ej2/data'
function Searching() {
    const toolbarOptions = ['Search'];
    return (<div className='control-pane'>
            <div className='control-section row'>
                <GridComponent dataSource={categoryData} toolbar={toolbarOptions} allowPaging={true} pageSettings={{ pageSize: 10, pageCount: 5 }}>
                    <ColumnsDirective>
                        <ColumnDirective field='CategoryName' headerText='Category Name' width='170'></ColumnDirective>
                        <ColumnDirective field='ProductName' headerText='Product Name' width='150'></ColumnDirective>
                        <ColumnDirective field='QuantityPerUnit' headerText='Quantity PerUnit' width='180' textAlign='Right'/>
                        <ColumnDirective field='UnitsInStock' headerText='Units In Stock' width='150' textAlign='Right'/>
                    </ColumnsDirective>
                    <Inject services={[Toolbar, Page]}/>
                </GridComponent>
            </div>

        </div>);
}
export default Searching;