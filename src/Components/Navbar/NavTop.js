import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div>
           {/* <!-- start nav1 section -->     */}
      <nav className="navbar navbar-expand-lg  nav-edit ">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid mt-1">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
      
          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse nav2-edit" id="navbarRightAlignExample">
            {/* <!-- start right icons --> */}
            <div className="icons mx-3">
                <i className="fa-brands fa-facebook  icon-edit" style={{color: "#000000;"}}></i>
                <i className="fa-brands fa-twitter  icon-edit" style={{color: "#000000;"}}></i>
                <i className="fa-brands fa-whatsapp  icon-edit" style={{color: "#000000;"}}></i>
                <i className="fa-brands fa-youtube icon-edit" style={{color: "#000000;"}}></i>
                <i className="fa-brands fa-instagram icon-edit" style={{color: "#000000;"}}></i>
            </div>
            
            {/* <!-- end right icons --> */}

            {/* <!-- start center rext --> */}
                    <div className="text1 m-auto m-5">
                        <i className="fa fa-envelope mx-2" />
                        <a className="navbar-sm-brand text-light text-decoration-none mr-3" href="mailto:info@company.com">info@company.com</a>
                        <i className="fa fa-phone mx-2" />
                        <a className="navbar-sm-brand text-light text-decoration-none" href="tel:">123-456-789</a>
                    </div>
            {/* LOGIN */}

            <Link to="/Login" className='login-item mr-5'>
            <i className="fa-solid fa-user mr-2"></i>
            Login

            </Link>

            
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- end nav1 section --> */}
    </div>
  )
}
