/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, Month, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import * as dataSource from './data.json';

const PedidosAsig = () => {
    const scheduleObj = useRef(null);
    const data = extend([], dataSource.recurrenceData, null, true);
    const [eventSettings, setEventSettings] = useState({ dataSource: data, editFollowingEvents: false });
    const onEventRendered = (args) => {
        applyCategoryColor(args, scheduleObj.current.currentView);
    };
    const onChange = (args) => {
        setEventSettings({ ...eventSettings, editFollowingEvents: args.checked });
    };
    return (<div className='schedule-control-section'>
      <div className='col-lg-9 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent width='100%' height='650px' selectedDate={new Date(2021, 1, 20)} ref={scheduleObj} eventSettings={eventSettings} eventRendered={onEventRendered}>
            <ViewsDirective>
              <ViewDirective option='Day'/>
              <ViewDirective option='Week'/>
              <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Day, Week, Month, Resize, DragAndDrop]}/>
          </ScheduleComponent>
        </div>
      </div>
    </div>);
};
export default PedidosAsig;