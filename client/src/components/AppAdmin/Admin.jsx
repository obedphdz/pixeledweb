import './Admin.css'
import Slidebar from "./Slidebar Section/Slidebar"
import Body from '../Body Section/Body'



const Admin = () => {
 
  return (
		<div className='app-body'>
			<div className='containerAdmin'>
				<Slidebar />
				<Body />
			</div>
		</div>
	);
}

export default Admin