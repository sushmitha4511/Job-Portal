import React from 'react';
import  './home.css'
import './style.css'
import myImage from './images/logo1.png';
import myImage1 from './images/logo2.jpg';
import myImage2 from './images/logo3.png';
import myImage3 from './images/logo4.jpeg';
import myImage4 from './images/logo5.png';
import myImage5 from './images/logo6.jpeg';
import myImage6 from './images/logo7.png';
import myImage7 from './images/logo9.jpeg';

 function Content(){
    return(
        <div>
        <section className='featured' id="companies">
        <h1 class="section-title">Featured Companies</h1>
        <p>We have many more companies which are featured with us</p>
    <div class="featured-wrapper">
        <div class="featured-card">
        <img src={myImage}  class="featured-image" alt="My Image" />
         <p>Apple</p>
        </div>
        <div class="featured-card">
        <img src={myImage1}  class="featured-image" alt="My Image1" />
        <p>Infosys</p>
        </div>
        <div class="featured-card">
        <img src={myImage2}  class="featured-image" alt="My Image2" />
            <p>Tesla</p>
            </div>
            <div class="featured-card">
            <img src={myImage3}  class="featured-image" alt="My Image3" />
                <p>Ford</p>
                </div>     
                     <div class="featured-card">
                     <img src={myImage4}  class="featured-image" alt="My Image4" />
                    <p>TCS</p>
                    </div>
                    <div class="featured-card">
                    <img src={myImage5}  class="featured-image" alt="My Image5" />
                        <p>Continental</p>
                        </div>
                        <div class="featured-card">
                        <img src={myImage6}  class="featured-image" alt="My Image6" />
                            <p>Google</p>
                            </div>
                            <div class="featured-card">
                            <img src={myImage7}  class="featured-image" alt="My Image7" />
                                <p>Instagram</p>
                                </div>
                            </div>
    </section>
        </div>
    );
 }
  export default Content