import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Middle from './Middle.jsx'
import Testimonial from './Testimonial.jsx';
import Careeradvices from './Careeradvices.jsx';
const App = () =>  { 
return(
  <div className='App'>
  <Header></Header>
  <Middle></Middle>
  <Testimonial></Testimonial>
  <Careeradvices></Careeradvices>
  <Footer></Footer>
  </div>
  

);
 
}

export default App
