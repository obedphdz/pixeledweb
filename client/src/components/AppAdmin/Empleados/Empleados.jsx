import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../../../data/dummy';
import  Header  from '../MainBody/Header/Header';

const Empleados = () => {
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const pageSettings = { pageCount: 5 };
  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Empleados" />
      <div className='control-pane'>
      <div className='control-section'>
        <GridComponent dataSource={employeesData} toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} pageSettings={pageSettings}>
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
          <Inject services={[Page, Toolbar, Edit]}/>
        </GridComponent>
      </div>
    </div>
    </div>
  )
}

export default Empleados