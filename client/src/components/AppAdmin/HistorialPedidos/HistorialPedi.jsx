/* eslint-disable no-unused-vars */
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Inject, Filter } from '@syncfusion/ej2-react-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import  Header  from '../MainBody/Header/Header';
import { historialOrdersData } from '../../../data/dummy';


function HistorialPedi() {
    let gridInstance;
    const indicatortypes = [
        { id: 'Shimmer', name: 'Shimmer' },
        { id: 'Spinner', name: 'Spinner' }
    ];
    const fields = { text: 'name', value: 'id' };
    let indicatorDropDown;
    function indicatorChange(e) {
        if (indicatorDropDown.value === 'Shimmer') {
            gridInstance.loadingIndicator.indicatorType = 'Shimmer';
            gridInstance.refresh();
        }
        else {
            gridInstance.loadingIndicator.indicatorType = 'Spinner';
            gridInstance.refresh();
        }
    }
    ;
    return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Historial Pedidos" />
    <div className='control-pane'>
            <div className='control-section'>
                <div style={{ paddingBottom: '20px' }}>
                    <div style={{ display: 'inline-block', paddingRight: '10px' }}>
                        <div style={{ display: 'inline-block', paddingRight: '10px' }}>
                            <span>
                                Indicator Type
                            </span>
                        </div>
                        <div style={{ display: 'inline-block', paddingRight: '10px' }}>
                            <DropDownListComponent dataSource={indicatortypes} value="Shimmer" change={indicatorChange.bind(this)} fields={fields} ref={(indicateDropDown) => { indicatorDropDown = indicateDropDown; }}/>
                        </div>
                    </div>
                </div>
                <GridComponent id="Grid" dataSource={historialOrdersData}  ref={grid => { gridInstance = grid; }} allowPaging={true} pageSettings={{ pageCount: 3 }} loadingIndicator={{ indicatorType: 'Shimmer' }} allowFiltering={true} allowSorting={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='ID Orden' width='130' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='Cliente' headerText='Cliente' width='150'></ColumnDirective>
                        <ColumnDirective field='Vendedor' headerText='Vendedor' width='100' textAlign='Right'/>
                        <ColumnDirective field='FechaEnvio' headerText='Fecha Envio' width='100' format='date' textAlign='Right'/>
                        <ColumnDirective field='FechaEntrega' headerText='Fecha Entrega' width='150' format={Date}></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter]}/>
                </GridComponent>
            </div>
        </div>
    </div>
    );
}
export default HistorialPedi;