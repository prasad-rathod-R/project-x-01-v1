import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './style.min.css'; // Ensure to adjust the path

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
    // Initialize carousel if necessary
    // $('.owl-carousel').owlCarousel(); // Uncomment if using jQuery

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div id="body" data-spy="scroll" data-target=".navbar" data-offset="100">
      <header id="header-section">
        <nav className="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
          <div className="container">
            <div className="navbar-brand-wrapper d-flex w-100">
              <img src="images/Group2.svg" alt="" />
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="mdi mdi-menu navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse navbar-menu-wrapper" id="navbarSupportedContent">
              <ul className="navbar-nav align-items-lg-center align-items-start ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#header-section">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features-section">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#digital-marketing-section">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feedback-section">Testimonials</a>
                </li>
                <li className="nav-item btn-contact-us pl-4 pl-lg-0">
                  <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Contact Us</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="banner">
        <div className="container">
          <h1 className="font-weight-semibold">Search engine optimisation &<br />Marketing.</h1>
          <h6 className="font-weight-normal text-muted pb-3">Simple is a simple template with a creative design that solves all your marketing and SEO queries.</h6>
          <div>
            <button className="btn btn-opacity-light mr-1">Get started</button>
            <button className="btn btn-opacity-success ml-1">Learn more</button>
          </div>
          <img src="images/Group171.svg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="content-wrapper">
        <div className="container">
          <section className="features-overview" id="features-section">
            <div className="content-header">
              <h2>How does it works</h2>
              <h6 className="section-subtitle text-muted">One theme that serves as an easy-to-use operational toolkit<br />that meets customer's needs.</h6>
            </div>
            <div className="d-md-flex justify-content-between">
              {/* Repeat feature items as necessary */}
              {['Speed Optimisation', 'SEO and Backlinks', 'Content Marketing'].map((feature, index) => (
                <div className="grid-margin d-flex justify-content-center" key={index}>
                  <div className="features-width">
                    <img src={`images/Group${index + 5}.svg`} alt="" className="img-icons" />
                    <h5 className="py-3">{feature}</h5>
                    <p className="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                    <a href="#"><p className="readmore-link">Readmore</p></a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Continue with the rest of your sections... */}

          <section className="customer-feedback" id="feedback-section">
            <div className="row">
              <div className="col-12 text-center pb-5">
                <h2>What our customers have to say</h2>
                <h6 className="section-subtitle text-muted m-0">Lorem ipsum dolor sit amet, tincidunt vestibulum.</h6>
              </div>
              <div className="owl-carousel owl-theme grid-margin">
                {/* Repeat customer cards as necessary */}
                {['face2.jpg', 'face3.jpg', 'face20.jpg'].map((img, index) => (
                  <div className="card customer-cards" key={index}>
                    <div className="card-body">
                      <div className="text-center">
                        <img src={`images/${img}`} width="89" height="89" alt="" className="img-customer" />
                        <p className="m-0 py-3 text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                        <div className="content-divider m-auto"></div>
                        <h6 className="card-title pt-3">Customer Name</h6>
                        <h6 className="customer-designation text-muted m-0">Marketing Manager</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Us Modal */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModalLabel">Contact Us</h4>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="Name">Name</label>
                      <input type="text" className="form-control" id="Name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Email">Email</label>
                      <input type="email" className="form-control" id="Email-1" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Message">Message</label>
                      <textarea className="form-control" id="Message" placeholder="Enter your Message"></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-success">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-top">
        <p className="text-center text-muted pt-4">Copyright © 2024 RentMaan All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
