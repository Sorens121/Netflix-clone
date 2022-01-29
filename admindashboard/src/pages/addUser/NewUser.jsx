import './newuser.css'
import React from 'react';
import {Publish} from '@material-ui/icons'

export default function NewUser() {
  return (
      <div className="newuser">
          <div className="newUserTitleContainer">
              <span className="newTitle">New User</span>
          </div>
          <div className="newUserContainer">
              <form className="newUserInputForm">
                  <div className="newUserInputFormLeft">
                        <div className="newUserInputItem">
                            <label>Username</label>
                            <input type="text" placeholder='username' className='newUserInput'/>
                        </div>
                        <div className="newUserInputItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='fullname' className='newUserInput'/>
                        </div>
                        <div className="newUserInputItem">
                            <label>Email</label>
                            <input type="email" placeholder='email' className='newUserInput'/>
                        </div>
                        <div className="newUserInputItem">
                            <label>Contact</label>
                            <input type="text" placeholder='contact' className='newUserInput'/>
                        </div>
                        <div className="newUserInputItem">
                            <label>Address</label>
                            <input type="text" placeholder='address' className='newUserInput'/>
                        </div>
                        <div className="newUserInputItem">
                            <label htmlFor="gender">Gender</label>
                            <select name="cars" id="gender">
                                <option value="gender">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="newUserInputFormRight">
                        <div className="newUserUpdateProfileTitle">
                            <span className="newUserInputFormProfile">Profile Picture</span>
                        </div>
                        <div className="newUserInputFormUpload">
                            <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" 
                                    alt="" className="newUserInputFormImg" />
                            <input className="newUserInputImgUpload" type="file" id="file"/>
                        </div>
                    </div>
                </form>
            <button className="newUserInputFormButton">Create</button>
            </div>
      </div>
  );
}
