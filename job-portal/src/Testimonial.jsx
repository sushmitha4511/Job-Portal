import React from 'react';
import  './home.css'
import './style.css'
import myImage11 from './images/testimoni1.jpeg';
import myImage12 from './images/testimoni5.jpeg';
import myImage13 from './images/testimoni3.jpeg';
function Testimonial(){
    return(
        <div>
<section class="testimoni" id="testimoni">
        <h1 class="section-title">Testimonial</h1>
        <p>Lets know about our feedback from our clients</p>
        <div class="testimoni1">
          <div class="testimonicaption">
          <i class="fas fa-quote-left"></i>
        <h3>Working with JOBIFY <br></br>has been a wonderful experience.</h3>
        <div class="testimoni-pic">
        <img src={myImage11} class="testimonipic" alt='MyImage11' />
        <p>Lily</p>
        <span>Business Development</span>
        </div>
          </div>
          <div class="testimonicaption">
          <i class="fas fa-quote-left"></i>
        <h3>It was Wonderful experience while<br></br>  working with JOBIFY. </h3>
        <div class="testimoni-pic">
        <img src={myImage12} class="testimonipic" alt='MyImage12' />
        <p>Christy Smith</p>
        <span>Software Development</span>
        </div>
          </div>
          <div class="testimonicaption">
          <i class="fas fa-quote-left"></i>
        <h3>It was Wonderful experience while<br></br>  working with JOBIFY. </h3>
        <br></br>
        <br></br>
        <div class="testimoni-pic">
        <img src={myImage13} class="testimonipic" alt='MyImage13' />
        <br></br><br></br>
        <p>Sheela</p>
        <span>Business Management</span>
        </div>
          </div>
          
          </div>
        </section>
    </div>
    )
}
export default Testimonial