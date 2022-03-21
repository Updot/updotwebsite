import React, { useState, useCallback } from "react";

const ContactContext = React.createContext();

const InitialData = {
  name: "",
  email: "",
  phoneNumber: "",
  countrCode: "",
  message: "",
  industry: "",
  companyName: "",
  websiteURL: "",
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
      errors.fName = "is required";
    }
    if (!formState.email) {
      errors.email = "is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "is invalid";
    }
    if (!formState.countryCode) {
      errors.countryCode = true;
    } else if (!formState.countryCode.replace(/[^\d]/g, "")) {
      errors.countryCode = true;
    }
    if (!formState.phoneNumber) {
      errors.phoneNumber = "is required";
    } else if (formState.phoneNumber.replace(/[^\d]/g, "").length < 10) {
      errors.phoneNumber = "is incomplete";
    }
    if (Object.keys(errors).length === 0) {
      console.log("Call API");
    } else {
      console.log("Show errors");
    }

    return errors;
  }, [formState]);

  const handleSubmit = () => {
    setErrorState(handleValidation());
  };

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
