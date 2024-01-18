/* eslint-disable no-unused-vars */
// Empleados.jsx
import { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../../../data/dummy';
import Header from '../MainBody/Header/Header';
import AddEmployeeForm from './Forms/AddEmployeeForm';
import EditEmployeeForm from './Forms/EditEmployeeForm';

const Empleados = () => {
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [isEditFormVisible, setEditFormVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const dialogTemplate = (props) => {
    return <AddEmployeeForm onSubmit={handleAddFormSubmit} onCancel={handleFormCancel} />;
  };

  const editOptions = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Dialog',
    template: dialogTemplate,
  };
  const toolbarOptions = ['Add', 'Edit', 'Delete'];
/*   const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
 */  const pageSettings = { pageCount: 5 };

  const handleAddClick = () => {
    setAddFormVisible(true);
  };

  const handleEditClick = (employee) => {
    setEditFormVisible(true);
    setSelectedEmployee(employee);
  };

  const handleDeleteClick = () => {
    // Implement delete logic
  };

  const handleAddFormSubmit = (formData) => {
    // Implement add logic with formData
    setAddFormVisible(false);
  };

  const handleEditFormSubmit = (formData) => {
    // Implement edit logic with formData
    setEditFormVisible(false);
    setSelectedEmployee(null);
  };

  const handleFormCancel = () => {
    setAddFormVisible(false);
    setEditFormVisible(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Admin" title="Empleados" />

      {isAddFormVisible && (
        <AddEmployeeForm onSubmit={handleAddFormSubmit} onCancel={handleFormCancel} />
      )}

      {isEditFormVisible && selectedEmployee && (
        <EditEmployeeForm employee={selectedEmployee} onSubmit={handleEditFormSubmit} onCancel={handleFormCancel} />
      )}

      {!isAddFormVisible && !isEditFormVisible && (
        <div className='control-pane'>
          <div className='control-section'>
          <GridComponent
                  dataSource={employeesData}
                  toolbar={toolbarOptions}
                  allowPaging={true}
                  editSettings={editOptions}
                  pageSettings={pageSettings}
                  actionComplete={(args) => {
                if (args.requestType === 'save') {
                  // Add save logic here
                }
              }}
            >
              <ColumnsDirective>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {employeesGrid.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))}
              </ColumnsDirective>
              <Inject services={[Page, Toolbar, Edit]} />
            </GridComponent>
          </div>
        </div>
      )}
    </div>
  );
};

export default Empleados;
