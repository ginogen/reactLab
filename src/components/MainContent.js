import React from 'react';
import './App.css';
import Imgs from './ImgesGallery';
import Side from './SideContent';

function MainContent(){
    return(
        <div className="Main-card">
            <Imgs />
            <Side />
        </div>
    )
}

export default MainContent