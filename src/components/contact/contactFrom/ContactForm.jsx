import { useEffect, useState, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ServiceData from "../../connect/serviceData.json";
import Input from "../../connect/formFields/Input";
import DropDown from "../../connect/formFields/DropDown";
import Checkbox from "../../connect/formFields/Checkbox";
import TextArea from "../../connect/formFields/TextArea";
import UpdotLogo from "../../../assets/img/updot-big.svg";
import UpdotMagnet from "../../../assets/img/updot-magnet.svg";
import InputFile from "../../connect/formFields/InputFile";
import SearchField from "../../connect/formFields/SearchField";
import Modal from "../../ui/modal/Modal";
import { FiUpload } from "react-icons/fi";
import classes from "./ContactForm.module.scss";
import ContactContext from "../../../context/contactContext";

const ContactForm = () => {
  const [isStandby, setIsStandby] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attachments, setAttachments] = useState({});
  const formOuterRef = useRef(null);
  const submitBtnRef = useRef(null);
  const newsletterBtnRef = useRef(null);
  const [fileUploadFields, setFileUploadFields] = useState([]);
  const [expand, setExpand] = useState(false);
  const [query, setQuery] = useState("");
  // const [hCaptchaData, setHCaptchaData] = useState();

  const { formState, errorState, setFormState, handleSubmit } =
    useContext(ContactContext);
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );
  console.log(formState);

  const formSubmitHandler = async (formData) => {
    // if (!hCaptchaData) {
    //   return alert("Please verify captcha!!");
    // }
    // // submitBtnRef.current.classList.add(`${classes["animate-btn"]}`);
    // const form = new FormData();
    // Object.keys(attachments).forEach((k) => {
    //   form.append(k, attachments[k]);
    // });
    // for (var key in formData) {
    //   form.append(key, formData[key]);
    // }
    // form.append("h-captcha-token", hCaptchaData.token);
    // submitBtnRef.current.innerText = "Submitting...";
    // const response = await fetch(
    //   "https://updotweb-msr94.ondigitalocean.app/backend/api/data-submission/contact",
    //   {
    //     method: "POST",
    //     headers: {
    //       // "Content-Type": "multipart/form-data",
    //     },
    //     body: form,
    //   }
    // );
    // // const data = await response.json();
    // if (response.ok) {
    //   setSubmissionMessage(
    //     `Hey, ${formData.name}!, Thankyou for Submitting form`
    //   );
    // } else {
    //   setSubmissionMessage(`Error occured while submitting form!!`);
    // }
    // submitBtnRef.current.innerText = "Submit";
    // setIsModalOpen(true);
  };

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset({ something: "" });
  //   }
  //   let timeout,
  //     timerActive = false;
  //   const scrollHandler = (e) => {
  //     function onEntry(entry) {
  //       entry.forEach((change) => {
  //         if (change.isIntersecting) {
  //           if (!isStandby && !timerActive) {
  //             timerActive = true;
  //             timeout = setTimeout(() => {
  //               setIsStandby(true);
  //             }, 6000);
  //           }
  //         } else {
  //           clearTimeout(timeout);
  //           timerActive = false;
  //         }
  //       });
  //     }

  //     let options = {
  //       threshold: [0.3],
  //     };

  //     let observer = new IntersectionObserver(onEntry, options);

  //     let elements = formOuterRef.current;

  //     observer.observe(elements);
  //   };
  //   document.addEventListener("scroll", scrollHandler);

  //   return () => document.removeEventListener("scroll", scrollHandler);
  // }, [isSubmitSuccessful, isStandby, reset]);
  const onFirstChange = (event) => {
    if (!isFormTouched) {
      setIsFormTouched(true);
      setIsStandby(true);
    }
  };

  // const onNewsletterBtnClickHandler = (e) => {
  //   newsletterBtnRef.current.classList.add(`${classes["animate-btn-2"]}`);
  // };
  // const getGeoInfo = () => {
  //   axios
  //     .get("https://ipapi.co/json/")
  //     .then((response) => {
  //       let data = response.data;

  //       setFormState({
  //         ...formState,
  //         countryCode: data.country_calling_code.replace("+", ""),
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   getGeoInfo();
  // }, []);

  useEffect(() => {
    setFormState({ ...formState, attachments: attachments });
  }, [attachments]);

  const setAttechment = (fieldName, result) => {
    setAttachments((prevState) => {
      return { ...prevState, [fieldName]: result };
    });
  };
  useEffect(() => {
    // Attachment dimensions
    const arr = [];
    const itrCount = window.innerWidth > 800 ? 6 : 3;
    for (let i = 0; i < itrCount; i++) {
      arr.push(
        <InputFile
          key={i}
          name={`file${i + 1}`}
          height={window.innerWidth < 800 && "8rem"}
          width={window.innerWidth < 800 && "8rem"}
          setAttachment={setAttechment}
        />
      );
    }
    setFileUploadFields(arr);
  }, []);

  const handleVerificationSuccess = (token, ekey) => {
    setFormState({ ...formState, hCaptchaData: { token, ekey } });
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {submissionMessage}
      </Modal>
      <div
        ref={formOuterRef}
        className={`${classes["form-container"]} ${
          !isFormTouched ? classes["form-container-change"] : ""
        }`}
      >
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <div
            className={`${classes["form-field-container"]} ${classes["animate-field-1"]}`}
          >
            <div id="name" className={classes["form-field"]}>
              <Input
                type="text"
                placeholder="Name*"
                autoComplete="name"
                value={formState.name}
                onFirstChange={onFirstChange}
                left={window.innerWidth > 800 ? "1%" : "4%"}
                handleChange={(val) =>
                  setFormState({ ...formState, name: val })
                }
              />
              {errorState.name && (
                <p className={classes["input-error"]}>{errorState.name}</p>
              )}
            </div>
          </div>
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-2"]}`}
            >
              <div
                id="countryCode"
                className={classes["form-field-10"]}
                onClick={() => setExpand((prev) => !prev)}
              >
                <SearchField
                  expand={expand}
                  formState={formState}
                  setFormState={setFormState}
                  query={query}
                  setQuery={setQuery}
                />
                {errorState.countryCode && (
                  <p className={classes["input-error"]}>
                    {errorState.countryCode}
                  </p>
                )}
              </div>
              <div id="phoneNumber" className={classes["form-field-85"]}>
                <Input
                  type="tel"
                  placeholder="Phone Number*"
                  value={formState.phoneNumber}
                  handleChange={(val) =>
                    setFormState({ ...formState, phoneNumber: val })
                  }
                  left={window.innerWidth > 800 ? "1%" : "4%"}
                  autoComplete="tel-national"
                />
                {errorState.phoneNumber && (
                  <p className={classes["input-error"]}>
                    {errorState.phoneNumber}
                  </p>
                )}
              </div>
            </div>
          )}
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-3"]}`}
            >
              <div id="email" className={classes["form-field"]}>
                <Input
                  type="text"
                  placeholder="Email ID*"
                  autoComplete="email"
                  value={formState.email}
                  handleChange={(val) =>
                    setFormState({ ...formState, email: val })
                  }
                  left={window.innerWidth > 800 ? "1%" : "4%"}
                />
                {errorState.email && (
                  <p className={classes["input-error"]}>{errorState.email}</p>
                )}
              </div>
            </div>
          )}
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-4"]}`}
            >
              <div className={classes["form-field-10"]}>
                <DropDown
                  placeholder="Industry"
                  data={["IT", "Services"]}
                  handleChange={(val) =>
                    setFormState({ ...formState, industry: val })
                  }
                />
                {/* <p className={classes["input-error"]}></p> */}
              </div>
              <div className={classes["form-field-85"]}>
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={formState.companyName}
                  handleChange={(val) =>
                    setFormState({ ...formState, companyName: val })
                  }
                  left={window.innerWidth > 800 ? "1%" : "4%"}
                />
                {/* <p className={classes["input-error"]}></p> */}
              </div>
            </div>
          )}
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-5"]}`}
            >
              <div className={classes["form-field"]}>
                <Input
                  type="text"
                  placeholder="Website URL"
                  value={formState.websiteURL}
                  handleChange={(val) =>
                    setFormState({ ...formState, websiteURL: val })
                  }
                  left={window.innerWidth > 800 ? "1%" : "4%"}
                />
              </div>
            </div>
          )}
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-6"]}`}
            >
              <div className={classes["form-field"]}>
                <h3 className={classes.FormOptionHeading}>Services Required</h3>
                <Checkbox
                  name="servicesRequired"
                  size={window.innerWidth > 800 ? 3 : 1.2}
                  formState={formState}
                  setFormState={setFormState}
                />
              </div>
            </div>
          )}
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-7"]}`}
            >
              <div id="message" className={classes["form-field"]}>
                <TextArea
                  placeholder="Message*"
                  value={formState.message}
                  handleChange={(val) =>
                    setFormState({ ...formState, message: val })
                  }
                  height={window.innerWidth > 800 ? 15 : 11.5}
                  left="2%"
                />
                {errorState.message && (
                  <p className={classes["input-error"]}>{errorState.message}</p>
                )}
              </div>
            </div>
          )}

          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-8"]}`}
            >
              <div
                className={`${classes["form-field-row"]} ${classes["form-field-row-mobile"]}`}
              >
                <div className={classes["btn-container"]}>
                  <button
                    type="button"
                    className="btn"
                    onClick={(e) => {
                      setShowFileInput((prevState) => !prevState);
                    }}
                  >
                    <span>Attach Files</span>
                    <FiUpload size={18} className={classes["btn-icon"]} />
                  </button>
                </div>
                {showFileInput && (
                  <div
                    className={classes["file-input-container"]}
                    style={{
                      marginBottom: window.innerWidth < 800 ? "1rem" : "0rem",
                    }}
                  >
                    {fileUploadFields}
                  </div>
                )}
              </div>
            </div>
          )}
          {isFormTouched && (
            <div id="hCaptchaData" className={classes["h-captcha"]}>
              <HCaptcha
                sitekey="a8476602-b2d6-44ba-b8b8-5ae90461b4c3"
                theme={isLightThemeActive ? "light" : "dark"}
                onVerify={(token, ekey) =>
                  handleVerificationSuccess(token, ekey)
                }
              />
              {errorState.hCaptchaData && (
                <p className={classes["input-error"]}>
                  {errorState.hCaptchaData}
                </p>
              )}
            </div>
          )}

          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-9"]}`}
            >
              <div className={classes["form-field-row"]}>
                <button
                  ref={submitBtnRef}
                  className={`btn ${classes["btn-submit"]}`}
                  type="submit"
                >
                  Submit
                </button>
                <button
                  ref={newsletterBtnRef}
                  className={`btn ${classes["btn-newsletter"]}`}
                  type="submit"
                  // onClick={onNewsletterBtnClickHandler}
                >
                  Subscribe to newsletter
                </button>
              </div>
            </div>
          )}
        </form>
        {isFormTouched && (
          <div
            className={`${classes["logo-container"]} ${classes["animate-field-10"]}`}
          >
            <img className={classes["updot-img"]} src={UpdotLogo} alt="updot" />
            <img
              className={classes["updot-magnet-img"]}
              src={UpdotMagnet}
              alt="updot magnet"
            />
          </div>
        )}
        {!isFormTouched && (
          <p
            className={`${classes["standby-message"]} ${
              isStandby && !isFormTouched ? classes["standby-message-show"] : ""
            }`}
          >
            Ok, then let's start!
          </p>
        )}
      </div>
    </>
  );
};

export default ContactForm;
