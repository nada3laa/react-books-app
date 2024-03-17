import React from 'react'
// import { Navbar, Nav,Container } from "react-bootstrap";
import { Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

 function LastNav() {
  return (
    <div>
   <Navbar  expand="lg" className='last-nav'>
  <Container>
  <Navbar.Brand href="#home">
  <Nav.Link className="navbar-brand text-danger logo h1 align-self-center" to={"/"}>
          ALEX<span className="text-black">BookShop</span>
        </Nav.Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  
    <Nav className="ml-auto nav-link">
      <Link to="/" className='navbar-links' >Home</Link>
      <Link to="authors" className='navbar-links' href="#auther">Authers</Link>
      <Link to= '/about'className='navbar-links' href="#aboutUs">About Us</Link>
      <Link to="/Contact" className='navbar-links' href="#contactUs">Contact Us</Link>
      <Link to="/Registar" className="navbar-links" href="#register">Register</Link>
      </Nav>
    
                <a className="nav-link" href="#">
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <i className="fa-solid fa-comment"></i> Send Feedback
                    </button>
                    
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            ...
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div></a>
             
      
  </Navbar.Collapse>
  </Container>
</Navbar>





    </div>
  )
}
export default LastNav