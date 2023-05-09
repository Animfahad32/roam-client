import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const Tour = () => {
  const { serviceId } = useParams();
  const { user } = useAuth();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://roam-server.onrender.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: `${user.displayName}`, email: `${user?.email}` },
  });

  const onSubmit = (data) => {
    axios
      .post("https://roam-server.onrender.com/myorders", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            `Hey There ${user?.displayName} Thanks for Booking`,
            "Booked Succesfully",
            "success"
          );
          reset();
        }
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <img src={data?.img} className="w-100" alt="" />
          </div>
          <div className="col-md-3">
            <h1>{data?.name}</h1>
            <h3>{data?.dest}</h3>
            <h5 className="fw-bold">
              $ <span className="span-bg">{data?.price}</span>{" "}
            </h5>
          </div>

          <div className="form-div mt-5 col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-div-input "
                {...register("name", { required: true, maxLength: 20 })}
                placeholder="Name"
              />
              <input className="form-div-input " {...register("email")} />

              <input
                className="form-div-input "
                {...register("dest")}
                placeholder="Destination"
              />
              <input
                className="form-div-input "
                {...register("address")}
                placeholder="Address"
              />
              <input className="form-btn" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
