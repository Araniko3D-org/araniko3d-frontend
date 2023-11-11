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
    // You can perform further actions, e.g., sending the data to a server
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input {...register("email")} />
          <p>{formState.errors.email?.message}</p>
        </div>

        <div>
          <label>First Name:</label>
          <input {...register("firstName")} />
          <p>{formState.errors.firstName?.message}</p>
        </div>

        <div>
          <label>Last Name:</label>
          <input {...register("lastName")} />
          <p>{formState.errors.lastName?.message}</p>
        </div>

        <div>
          <label>Organization Name:</label>
          <input {...register("organization")} />
          <p>{formState.errors.organization?.message}</p>
        </div>

        <div>
          <label>Message:</label>
          <input {...register("message")} />
          <p>{formState.errors.message?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
