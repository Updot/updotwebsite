import React, { useState } from "react";

// ------------------------------------------------------------------CONTACT PAGE CONTEXT START------------------------------------------------------------------
const ContactContext = React.createContext();

const InitialDataContact = {
  name: "",
  emailId: "",
  phoneNumber: "",
  countryCode: "",
  message: "",
  industry: "",
  companyName: "",
  websiteURL: "",
  services: [],
  hCaptchaData: null,
};

const ContactProvider = (props) => {
  const { children } = props;
  const [formState, setFormState] = useState(InitialDataContact);
  const [attachments, setAttachments] = useState({});
  const [errorState, setErrorState] = useState({});
  const [loading, setLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);

  const apiCall = async () => {
    try {
      setLoading(true);
      const form = new FormData();
      Object.keys(attachments).forEach((k) => {
        form.append(k, attachments[k]);
      });
      for (var key in formState) {
        form.append(key, formState[key]);
      }
      form.append("h-captcha-token", formState.hCaptchaData.token);
      const response = await fetch(
        "https://updotweb-msr94.ondigitalocean.app/backend/api/data-submission/contact",
        {
          method: "POST",
          headers: {
            // "Content-Type": "multipart/form-data",
          },
          body: form,
        }
      );
      if (response.ok) {
        setLoading(false);
        setSubmissionMessage(
          `Hey, ${formState.name}!, Thankyou for Submitting form`
        );
      } else {
        setLoading(false);
        setSubmissionMessage(`Error occured while submitting form!!`);
      }
      setLoading(false);
      setIsModalOpen(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleValidation = () => {
    let errors = {};

    if (!formState.name.trim()) {
      errors.name = "Name* is required";
    }
    if (!formState.emailId) {
      errors.emailId = "Email* is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.emailId)) {
      errors.emailId = "Email is invalid";
    }
    if (!formState.countryCode) {
      errors.countryCode = "Phone Code* is invalid";
    } else if (!formState.countryCode.replace(/[^\d]/g, "")) {
      errors.countryCode = "Phone Code is invalid";
    }
    if (!formState.phoneNumber) {
      errors.phoneNumber = "Phone Number* is required";
    } else if (formState.phoneNumber.replace(/[^\d]/g, "").length < 10) {
      errors.phoneNumber = "Phone Number is incomplete";
    }
    if (!formState.message.trim()) {
      errors.message = "Message* is required";
    }
    if (!formState.hCaptchaData) {
      errors.hCaptchaData = "Please verify captcha!!";
    }

    // Validator Handlers
    if (Object.keys(errors).length === 0) {
      apiCall();
    } else {
      document
        .getElementById(`${Object.keys(errors)[0]}`)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return errors;
  };
  console.log(formState);
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setErrorState(handleValidation());
  };

  return (
    <ContactContext.Provider
      value={{
        formState,
        errorState,
        loading,
        setFormState,
        handleContactSubmit,
        attachments,
        setAttachments,
        submissionMessage,
        isModalOpen,
        setIsModalOpen,
        isFormTouched,
        setIsFormTouched,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

// ------------------------------------------------------------------CONTACT PAGE CONTEXT END------------------------------------------------------------------

// ------------------------------------------------------------------CAREER PAGE CONTEXT START------------------------------------------------------------------
const CareerContext = React.createContext();

const InitialDataCareer = {
  name: "",
  emailId: "",
  phoneNumber: "",
  countryCode: "",
  currentJob: null,
  currentSalary: null,
  expectedSalary: null,
  portfolioLink: null,
  source: null,
  position: null,
  preferredJoiningDate: null,
};

const CareerProvider = (props) => {
  const { children } = props;
  const [formState, setFormState] = useState(InitialDataCareer);
  const [attachments, setAttachments] = useState({});
  const [errorState, setErrorState] = useState({});
  const [loading, setLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiCall = async () => {
    try {
      setLoading(true);
      const form = new FormData();
      Object.keys(attachments).forEach((k) => {
        form.append(k, attachments[k]);
      });
      for (var key in formState) {
        form.append(key, formState[key]);
      }
      const response = await fetch(
        "https://updotweb-msr94.ondigitalocean.app/backend/api/data-submission/careers",
        {
          method: "POST",
          headers: {
            // "Content-Type": "multipart/form-data",
          },
          body: form,
        }
      );
      if (response.ok) {
        setLoading(false);
        setSubmissionMessage(
          `Hey, ${formState.name}!, Thankyou for submitting application form`
        );
        setFormState(InitialDataCareer);
      } else {
        setLoading(false);
        setSubmissionMessage(`Error occured while submitting form!!`);
      }
      setLoading(false);
      setIsModalOpen(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleValidation = () => {
    let errors = {};

    if (!formState.name.trim()) {
      errors.name = "Name* is required";
    }
    if (!formState.emailId) {
      errors.emailId = "Email* is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.emailId)) {
      errors.emailId = "Email is invalid";
    }
    if (!formState.countryCode) {
      errors.countryCode = "Phone Code* is invalid";
    } else if (!formState.countryCode.replace(/[^\d]/g, "")) {
      errors.countryCode = "Phone Code is invalid";
    }
    if (!formState.phoneNumber) {
      errors.phoneNumber = "Phone Number* is required";
    } else if (formState.phoneNumber.replace(/[^\d]/g, "").length < 10) {
      errors.phoneNumber = "Phone Number is incomplete";
    }
    if (!formState.currentJob) {
      errors.currentJob = "This field is required";
    }
    if (!formState.source) {
      errors.source = "This field is required";
    }
    if (!formState.position) {
      errors.position = "This field is required";
    }
    if (!formState.preferredJoiningDate) {
      errors.preferredJoiningDate = "This field is required";
    }

    // Validator Handlers
    if (Object.keys(errors).length === 0) {
      apiCall();
    } else {
      document
        .getElementById(`${Object.keys(errors)[0]}`)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return errors;
  };

  const handleCarrerSubmit = (e) => {
    e.preventDefault();
    setErrorState(handleValidation());
  };

  return (
    <CareerContext.Provider
      value={{
        formState,
        errorState,
        loading,
        setFormState,
        handleCarrerSubmit,
        attachments,
        setAttachments,
        submissionMessage,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </CareerContext.Provider>
  );
};

// ------------------------------------------------------------------CAREER PAGE CONTEXT END------------------------------------------------------------------
export { ContactContext, ContactProvider, CareerContext, CareerProvider };
