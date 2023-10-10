import Activity from './Activity Section/Activity'
import './Body.css'
import Listing from './Listing Section/Listing'
import Top from './Top Section/Top'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>

      <div className="bottom flex">
      <Listing/>
      <Activity/>
      </div>
    </div>
  )
}

export default Body