import React from 'react'

 function About() {
  return (
    <div>
    <div className="text-secondary p-2 ">
      
        <div className="titleabout fw-bold text-center wow fadeInUp">
          <h2>
            About <b>Book Store  APP</b>
          </h2>
        </div>
        </div>
          <div className="about mx-auto wow fadeInUp">
            <div className="about-item">
              <h4 className="mx-3">Book store APP</h4>
              <p className="mx-auto pt-5">book store app is shopping app built mainly br React JS and other technologies </p>
            </div>
            <div className="about-item">
              <h4 className="mx-3">Technologies used</h4>
              <ul className="mx-4">
                <li>React JS</li>
                <li>React-Router-Dom</li>
                <li>CSS</li>
                <li>Bootstrap 4</li>
              </ul>
            </div>
            <div className="about-item">
              <h4 className="mx-3">Follow me on</h4>
              <section className="mx-auto" >
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
              </section>
            </div>

            <div className="about-item">
              <h4 className="mx-3">My portfolio</h4>
            </div>
          </div>
      </div>
  )
}
export default About