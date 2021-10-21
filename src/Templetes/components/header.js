import React from 'react';
import Logo from '../pages/Resources/logo.gif';
import {Link} from 'react-router-dom';
import {Navbar,  Nav} from 'react-bootstrap';

const Header = ()=>{    
    return(
<header>
      <Navbar className="navbar navbar-dark bg-dark" expand="lg"  role="navigation" style={{height:"70px",backgroundColor:"black"}} >
      <div className="container-fluid text-center" >
          <Link className="navbar-brand" to={"/"} > 
          <img src={Logo} alt="logo"  height="48px"/></Link>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav mx-auto text-center" >
                <a className="nav-link active rounded text-light c1 c2" href="/"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
                  <Link className=" nav-link active rounded text-light c1 c2"  to={"/card"}><i className="fa fa-shopping-basket" aria-hidden="true"></i> Shop Now</Link>
                  <Link className="nav-link active rounded text-light c1 c2"  to={"/Blogs"}><i className="fa fa-newspaper-o" aria-hidden="true"></i> Blogs</Link>
                  <Nav.Link className="nav-link active rounded  text-light c1 c2"  href=" /#about"><i className="fa fa-id-card" aria-hidden="true"></i> About us</Nav.Link>
                  <Nav.Link className="nav-link active rounded text-light c1 c2"  href=" /#services"><i className="fa fa-list" aria-hidden="true"></i> Our Services</Nav.Link>
                  <Nav.Link className="nav-link active rounded text-light c1 c2"  href="#contact"><i className="fa fa-phone" aria-hidden="true"></i> Contact us</Nav.Link>
                </ul>
                </Navbar.Collapse>
    </div>
    </Navbar>
    </header>
    )
}
export default Header;