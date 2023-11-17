import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ContactUs.css";
import Footer from "./content/footer";

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
    <div className="bg-gradient">
      <div className="contact-us-container">
        <div className="contact-us-contents">
          <div className="contact-us-content">
            <h3 className="contact-us-header">Contact Us</h3>
            <p>34 Kelland Avenue, Hillside, VIC 3037, Australia</p>
            <p>+61(0) 37303 3330</p>
            <p>contact@proxmed.com.au</p>
          </div>

          <div className="contact-us-icons">
            <img
              src="facebook.svg"
              alt="facebook"
              className="contact-us-icon"
            />
            <img
              src="linkedin.svg"
              alt="linkedin"
              className="contact-us-icon"
            />
            <img src="twitter.svg" alt="twitter" className="contact-us-icon" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="contact-us-second-container">
        <div className="next-step-container">
          <h5>What will be the </h5>
          <h3>next step?</h3>
        </div>
        <div className="form-container">
          <div className="form-container-upper-div">
            <p className="form-container-upper-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid-container"
          >
            <div className="input-fields grid-item">
              <label>Email *</label>
              <input
                {...register("email")}
                className="form-input"
                placeholder="Enter Email"
              />
              <p className="error">{formState.errors.email?.message}</p>
            </div>

            <div className="input-fields grid-item">
              <label>First Name *</label>
              <input {...register("firstName")} className="form-input" />
              <p className="error">{formState.errors.firstName?.message}</p>
            </div>

            <div className="input-fields grid-item">
              <label>Last Name *</label>
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
              Send
            </button>
          </form>

          <div className="form-container-bottom-div">
            <p className="form-container-bottom-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;