import React from 'react';
import './Section.css';
import caro1 from './Assets/Caro1.webp'
import caro2 from './Assets/caro2.jpg'
function Home() {
  return (
    <section id="home" className="section">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={caro1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={caro2} className="d-block w-100" alt="..."/>
    </div>
   
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    </section>
  );
}

export default Home;
