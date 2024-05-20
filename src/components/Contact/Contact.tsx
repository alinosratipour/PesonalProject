import React from "react";
import { GoPersonFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import "./Contact.scss";
import TextField from "../UILibrary/TextField/TextFiled";

const Contact = () => {
  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    const { name, value } = event.currentTarget;
    //validateInput(name, value, values, setValues, setErrors);
  };

  return (
    <section className="contact">
      <div className="details">
        <h2 className="head-contact">Contact</h2>
        <h3 className="phone">07367939332</h3>
        <h4 className="or">Or</h4>
        <p>
          Send a Message using
          <br /> the contact form{" "}
        </p>
        <div className="icons">
          <a className="section2" href="https://github.com/alinosratipour">
            {" "}
            <i className="fab fa-github fa-2x"></i>
          </a>

          <a href="https://www.linkedin.com/in/ali-nosratipour-52baa120b">
            {" "}
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="form-container">
        <form name="contact" method="POST" data-netlify="true" id="contact">
          <p className="input-icons">
            <TextField
              //label="Phone Number"
              type="text"
              name="text"
              placeholder="e.g. 1 234 567 890"
              onChange={handleInputChange}
              // value={values.phone}
              //error={errors.phone}
              errorMessagePosition="above"
              inputBackgroundColor="green"
              inputSize="large"
              data-testid="phone-field"
              icon={<GoPersonFill />}
            />
            <i className="fa fa-user icon"></i>
          </p>

          <p className="input-icons">
            <TextField
              //label="Phone Number"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              // value={values.phone}
              //error={errors.phone}
              errorMessagePosition="above"
              inputBackgroundColor="green"
              inputSize="large"
              data-testid="phone-field"
              icon={<MdEmail />}
            />
          </p>
          <p className="input-icons">
            <input
              type="text"
              id="user-company"
              name="company"
              className="input-txt"
              placeholder="Company Name"
            />

            <i className="fas fa-building icon"></i>
          </p>

          <p className=" input-icons ">
            <textarea
              name="msg"
              className="input-txt2"
              id="user-msg"
              rows="5"
              required
              placeholder="Message"
            ></textarea>
            <i className="fas fa-pen icon"></i>
          </p>
          <p className=" input-icons ">
            <button type="submit" name="submit" id="submitBtn">
              Send
            </button>
          </p>
          <div className="form-msg"> </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
