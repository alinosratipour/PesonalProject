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
import * as Yup from "yup";

// Load environment variables
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? "";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // Correctly type the form ref
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        if (form.current) {
          emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
              publicKey: PUBLIC_KEY,
            })
            .then(
              () => {
                setShowModal(true);
              },
              (error) => {
                console.log("FAILED...", error.text);
              }
            );
        }
      })
      .catch((err) => {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  const closeModal = () => {
    setShowModal(false);
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
          <div className="input-icons">
            <TextField
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              error={errors.name}
              value={values.name}
              inputBackgroundColor="green"
              inputSize="large"
              data-testid="phone-field"
              icon={<GoPersonFill />}
            />
          

         
            <TextField
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              error={errors.email}
              value={values.email}
              inputBackgroundColor="green"
              inputSize="large"
              data-testid="phone-field"
              icon={<MdEmail />}
            />
          
         
            <TextField
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleInputChange}
              error={errors.phone}
              value={values.phone}
              inputBackgroundColor="green"
              inputSize="large"
              data-testid="phone-field"
              icon={<Office />}
            />
    

        
            <TextAreaField
              name="message"
              placeholder="Enter your message..."
              onChange={handleTextAreaChange}
              inputBackgroundColor="green"
              error={errors.message}
              inputSize="large"
              rows={7}
              icon={<FaPen />}
            />
          </div>
          <p className="input-icons">
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
          <h2>Success!</h2>
          <p>Your message has been sent successfully.</p>
        </Modal>
      )}
    </section>
  );
};
export default Contact;
