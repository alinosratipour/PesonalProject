import React from "react";
import { GoPersonFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { PiBuildingOfficeFill as Office } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Contact.scss";
import TextField from "../UILibrary/TextField/TextFiled";
import TextAreaField from "../UILibrary/TextField/TextArea/TextArea";
import CustomButton from "../UILibrary/TextField/Button/Button";

const Contact = () => {
  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    const { name, value } = event.currentTarget;
    //validateInput(name, value, values, setValues, setErrors);
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // Handle input change logic here
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
          <a className="icon" href="https://github.com/alinosratipour">
            {" "}
            <i>
              {" "}
              <FaGithub />
            </i>
          </a>

          <a className="icon" href="https://www.linkedin.com/in/ali-nosratipour-52baa120b">
            
            <i className="linkedIn">
              <FaLinkedin />
            </i>
          </a>
        </div>
      </div>
      <div className="form-container">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          id="contact"
          className="form"
        >
          <p className="input-icons">
            <TextField
              type="text"
              name="text"
              placeholder="Name"
              onChange={handleInputChange}
              // value={values.phone}
              //error={errors.phone}
              errorMessagePosition="above"
              inputBackgroundColor="green"
              inputSize="large"
              data-testid="phone-field"
              icon={<GoPersonFill />}
            />
          </p>

          <p className="input-icons">
            <TextField
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
            <TextField
              type="text"
              name="text"
              placeholder="Company"
              onChange={handleInputChange}
              // value={values.phone}
              //error={errors.phone}
              errorMessagePosition="above"
              inputBackgroundColor="green"
              inputSize="large"
              data-testid="phone-field"
              icon={<Office />}
            />
          </p>

          <p className=" input-icons ">
            <TextAreaField
              name="message"
              placeholder="Enter your message..."
              onChange={handleTextAreaChange}
              inputBackgroundColor="green"
              inputSize="large"
              rows={7}
              icon={<FaPen />}
            />
          </p>
          <p className=" input-icons ">
            {/* <button type="submit" name="submit" id="submitBtn">
              Send
            </button> */}
            <CustomButton
              colorscheme="primary"
              size="lg"
              iconPosition="left"
              onClick={() => alert("Button with icon clicked!")}
            >
              Send
            </CustomButton>
          </p>
          <div className="form-msg"> </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
