import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ContactUs.css";

// Define Yup schema for validation
const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  organization: yup.string().required("Organization name is required"),
  message: yup.string().required("Message is required"),
});

const ContactUs = () => {
  const { handleSubmit, control, formState, register } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid-container 
"
      >
        <div className="input-fields grid-item">
          <label>Email:</label>
          <input {...register("email")} className="form-input" />
          <p className="error">{formState.errors.email?.message}</p>
        </div>

        <div className="input-fields grid-item">
          <label>First Name:</label>
          <input {...register("firstName")} className="form-input" />
          <p className="error">{formState.errors.firstName?.message}</p>
        </div>

        <div className="input-fields grid-item">
          <label>Last Name:</label>
          <input {...register("lastName")} className="form-input" />
          <p className="error">{formState.errors.lastName?.message}</p>
        </div>

        <div className="input-fields grid-item">
          <label>Organization Name:</label>
          <input {...register("organization")} className="form-input" />
          <p className="error">{formState.errors.organization?.message}</p>
        </div>

        <div className="input-fields grid-item">
          <label>Message:</label>
          <input {...register("message")} className="form-input" />
          <p className="error">{formState.errors.message?.message}</p>
        </div>

        <button type="submit" className="grid-item submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
