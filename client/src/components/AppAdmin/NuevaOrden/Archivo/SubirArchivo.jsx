/* eslint-disable no-unused-vars */

import { UploaderComponent, FilesDirective, UploadedFilesDirective } from '@syncfusion/ej2-react-inputs';
import { useRef } from 'react';
const SubirArchivo = () => {
    // Uploader component
    const uploadObj = useRef(null);
    let dropElement;
    let asyncSettings = null;
    let dropContainerRef = null;
    let dropContainerEle;
    dropContainerEle = null;
    dropContainerRef = element => {
        dropContainerEle = element;
    };
    asyncSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    const rendereComplete = () => {
        dropElement = dropContainerEle;
        uploadObj.current.dropArea = dropElement;
        uploadObj.current.dataBind();
        uploadObj.current.element.setAttribute('name', 'UploadFiles');
    };
    const onRemoveFile = (args) => {
        args.postRawFile = false;
    };
    const clearButtonClick = () => {
        uploadObj.current.clearAll();
    };
    return (<div className='control-pane' ref={dropContainerRef}>
			<div className='control-section uploadpreview'>
				<div className='col-lg-9'>
					<div className='validation_wrapper'>
						<UploaderComponent id='validation' type='file' ref={uploadObj} asyncSettings={asyncSettings} removing={onRemoveFile.bind(this)}>
						</UploaderComponent>
					</div>
				</div>
			</div>
      	</div>);
};
export default SubirArchivo;