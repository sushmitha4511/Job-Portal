import React from 'react';
import Student from './Student';
function Navbar() {
    return(
        <nav class="navbar">
        <h2 class="navbar-logo"><a href="#">JOBIFY</a></h2>
        <div class="navbar-menu">
        <a href="#company">Company</a>
        <a href="#admin">Admin</a>
        <a href='#Student'>Student</a>
        <a href="#">About</a>
        </div>
        <div class="menu-toggle"> <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        </div>
   </nav>
    );
}
export default Navbar;