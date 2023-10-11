import '../Admin.css'
import Slidebar from '../Slidebar Section/Slidebar';
import PreciosLista from './PreciosLista';

export default function Precios() {
  return (
		<>
			<div className='app-body'>
				<div className='containerAdmin'>
					<Slidebar />
					<PreciosLista />
				</div>
			</div>
		</>
	);
}
