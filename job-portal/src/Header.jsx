import  './home.css';
import './style.css';
function Header(){

    return(
<header>
<h1 class="header-title">FIND THE PERFECT <br /><span> JOB THAT YOU </span> <br /> DESERVE</h1>
<nav class="navbar">
        <h2 class="navbar-logo"><a href="#">JOBIFY</a></h2>
        <div class="navbar-menu">
        <a href="#company">Company</a>
        <a href="admin.html">Admin</a>
        <a href='student.html'>Student</a>
        <a href="#">About</a>
        </div>
        <div class="menu-toggle"> <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        </div>
   </nav>
   </header>
    );
}

export default Header