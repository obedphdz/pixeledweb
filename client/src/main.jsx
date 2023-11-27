import ReactDOM from 'react-dom/client';
import PixHome from './components/PixHome/PixHome';
import '../index.css'; 
import { registerLicense } from '@syncfusion/ej2-base';

/* Ngo9BigBOggjHTQxAR8/V1NHaF1cWGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZiWH1YcXxRRWNcUEN/Wg==
 */
registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn9SdENiUXpYcHxQR2Vd');

ReactDOM.createRoot(document.getElementById('root')).render(
		<PixHome />
);
