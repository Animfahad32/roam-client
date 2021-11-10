import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {

    const [myOrders, setMyorders ] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        fetch('https://gentle-fortress-22531.herokuapp.com/myorders')
        .then(response => response.json())
        .then(data => setMyorders(data))
    },[])

    const exactItems = myOrders.filter(td=> td.email===user?.email)
    console.log(exactItems)

  

    const handleConfirm = (id) => {
        swal({
            title: "Are you sure you want to cancel?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const handleDelete = (id) => {
                    const url = `https://gentle-fortress-22531.herokuapp.com/myorders/${id}`
                    fetch(url, { 
                        method: 'DELETE'
                    })
                    .then(res=>res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = myOrders.filter(myOrder => myOrder._id !==id )
                        setMyorders(remaining)
            
                      
                     
                    })
                }

                handleDelete(id)
                swal("You canceled the tour", {
                icon: "success",
              });
           
            }  else{
                swal("Awesome! Have a great tour");
            }
          
          });
    }

    
    return (
        <div className="mt-5">
             <div className="chose-head">
                <h3 className="chose1"> Your Selected Plans</h3>
                <h2 className="chose2"><span className="span-bg">Manage</span>  Your Destination Plans</h2>
                
            </div>

            <div className="container-fluid mt-5">
           <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-style">
                                <tr>
                                <th scope="col" className="text-center">ID</th>
                                <th scope="col" className="text-center">Name</th>
                                <th scope="col" className="text-center">Email</th>
                                <th scope="col" className="text-center">Destination</th>
                                <th scope="col" className="text-center">Address</th>
                                <th scope="col" className="text-center">Cancer Your Tour</th>
                                </tr>
                            </thead>
                            <tbody
                  
                    className="tbody-style"
                    >
                            {
                exactItems.map(exactItem =>
                 
                                <tr
                                key = {exactItem?._id}>
                                <th scope="row" className="text-center">{exactItem?._id}</th>
                                <td className="text-center">{exactItem?.name}</td>
                                <td className="text-center">{exactItem?.email}</td>
                                <td className="text-center">{exactItem?.dest}</td>
                                <td >{exactItem?.address}</td>
                                <td className="text-center"> <button onClick= {()=> handleConfirm(exactItem?._id)} className="btn btn-danger">Cancel</button> </td>
                               
                                
                                </tr>
                                
                           
                )}
                </tbody>
                            </table>
                    </div>
           </div>
        </div>
    );
};

export default MyOrders;