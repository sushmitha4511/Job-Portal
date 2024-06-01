import React from 'react';
import  './home.css'
import './style.css'
import myImage8 from './images/blog1.jpg';
import myImage9 from './images/blog2.jpg';
import myImage10 from './images/blog3.jpg';
function Careeradvices(){
    return(
        <div>
<section class="blog" id="blog">
        <h1 class="section-title">Career Advices</h1>
        <p>Learn more career tips from company's recruiter</p>
        <div class="blog-wrapper">
        <div class="blog-card">
        <img src={myImage8}  class="blog-image" alt="My Image8" />
        <div class="blog-detail">
        <span>11 Apr 2022</span>
        <h4>How to enjoy your work along with your teamates</h4>
        <hr class="divider" />
        
        </div>
        </div>
        <div class="blog-card">
        <img src={myImage9}  class="blog-image" alt="My Image9" />
            <div class="blog-detail">
            <span>12 Apr 2023</span>
            <h4>Everything works on a trust and confidence</h4>
            <hr class="divider" />
            </div>
            </div>
            <div class="blog-card">
            <img src={myImage10}  class="blog-image" alt="My Image10" />
                <div class="blog-detail">
                <span>11 Apr 2024</span>
                <h4>Get successfull with your dreams and goals</h4>
                <hr class="divider" />
                </div>
                </div>
        </div>
        </section>
        </div>
    );
}
export default Careeradvices