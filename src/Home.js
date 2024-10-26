import React from "react";
import "./Section.css";
import './style.min.css'; // Ensure to adjust the path

function Home() {
  return (
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
  );
}

export default Home;
