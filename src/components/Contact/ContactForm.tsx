// components/contact/ContactForm.tsx
import React, {  RefObject } from "react";
import { GoPersonFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { PiBuildingOfficeFill as Office } from "react-icons/pi";
import { ImPhoneHangUp as Phone } from "react-icons/im";
import { FaPen } from "react-icons/fa";
import TextField from "../UILibrary/TextField/TextFiled";
import TextAreaField from "../UILibrary/TextArea/TextArea";
import CustomButton from "../UILibrary/Button/Button";
import "./ContactForm.scss";

interface ContactFormProps {
  values: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  errors: {
    [key: string]: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formRef: RefObject<HTMLFormElement>;
}

const ContactForm: React.FC<ContactFormProps> = ({
  values,
  errors,
  handleInputChange,
  handleTextAreaChange,
  formRef,
  onSubmit,
}) => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      id="contact"
      className="form"
      ref={formRef} // Use formRef in the form component
      onSubmit={onSubmit} // Added onSubmit to handle form submission
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
          icon={<Phone />}
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
          type="submit"
        >
          Send
        </CustomButton>
      </p>
      <div className="form-msg"> </div>
    </form>
  );
};

export default ContactForm;
