import React from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import "./Testimonial.css";
const Testimonial = () => {
    return (
        <div id="testimonial" className="container-fluid mt-5">
            <div className="chose-head">
                <h3 className="chose1"> Our Traveller Say</h3>
                <h2 className="chose2"><span className="span-bg">What </span> Our Traveller Say About Us</h2>
            </div>
         <div className="row mt-5">
      <div className="col-md-3">
      <div className="card review-card h-100">
            <div className="card-content">
                <div className="card-body p-0">
                    <div className="profile mb-4 mt-3"> <img src="https://i.imgur.com/Ur43esv.jpg" alt=""/> </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> <i className="fas fa-quote-left q-bg"></i> Very Easy And Safe <i className="fas fa-quote-left fa-flip-horizontal q-bg"></i> </small> </p>
                    </div>
                    <div className="card-body company"><small className="intro">Sam Diago, Canada</small> </div>
                </div>
            </div>
        </div>
      </div>
      <div className="col-md-3">
      <div className="card review-card h-100">
            <div className="card-content">
                <div className="card-body p-0">
                    <div className="profile mb-4 mt-3"> <img src="https://i.imgur.com/8RKXAIV.jpg" alt=""/> </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> <i className="fas fa-quote-left q-bg"></i> Very Dynamic And Easy to Book With Professional Staff<i className="fas fa-quote-left fa-flip-horizontal q-bg"></i> </small> </p>
                    </div>
                    <div className="card-body company"><small className="intro">Sam Allison, Australia</small> </div>
                </div>
            </div>
        </div>
      </div>
      <div className="col-md-3">
      <div className="card review-card h-100">
            <div className="card-content">
                <div className="card-body p-0">
                    <div className="profile mb-4 mt-3"> <img src="https://i.ibb.co/8DzPVqb/r.png" alt=""/> </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> <i className="fas fa-quote-left q-bg"></i> I am pleased to say that booking with ROAM was pleasing<i className="fas fa-quote-left fa-flip-horizontal q-bg"></i> </small> </p>
                    </div>
                    <div className="card-body company"><small className="intro">Charles, South Africa</small> </div>
                </div>
            </div>
        </div>
      </div>
      <div className="col-md-3">
      <div className="card review-card h-100">
            <div className="card-content">
                <div className="card-body p-0">
                    <div className="profile mb-4 mt-3"> <img src="https://i.imgur.com/J6l19aF.jpg" alt=""/> </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> <i className="fas fa-quote-left q-bg"></i> Booking process was great<i className="fas fa-quote-left fa-flip-horizontal q-bg"></i> </small> </p>
                    </div>
                    <div className="card-body company"><small className="intro">Brenda, USA</small> </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
        </div>
    );
};

export default Testimonial;