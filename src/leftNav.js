import { MdPeopleAlt } from 'react-icons/md'
import { ImDrawer2 } from 'react-icons/im'
import { RiDiscountPercentFill } from 'react-icons/ri'
import { BiSolidCategory } from 'react-icons/bi'
import { BiSolidReport } from 'react-icons/bi'
import { IoIosHelpCircle } from 'react-icons/io'
import { IoIosSettings } from 'react-icons/io'
import { BsBalloonHeartFill } from 'react-icons/bs'

import './leftNav.css'

import image1 from './assets/Life_duty-removebg-preview.png'

const LeftNav = () => {
  return (
    <div className="left-nav">
      <div className="left-nav__logo">
        <img src={image1} alt="Logo" />
      </div>
      <div className="sections">
        <div className="student">
          <MdPeopleAlt className="icon" />
          <p>Students Management</p>
        </div>
        <div className="financial">
          <ImDrawer2 className="icon" />
          <p>Financial Management</p>
        </div>
        <div className="quality">
          <RiDiscountPercentFill className="icon" />
          <p>Quality Control</p>
        </div>
        <div className="report">
          <BiSolidCategory className="icon" />
          <p>Report Category</p>
        </div>
        <div className="attendance">
          <BiSolidReport className="icon" />
          <p>Attendance</p>
        </div>
      </div>
      <div className="options">
        <IoIosHelpCircle className='option'/>
        <IoIosSettings className='option'/>
        <BsBalloonHeartFill className='option'/>
      </div>
    </div>
  )
}

export default LeftNav
