// components/contact/Contact.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import Modal from "../UILibrary/Modal/Modal";
import validationSchema from "./validationSchema";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomButton from "../UILibrary/Button/Button";
import "./Contact.scss";

// Load environment variables
const EMAIL_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? "",
};

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        if (formRef.current) {
          emailjs
            .sendForm(
              EMAIL_CONFIG.SERVICE_ID,
              EMAIL_CONFIG.TEMPLATE_ID,
              formRef.current,
              {
                publicKey: EMAIL_CONFIG.PUBLIC_KEY,
              }
            )
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
          Send a message using
          <br /> the contact form{" "}
        </p>
        <div className="icons">
          <a className="icon" href="https://github.com/alinosratipour">
            <FaGithub />
          </a>

          <a
            className="icon"
            href="https://www.linkedin.com/in/ali-nosratipour-52baa120b"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="form-container">
        <ContactForm
          values={values}
          errors={errors}
          handleInputChange={handleInputChange}
          handleTextAreaChange={handleTextAreaChange}
          onSubmit={sendEmail}
          formRef={formRef}
        />
      </div>

      {showModal && (
        <Modal>
          <h2 className="message-Title">Success!</h2>
          <p className="success-Massage">
            Your message has been sent successfully.
          </p>
          <div className="button-Container">
            <CustomButton
              colorscheme="primary"
              size="md"
              type="button"
              onClick={closeModal}
            >
              Close
            </CustomButton>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Contact;
