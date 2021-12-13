import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ServiceData from "../../connect/serviceData.json";
import Input from "../../connect/formFields/Input";
import DropDown from "../../connect/formFields/DropDown";
import Checkbox from "../../connect/formFields/Checkbox";
import TextArea from "../../connect/formFields/TextArea";
import UpdotLogo from "../../../assets/img/updot-big.svg";
import UpdotMagnet from "../../../assets/img/updot-magnet.svg";
import InputFile from "../../connect/formFields/InputFile";
import Modal from "../../ui/modal/Modal";

import { dialCodes } from "../../../util/InternationalDialCodes";
import classes from "./ContactForm.module.scss";

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
  const [hCaptchaData, setHCaptchaData] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );

  const formSubmitHandler = async (formData) => {
    if (!hCaptchaData) {
      return alert("Please verify captcha!!");
    }
    // submitBtnRef.current.classList.add(`${classes["animate-btn"]}`);
    const form = new FormData();
    Object.keys(attachments).forEach((key) => {
      form.append(key, attachments[key]);
    });
    for (var key in formData) {
      form.append(key, formData[key]);
    }
    form.append("h-captcha-token", hCaptchaData.token);
    const response = await fetch(
      "http://localhost:8080/api/data-submission/contact",
      {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
        },
        body: form,
      }
    );

    // const data = await response.json();
    if (response.ok) {
      setSubmissionMessage(
        `Hey, ${formData.name}!, Thankyou for Submitting form`
      );
    } else {
      setSubmissionMessage(`Error occured while submitting form!!`);
    }
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ something: "" });
    }
    let timeout,
      timerActive = false;
    const scrollHandler = (e) => {
      function onEntry(entry) {
        entry.forEach((change) => {
          if (change.isIntersecting) {
            if (!isStandby && !timerActive) {
              timerActive = true;
              timeout = setTimeout(() => {
                setIsStandby(true);
              }, 6000);
            }
          } else {
            clearTimeout(timeout);
            timerActive = false;
          }
        });
      }

      let options = {
        threshold: [0.3],
      };

      let observer = new IntersectionObserver(onEntry, options);

      let elements = formOuterRef.current;

      observer.observe(elements);
    };
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, [isSubmitSuccessful, isStandby, reset]);
  const onFirstChange = (event) => {
    if (!isFormTouched) {
      setIsFormTouched(true);
      setIsStandby(true);
    }
  };

  const onNewsletterBtnClickHandler = (e) => {
    newsletterBtnRef.current.classList.add(`${classes["animate-btn-2"]}`);
  };
  const setAttechment = (fieldName, result) => {
    setAttachments((prevState) => {
      return { ...prevState, [fieldName]: result };
    });
  };
  useEffect(() => {
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
    setHCaptchaData({ token, ekey });
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
        <form
          className={classes.form}
          onSubmit={handleSubmit(formSubmitHandler)}
        >
          <div
            className={`${classes["form-field-container"]} ${classes["animate-field-1"]}`}
          >
            <div className={classes["form-field"]}>
              <Input
                type="text"
                placeholder="Name*"
                register={register}
                fieldName="name"
                error={errors}
                required={true}
                onFirstChange={onFirstChange}
                left={window.innerWidth > 800 ? "1%" : "4%"}
              />
              <p className={classes["input-error"]}>
                {errors.name?.type === "required" && "*Name is required."}
              </p>
            </div>
          </div>
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-2"]}`}
            >
              <div className={classes["form-field-10"]}>
                <DropDown
                  placeholder="Code*"
                  register={register}
                  fieldName="code"
                  setValue={setValue}
                  data={dialCodes}
                  required={true}
                />
                <p className={classes["input-error"]}>
                  {errors.code?.type === "required" && "*Code is required."}
                </p>
              </div>
              <div className={classes["form-field-85"]}>
                <Input
                  type="tel"
                  placeholder="Phone Number*"
                  register={register}
                  fieldName="phoneNumber"
                  required={true}
                  left={window.innerWidth > 800 ? "1%" : "4%"}
                />
                <p className={classes["input-error"]}>
                  {errors.phoneNumber?.type === "required" &&
                    "*Phone Number is required."}
                </p>
              </div>
            </div>
          )}
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-3"]}`}
            >
              <div className={classes["form-field"]}>
                <Input
                  type="text"
                  placeholder="Email ID*"
                  register={register}
                  fieldName="emailId"
                  required={true}
                  left={window.innerWidth > 800 ? "1%" : "4%"}
                />
                <p className={classes["input-error"]}>
                  {errors.emailId?.type === "required" &&
                    "*Email ID is required."}
                </p>
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
                  register={register}
                  fieldName="industry"
                  setValue={setValue}
                  data={["IT", "Services"]}
                  required={false}
                />
                <p className={classes["input-error"]}></p>
              </div>
              <div className={classes["form-field-85"]}>
                <Input
                  type="text"
                  placeholder="Company Name"
                  register={register}
                  fieldName="companyName"
                  required={false}
                  left={window.innerWidth > 800 ? "1%" : "4%"}
                />
                <p className={classes["input-error"]}></p>
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
                  register={register}
                  fieldName="websiteURL"
                  required={false}
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
                  size={window.innerWidth > 800 ? 3.4 : 1.2}
                  data={ServiceData}
                  register={register}
                />
              </div>
            </div>
          )}
          {isFormTouched && (
            <div
              className={`${classes["form-field-container"]} ${classes["animate-field-7"]}`}
            >
              <div className={classes["form-field"]}>
                <TextArea
                  placeholder="Message*"
                  register={register}
                  fieldName="message"
                  height={window.innerWidth > 800 ? 15 : 11.5}
                  left="2%"
                />
                <p className={classes["input-error"]}>
                  {errors.message?.type === "required" &&
                    "*Message is required."}
                </p>
              </div>
            </div>
          )}

          {isFormTouched && (
            <div
              className={`${`${classes["form-field-container"]} ${classes["animate-field-8"]}`}`}
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
                      e.target.classList.toggle(
                        `${classes["hide-border-bottom"]}`
                      );
                    }}
                  >
                    Attach Files
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
            <div className={classes["h-captcha"]}>
              <HCaptcha
                sitekey="a8476602-b2d6-44ba-b8b8-5ae90461b4c3"
                theme={isLightThemeActive ? "light" : "dark"}
                onVerify={(token, ekey) =>
                  handleVerificationSuccess(token, ekey)
                }
              />
            </div>
          )}

          {isFormTouched && (
            <div
              className={`${`${classes["form-field-container"]} ${classes["animate-field-9"]}`}`}
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
