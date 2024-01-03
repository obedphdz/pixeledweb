import '../Admin.css'
import Slidenew from '../Slidebar Section/Slidenew';
import { sectionsForAdmin } from '../Slidebar Section/sectionsForSlide/sections';
import PreciosLista from './PreciosLista';

export default function Precios() {
  return (
		<>
			<div className='app-body'>
				<div className='containerAdmin'>
					<Slidenew sections={sectionsForAdmin}/>
					<PreciosLista />
				</div>
			</div>
		</>
	);
}
