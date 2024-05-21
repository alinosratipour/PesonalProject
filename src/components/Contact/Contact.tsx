import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GoPersonFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { PiBuildingOfficeFill as Office } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Contact.scss";
import TextField from "../UILibrary/TextField/TextFiled";
import TextAreaField from "../UILibrary/TextArea/TextArea";
import CustomButton from "../UILibrary/Button/Button";
import Modal from "../UILibrary/Modal/Modal";

// Load environment variables
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? "";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
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

  // Correctly type the form ref
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setShowModal(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  const closeModal = () => {
    setShowModal(false); // Function to close the modal
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

          <a
            className="icon"
            href="https://www.linkedin.com/in/ali-nosratipour-52baa120b"
          >
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
          ref={form}
          onSubmit={sendEmail} // Added onSubmit to handle form submission
        >
          <p className="input-icons">
            <TextField
              type="text"
              name="name"
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
            <CustomButton
              colorscheme="primary"
              size="lg"
              iconPosition="left"
              type="submit" // Changed button to submit type
            >
              Send
            </CustomButton>
          </p>
          <div className="form-msg"> </div>
        </form>
      </div>
      {showModal && (
        <Modal onClose={closeModal}>
          {" "}
          {/* Render the modal conditionally */}
          <h2>Success!</h2>
          <p>Your message has been sent successfully.</p>
        </Modal>
      )}
    </section>
  );
};
export default Contact;
