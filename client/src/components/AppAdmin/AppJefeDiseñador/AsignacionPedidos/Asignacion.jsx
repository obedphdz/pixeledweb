/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject, TimelineViews, Resize, DragAndDrop, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import { extend, closest, remove, addClass } from '@syncfusion/ej2-base';
import * as dataSource from './data.json';


const Asignacion = () => {
    const scheduleObj = useRef(null);
    const treeObj = useRef(null);
    let isTreeItemDropped = false;
    let draggedItemId = '';
    const allowDragAndDrops = true;
    const fields = { dataSource: dataSource.waitingList, id: 'Id', text: 'Name' };
    const data = extend([], dataSource.hospitalData, null, true);
    const departmentData = [
        { Text: 'DISEÑO', Id: 1, Color: '#bbdc00' },
        { Text: 'IMPRESION', Id: 2, Color: '#9e5fff' }
    ];
    const consultantData = [
        { Text: 'Liss', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Diseñador' },
        { Text: 'Cristobal', Id: 2, GroupId: 1, Color: '#9e5fff', Designation: 'Diseñador' },
        { Text: 'Montserrat', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Jefe Diseño' },
        { Text: 'Milton', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Impresion' },
        { Text: 'Laura', Id: 5, GroupId: 2, Color: '#bbdc00', Designation: 'Impresion' },
        { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Diseño' }
    ];
    const getConsultantName = (value) => {
        return value.resourceData[value.resource.textField];
    };
    const getConsultantImage = (value) => {
        return getConsultantName(value).toLowerCase();
    };
    const getConsultantDesignation = (value) => {
        return value.resourceData.Designation;
    };
    const resourceHeaderTemplate = (props) => {
        return (<div className="template-wrap">
        <div className="specialist-category">
          <div className={"specialist-image " + getConsultantImage(props)}></div>
          <div className="specialist-name"> {getConsultantName(props)}</div>
          <div className="specialist-designation">{getConsultantDesignation(props)}</div>
        </div>
      </div>);
    };
    const treeTemplate = (props) => {
        return (<div id="waiting">
        <div id="waitdetails">
          <div id="waitlist">{props.Name}</div>
          <div id="waitcategory">{props.DepartmentName} - {props.Description}</div>
        </div>
      </div>);
    };
    const onItemSelecting = (args) => {
        args.cancel = true;
    };
    const onTreeDrag = (event) => {
        if (scheduleObj.current.isAdaptive) {
            const classElement = scheduleObj.current.element.querySelector('.e-device-hover');
            if (classElement) {
                classElement.classList.remove('e-device-hover');
            }
            if (event.target.classList.contains('e-work-cells')) {
                addClass([event.target], 'e-device-hover');
            }
        }
    };
    const onActionBegin = (event) => {
        if (event.requestType === 'eventCreate' && isTreeItemDropped) {
            const treeViewData = treeObj.current.fields.dataSource;
            const filteredPeople = treeViewData.filter((item) => item.Id !== parseInt(draggedItemId, 10));
            treeObj.current.fields.dataSource = filteredPeople;
            const elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
            for (let i = 0; i < elements.length; i++) {
                remove(elements[i]);
            }
        }
    };
    const onTreeDragStop = (event) => {
        const treeElement = closest(event.target, '.e-treeview');
        const classElement = scheduleObj.current.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeElement) {
            event.cancel = true;
            const scheduleElement = closest(event.target, '.e-content-wrap');
            if (scheduleElement) {
                const treeviewData = treeObj.current.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    const filteredData = treeviewData.filter((item) => item.Id === parseInt(event.draggedNodeData.id, 10));
                    const cellData = scheduleObj.current.getCellDetails(event.target);
                    const resourceDetails = scheduleObj.current.getResourcesByIndex(cellData.groupIndex);
                    const eventData = {
                        Name: filteredData[0].Name,
                        StartTime: cellData.startTime,
                        EndTime: cellData.endTime,
                        IsAllDay: cellData.isAllDay,
                        Description: filteredData[0].Description,
                        DepartmentID: resourceDetails.resourceData.GroupId,
                        ConsultantID: resourceDetails.resourceData.Id
                    };
                    scheduleObj.current.openEditor(eventData, 'Add', true);
                    isTreeItemDropped = true;
                    draggedItemId = event.draggedNodeData.id;
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    };
    const onTreeDragStart = () => {
        document.body.classList.add('e-disble-not-allowed');
    };
    return (
        <div className="schedule-container" style={{ marginTop: '-3rem' }}>
            <div className=" mb-10">
                    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
                            Asignación de Pedidos.
                    </p>
            </div>
                <ScheduleComponent ref={scheduleObj} cssClass='schedule-drag-drop' width='100%' height='550px' selectedDate={new Date(2023, 10, 27)} currentView='TimelineDay' resourceHeaderTemplate={resourceHeaderTemplate} eventSettings={{ dataSource: data, fields: { subject: { title: 'Patient Name', name: 'Name' }, startTime: { title: "From", name: "StartTime" }, endTime: { title: "To", name: "EndTime" }, description: { title: 'Reason', name: 'Description' } } }} group={{ enableCompactView: false, resources: ['Departments', 'Consultants'] }} actionBegin={onActionBegin}>
                <ResourcesDirective>
                    <ResourceDirective field='DepartmentID' title='Department' name='Departments' allowMultiple={false} dataSource={departmentData} textField='Text' idField='Id' colorField='Color'/>
                    <ResourceDirective field='ConsultantID' title='Consultant' name='Consultants' allowMultiple={false} dataSource={consultantData} textField='Text' idField='Id' groupIDField="GroupId" colorField='Color'/>
                </ResourcesDirective>
                <ViewsDirective>
                    <ViewDirective option='TimelineDay'/>
                    <ViewDirective option='TimelineMonth'/>
                </ViewsDirective>
                <Inject services={[TimelineViews, TimelineMonth, Resize, DragAndDrop]}/>
                </ScheduleComponent>
            </div>
    
    );
};
export default Asignacion;