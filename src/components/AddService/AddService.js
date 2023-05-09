import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import "./AddService.css";

const AddService = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://roam-server.onrender.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            `Hey There ${user?.displayName} Thanks for adding a tour destination`,
            "Added Successfully",
            "success"
          );
          reset();
        }
      });
  };
  return (
    <div className="container text-center mt-5">
      <div className="chose-head ">
        <h3 className="chose1"> Help Us!</h3>
        <h2 className="chose2">
          <span className="span-bg">Add</span> A Tour Destination
        </h2>
      </div>
      <div className="form-div mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-div-input "
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <input
            className="form-div-input "
            {...register("dest")}
            placeholder="Destination"
          />
          <input
            className="form-div-input "
            {...register("img")}
            placeholder="Image Url"
          />
          <input
            className="form-div-input "
            type="number"
            {...register("price")}
            placeholder="Estd. Price"
          />
          <input className="form-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
