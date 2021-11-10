import React from 'react';
import "./WhyChoseUs.css";
const WhyChoseUs = () => {
    return (
        <div id="whyChoseUs" className='mt-5'>
            <div className="chose-head">
                <h3 className="chose1">Why ROAM</h3>
                <h2 className="chose2"><span className="span-bg">Why</span>  You Are Travel With ROAM</h2>
            </div>
            <div className="card-group cardss mt-5">
            <div className="card">
          
                <div className="card-body">
                <img src="https://img.icons8.com/material-outlined/96/000000/worker-male.png" style={{width: '64px'}} className="mx-auto d-block"  alt="icon"/>
                <h5 className="card-title text-center">2000+ Our worldwide guide</h5>
                </div>

            </div>
            <div className="card">
               
                <div className="card-body">
                <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-hand-shake-woman-day-justicon-lineal-justicon.png" className="mx-auto d-block" alt="icon"/>
                <h5 className="card-title text-center">100% trusted travel agency</h5>
               
                </div>
            </div>
            <div className="card">
             
                <div className="card-body">
                <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-experience-training-and-coaching-wanicon-lineal-wanicon.png"className="mx-auto d-block"  alt="icon"/>
                <h5 className="card-title text-center">10+ year of travel experience</h5>
         
                </div>
            </div>
            <div className="card">
             
                <div className="card-body">
                <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-happy-friendship-wanicon-lineal-wanicon.png"className="mx-auto d-block"  alt="icon"/>
                <h5 className="card-title text-center">90% of our traveller happy</h5>
           
                </div>
            </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;