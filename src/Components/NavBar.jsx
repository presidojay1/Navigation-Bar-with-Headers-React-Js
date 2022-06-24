import React from 'react'
import './NavBar.css';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
const NavBar = () => {
  return (
    <section className="navbarsec">
      <div className="navbarflex">
        <div className='navbarSearch'>
          <input className="formbl" type="text" placeholder="Search" aria-label="Search" />
          <SearchIcon className="searchicon" />
        </div>
        <div className='navbarsecond'>
          <div className="navbarimage">
              <CircleNotificationsIcon className="CircleNotificationsIcon" />
          </div>
          <div className="navbariv">
              <h3>Hi, Omojola</h3>
          </div>
          <div className="navbarname">
            <img width="50px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbr_GF0rPVY0W_eatFSF92HkphRwtCLfHag&usqp=CAU" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default NavBar