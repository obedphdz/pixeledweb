/* eslint-disable no-unused-vars */

import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { useRef } from 'react';

const SubirArchivo = ({ id, value, onFileSelected }) => {
    // Uploader component
    const uploadObj = useRef(null);
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
        const dropElement = dropContainerRef.current;
        uploadObj.current.dropArea = dropElement;
        uploadObj.current.dataBind();
        uploadObj.current.element.setAttribute('name', 'UploadFiles');
      };
    
      const handleFileSelected = (args) => {
        // Llama a la función proporcionada desde NewOrder
        onFileSelected(args.filesData.length > 0 ? args.filesData[0].fileUrl : '');
      };
    
    const onRemoveFile = (args) => {
        args.postRawFile = false;
    };

    return (<div className='control-pane' ref={dropContainerRef}>
			<div className='control-section uploadpreview'>
				<div className='col-lg-9'>
					<div className='validation_wrapper'>
						<UploaderComponent 
                            id='validation' 
                            type='file' 
                            ref={uploadObj} 
                            asyncSettings={asyncSettings} 
                            removing={onRemoveFile.bind(this)}
                            selected={handleFileSelected.bind(this)}>
						</UploaderComponent>
					</div>
				</div>
			</div>
      	</div>);
};
export default SubirArchivo;