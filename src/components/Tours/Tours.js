import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Tours.css";
const Tours = () => {
    const [tours, setTours] = useState([])
//    https://animfahad32.github.io/fakeData/tour.json
    useEffect(()=>{
        fetch('https://gentle-fortress-22531.herokuapp.com/services')
        .then(response => response.json())
        .then(data => setTours(data))
    },[])
    return (
        <div className="mt-5" id="tours">
          <div className="chose-head">
                <h3 className="chose1"> Choose The Best Destination</h3>
                <h2 className="chose2"><span className="span-bg">Explore</span>  The World For Yourself</h2>
            </div>
            <div className="container-fluid mt-5">
            
            <div className="row row-cols-1 row-cols-md-5 g-2">
                {
                    tours.map(tour =>
                        <div key ={tour?._id} className="card-group">
                   


                        <div className="card  text-white inner-img">
                            <div className="inner">
                            <img className="card-img" src={tour?.img} alt="tour"/>
                            </div>
                            <div className="card-img-overlay d-flex flex-column">
                                <h5 className="card-title price">$ {tour?.price}</h5>
                                <h3 className="card-text font-weight-bold tex-dark"><span className="mr-auto tour-name">{tour?.name}</span></h3>
                                <div className="mt-auto"><h3>{tour?.dest}</h3></div>
                                <NavLink to={`/tour/${tour?._id}`}>
                                <button className="btn-style">Book Now!</button>
                                </NavLink>
                            </div>
                           
                        </div>


                        
                      </div>
                        )
                }
            </div>
            </div>
           
        </div>
    );
};

export default Tours;