import React from 'react';
import Logo from '../Resources/logo.gif';
import {Link} from 'react-router-dom';
import 'react-bootstrap';

const Header = ()=>{    
    return(
<div  className="container-fluid">
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top" role="navigation" >
      <div className="container-fluid" >
         
          <Link className="navbar-brand" to={"/"} > <img src={Logo} alt="logo"  height="48px"/></Link>
          <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#a" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
    
            <div className="collapse navbar-collapse " id="a">
                <ul className="navbar-nav mx-auto text-center" >
                  
                <Link className="nav-link active rounded c1 c2" to={"/"} ><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                  <Link className="nav-link active rounded c1 c2" aria-current="page" to={"/card"}><i className="fa fa-shopping-basket" aria-hidden="true"></i> Shop Now</Link>
                  <Link className="nav-link active rounded c1 c2" aria-current="page" to={"/Blogs"}><i className="fa fa-newspaper-o" aria-hidden="true"></i> Blogs</Link>
                  <a className="nav-link active rounded c1 c2" aria-current="page" href=" #about"><i className="fa fa-id-card" aria-hidden="true"></i> About us</a>
                  <a className="nav-link active rounded c1 c2" aria-current="page" href=" #services"><i className="fa fa-list" aria-hidden="true"></i> Our Services</a>
                  <a className="nav-link active rounded c1 c2" aria-current="page" href=" #contact"><i className="fa fa-phone" aria-hidden="true"></i> Contact us</a>
              

                </ul> 
    </div>
    </div>
    </nav>
    </div>
    )
}
export default Header;