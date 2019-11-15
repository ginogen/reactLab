import React, {useState} from 'react';
import './App.css';

function Payment(){
    return(
        <div className="small-5 columns end">
    <div className="callout margin-top50">
      <label>NAME
        <input type="text" />
      </label>
      <label>NUMBER
        <input type="text" maxLength="16" />
      </label>
      <div className="row">
        <label className="column">EXPIRATION DATE</label>
        <div className="small-4 columns">
          <input type="text" maxLength="2"  />
        </div>
        <div className="small-4 columns end">
          <input type="text" maxLength="2" />
        </div>
      </div>
      <div className="row">
        <div className="small-4 column">
          <label>CCV
            <input type="text" maxLength="3"  />
          </label>
        </div>
      </div>
    </div>
  </div>

      
    )
}

export default Payment