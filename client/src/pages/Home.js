import React from 'react';

import FooterBar from './Footer.js';
import Content from './HomeContent.js';
import ImageSlider from './ImageSlider.js';

import './Home.css';

const home = () =>(

    <div className='mainPage'>  
        
        <ImageSlider/>
        
        <Content/>
        
        <FooterBar/>
    </div>
)

export default home;
