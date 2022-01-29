import './user.css'
import React from 'react';
import {PermIdentity, LocationCity, Email, Phone, Publish} from '@material-ui/icons'
import {Link} from 'react-router-dom'


export default function User() {
  return (
      <div className="user">
          <div className="userTitleContainer">
              <h1 className="userTitle">Edit User</h1>
              <Link to="/newUser">
                <button className="userAddButton">Create</button>
              </Link>
          </div>
          <div className="userContainer">
              <div className="userShow">
                  <div className="userShowTop">
                      <img className='userShowImg'
                        src='https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg' alt=''/>
                  <div className="userShowTopTitle">
                      <span className="userShowUserName">Anna Becker</span>
                      <span className="userShowUserDetails">Software Engineer</span>
                  </div>
                  
                </div>

                <div className="userShowBottom">
                    <span className="userShowTitle">
                        Account Details
                    </span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowIntoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <Phone className='userShowIcon'/>
                        <span className="userShowIntoTitle">+1 8745120369</span>
                    </div>
                    <div className="userShowInfo">
                        <Email className='userShowIcon'/>
                        <span className="userShowIntoTitle">annabeck99@test.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationCity className='userShowIcon'/>
                        <span className="userShowIntoTitle">New York | USA</span>
                    </div>
                </div>
              </div>
              <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <form className="userUpdateForm">
                      <div className="userUpdateLeft">
                          <div className="userUpdateItem">
                              <label>Username</label>
                              <input type="text" className="userUpdateInput" placeholder='annabeck99'/>
                          </div>
                          <div className="userUpdateItem">
                              <label>Full Name</label>
                              <input type="text" className="userUpdateInput" placeholder='Anna Bexk'/>
                          </div>
                          <div className="userUpdateItem">
                              <label>Email</label>
                              <input type="text" className="userUpdateInput" placeholder='annabeck99@text.com'/>
                          </div>
                          <div className="userUpdateItem">
                              <label>Contact</label>
                              <input type="text" className="userUpdateInput" placeholder='+1 8745120369'/>
                          </div>
                          <div className="userUpdateItem">
                              <label>Location</label>
                              <input type="text" className="userUpdateInput" placeholder='New York, USA'/>
                          </div>
                      </div>

                      <div className="userUpdateRight">
                        <span className="userUpdateProfile">Profile Picture</span>
                          <div className="userUpdateUpload">
                              <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" 
                                alt="" className="userUpdateImg" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                          </div>
                          <button className="userUpdateButton">Update</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
}
