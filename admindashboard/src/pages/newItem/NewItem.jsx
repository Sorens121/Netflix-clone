import './newitem.css'
import React from 'react';

export default function NewItem() {
  return (
      <div className="newItem">
          <span className="newItemTitle">Create New Item</span>
          <div className="newItemContainer">
            <div className="newItemData">
              <form>
                  <div className="newItemInputItem">
                    <label className="generic-label">Title</label>
                    <input type="text" className="newItemInput" placeholder='title'/>
                  </div>
                  <div className='newItemInputItem'>
                    <label className="generic-label">Image</label>
                    <div className="file-upload-wrapper" data-text="Select your file">
                      <input name="file-upload-field" type="file" className="file-upload-field" value=""/>
                    </div>
                  </div>
                  <div className='newItemInputItem'>
                    <label className="generic-label">Title Image</label>
                    <div className="file-upload-wrapper" data-text="Select your file">
                      <input name="file-upload-field" type="file" className="file-upload-field" value=""/>
                    </div>
                  </div>
                  <div className='newItemInputItem'>
                    <label className="generic-label">Small Image</label>
                    <div className="file-upload-wrapper" data-text="Select your file">
                      <input name="file-upload-field" type="file" className="file-upload-field" value=""/>
                    </div>
                  </div>
                  <div className='newItemInputItem'>
                    <label className="generic-label">Trailer</label>
                    <div className="file-upload-wrapper" data-text="Select your file">
                      <input name="file-upload-field" type="file" className="file-upload-field" value=""/>
                    </div>
                  </div>
                  <div className='newItemInputItem'>
                    <label className="generic-label">Video</label>
                    <div className="file-upload-wrapper" data-text="Select your file">
                      <input name="file-upload-field" type="file" className="file-upload-field" value=""/>
                    </div>
                  </div>
                  <div className="newItemInputItem">
                    <label className="generic-label">Year</label>
                    <input type="text" className="newItemInput" placeholder='year'/>
                  </div>
                  <div className="newItemInputItem">
                    <label className="generic-label">limit</label>
                    <input type="text" className="newItemInput" placeholder='title'/>
                  </div>
                  <div className="newItemInputItem">
                    <label className="generic-label">Duration</label>
                    <input type="text" className="newItemInput" placeholder='duration'/>
                  </div>

                  <div className="newItemInputItem">
                      <label className="generic-label" htmlFor="gender">Is Movie</label>
                      <select className='newItemSelectionInput' name="cars" id="isMovie">
                          <option value="isMovie">Select</option>
                          <option value="false">False</option>
                          <option value="true">True</option>
                      </select>
                    </div>

                  <div className="newItemInputItem">
                    <label className="generic-label">Description</label>
                    <textarea name="" id="" cols="60" rows="10" className='textInput'></textarea>
                  </div>
              </form>
              {/* Button For Submit */}
              <div className="buttonWrapper">
                <button className='createButton'>Create</button>
              </div>
            </div>
              <div className="newItemImg">
                <div className="newItemImgContainer">
                  <div className="mainImg">
                    <h1>Main Image</h1>
                    <img className="mainImgProperty" 
                          src="https://resizing.flixster.com/1Rq3s2Ov9qcQAeDkDks5_nrphoE=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8205710_p_v13_ao.jpg" 
                          alt="" />
                  </div>

                  <div className="mainImg">
                    <h1>Title Image</h1>
                    <img src="https://resizing.flixster.com/1Rq3s2Ov9qcQAeDkDks5_nrphoE=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8205710_p_v13_ao.jpg" 
                          alt="" className="titleImgProperty" />
                  </div>
                  <div className="mainImg">
                    <h1>Small Image</h1>
                    <img src="https://resizing.flixster.com/1Rq3s2Ov9qcQAeDkDks5_nrphoE=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8205710_p_v13_ao.jpg" 
                          alt="" className="smallImgProperty" />
                  </div>
                  <div className="mainImg">
                    <h1>Trailer</h1>
                    <img src="https://resizing.flixster.com/1Rq3s2Ov9qcQAeDkDks5_nrphoE=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8205710_p_v13_ao.jpg" 
                          alt="" className="trailerProperty" />
                  </div>
                </div>
              </div>
          </div>
      </div>
  );
}
