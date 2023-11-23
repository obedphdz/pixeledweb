import ReactDOM from 'react-dom/client';
import PixHome from './components/PixHome/PixHome';
import '../index.css'; 
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn9SdkJiUXxbcXFTRGJa');

ReactDOM.createRoot(document.getElementById('root')).render(
		<PixHome />
);
