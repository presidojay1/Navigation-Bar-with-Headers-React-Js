import React from 'react'
import './Body.css';
import './Queries.css';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
const Body = () => {
  return (
    <section className='BodySection'>
      <div className="firstboxdiv">
        <div className="boxdiv">
          <div className="textbody">
              <h1>Products</h1>
              <h2>3</h2>
          </div>
          
        </div>
        <div className="boxdiv">
          <div className="textbody">
            <h1>Sales</h1>
            <h2>N16,500</h2>
          </div>
          
        </div>
        <div className="boxdiv">
          <div className="textbody">
              <h1>Posts</h1>
              <h2>177</h2>
          </div>
          
        </div>
        <div className="boxdiv">
          <div className="textbody">
            <h1>Users</h1>
            <h2>107</h2>
          </div>    
        </div>
      </div>
      <div className="shifabg">
        <div className="seconddivx">
          <div className="Recentfeed">
            <div className="recentmessagediv">
                <div className="recentmessagediv">
                    <MailIcon />
                </div>
                <div className="recentmessagediv">
                    <h5>Recent General Feeds</h5>
                </div>
            </div>
          </div>
          <div className="searchrecentfeed">
            <div className='navbarSearch'>
              <input className="formble" type="text" placeholder="Search" aria-label="Search" />             
            </div>
          </div>
        </div>
        <div className="biggerdivmove">
        <div className="bigerrdiva">
            <div className="avatarhead">
              <div className="avatardiv">
                <div className="profilepic">
                  <img className='profilepix' width="50px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbr_GF0rPVY0W_eatFSF92HkphRwtCLfHag&usqp=CAU" />
                </div>
                <div className="Time">
                  <h4>Peter Olayinka</h4>
                </div>
              </div>
              <div className="avatartime">
                <p>Tue 24 May,2022 04:01:98</p>
              </div>
            </div>
          <p>dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <br />
          <hr />
        </div>
        <div className="bigerrdiva">
            <div className="avatarhead">
              <div className="avatardiv">
                <div className="profilepic">
                  <img className='profilepix' width="50px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbr_GF0rPVY0W_eatFSF92HkphRwtCLfHag&usqp=CAU" />
                </div>
                <div className="Time">
                  <h4>Peter Olayinka</h4>
                </div>
              </div>
              <div className="avatartime">
                <p>Tue 24 May,2022 04:01:98</p>
              </div>
            </div>
          <p>dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <br />
          <hr />
        </div>
        <div className="bigerrdiva">
            <div className="avatarhead">
              <div className="avatardiv">
                <div className="profilepic">
                  <img className='profilepix' width="50px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbr_GF0rPVY0W_eatFSF92HkphRwtCLfHag&usqp=CAU" />
                </div>
                <div className="Time">
                  <h4>Peter Olayinka</h4>
                </div>
              </div>
              <div className="avatartime">
                <p>Tue 24 May,2022 04:01:98</p>
              </div>
            </div>
          <p>dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <br />
          <hr />
        </div>
        <div className="bigerrdiva">
            <div className="avatarhead">
              <div className="avatardiv">
                <div className="profilepic">
  <img className='profilepix' width="50px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbr_GF0rPVY0W_eatFSF92HkphRwtCLfHag&usqp=CAU" />                
                </div>
                <div className="Time">
                  <h4>Peter Olayinka</h4>
                </div>
              </div>
              <div className="avatartime">
                <p>Tue 24 May,2022 04:01:98</p>
              </div>
            </div>
          <p>dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <br />
          <hr />
        </div>
        </div>
          
        </div>
    </section>
  )
}

export default Body