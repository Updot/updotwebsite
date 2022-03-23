import React, { useState, useCallback } from "react";
// import axios from "axios";

const ContactContext = React.createContext();

const InitialData = {
  name: "",
  email: "",
  phoneNumber: "",
  countryCode: "",
  message: "",
  industry: "",
  companyName: "",
  websiteURL: "",
  hCaptchaData: null,
  attachments: {},
  services: [
    {
      checked: false,
      label: "Web Development",
    },
    {
      checked: false,
      label: "App Development",
    },
    {
      checked: false,
      label: "Chatbot Development",
    },
    {
      checked: false,
      label: "Maintenance and Upgrade",
    },
    {
      checked: false,
      label: "UI & UX Design",
    },
    {
      checked: false,
      label: "DevOps & Cloud",
    },
    {
      checked: false,
      label: "Branding",
    },
    {
      checked: false,
      label: "Bussiness Analysis",
    },
    {
      checked: false,
      label: "SEO",
    },
    {
      checked: false,
      label: "Digital Marketing",
    },
  ],
};

const ContactProvider = (props) => {
  const { children } = props;
  const [formState, setFormState] = useState(InitialData);
  const [errorState, setErrorState] = useState({});

  const handleValidation = useCallback(() => {
    let errors = {};

    if (!formState.name.trim()) {
      errors.name = "Name* is required";
    }
    if (!formState.email) {
      errors.email = "Email* is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Email is invalid";
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
    if (Object.keys(errors).length === 0) {
      console.log("Call API");
    } else {
      document
        .getElementById(`${Object.keys(errors)[0]}`)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return errors;
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log("triggered");
      setErrorState(handleValidation());
      // axios
      //   .post(
      //     "https://updotweb-msr94.ondigitalocean.app/backend/api/data-submission/contact",
      //     {
      //       formState,
      //     }
      //   )
      //   .then((res) => console.log(res.json()));
      // // const data = await response.json();
      // if (response) {
      //   console.log(response);
      //   setFormState(InitialData);
      // } else {
      //   console.log("Failed");
      // }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(formState);
  return (
    <ContactContext.Provider
      value={{
        formState,
        errorState,
        setFormState,
        handleSubmit,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;

export { ContactProvider };
