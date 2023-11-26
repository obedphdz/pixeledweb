
/* JefeDise.jsx */

import Slidenew from "../Slidebar Section/Slidenew"
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons'
import OrdersInProduction from "../Orders/OrdersInProduction"
import { sectionsForJefeDi} from "../Slidebar Section/sectionsForSlide/sections"
import '../Orders/Orders.css'

export const items = [
	{
		text: 'Dashboard',
		iconCss: 'e-ddb-icons e-dashboard'
	},
	{
		text: 'Notifications',
		iconCss: 'e-ddb-icons e-notifications',
	},
	{
		text: 'User Settings',
		iconCss: 'e-ddb-icons e-settings',
	},
	{
		text: 'Log Out',
		iconCss: 'e-ddb-icons e-logout'
	}
];

const JefeDise = () => {
  return (
	<div className="body-app">
		<div className="mainContainer">
			{/* DropDownButton */}
		<div id='dropdownbutton-control'>
            <div className='row'>
                <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                    <DropDownButtonComponent items={items}>Profile</DropDownButtonComponent>
                </div>
            </div>
        </div>
			<Slidenew sections={sectionsForJefeDi} />
			<div className="bodyContainer">
				<OrdersInProduction />
			</div>
		</div>
  	</div>
  
  )
}

export default JefeDise