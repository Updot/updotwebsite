import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import ServiceData from "../../connect/serviceData.json";
import Input from "../../connect/formFields/Input";
import DropDown from "../../connect/formFields/DropDown";
import Checkbox from "../../connect/formFields/Checkbox";
import TextArea from "../../connect/formFields/TextArea";
import UpdotLogo from "../../../assets/img/updot-big.svg";
import UpdotMagnet from "../../../assets/img/updot-magnet.svg";

import classes from "./ContactForm.module.css";
import InputFile from "../../connect/formFields/InputFile";
const ContactForm = () => {
  const [isStandby, setIsStandby] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const formOuterRef = useRef(null);
  const submitBtnRef = useRef(null);
  const newsletterBtnRef = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();
  const [fileUploadFields, setFileUploadFields] = useState([]);

  const formSubmitHandler = (formData) => {
    alert(`Hey, ${formData.name}!, Thankyou for Submitting form`);
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
  const onSubmitBtnClickHandler = (e) => {
    submitBtnRef.current.classList.add(`${classes["animate-btn"]}`);
  };
  const onNewsletterBtnClickHandler = (e) => {
    newsletterBtnRef.current.classList.add(`${classes["animate-btn-2"]}`);
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
        />
      );
    }
    setFileUploadFields(arr);
  }, []);
  return (
    <div
      ref={formOuterRef}
      className={`${classes["form-container"]} ${
        isFormTouched ? "" : classes["form-container-change"]
      }`}
    >
      <form className={classes.form} onSubmit={handleSubmit(formSubmitHandler)}>
        <div className={`${classes["form-field"]} ${classes["form-field-1"]}`}>
          <div className={classes["field-container"]}>
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
            className={`${classes["form-field"]} ${classes["form-field-2"]} ${classes["animate-field-1"]}`}
          >
            <div className={classes["field-container"]}>
              <DropDown
                placeholder="Code*"
                register={register}
                fieldName="code"
                setValue={setValue}
                data={["+91", "+91", "+91", "+91", "+91"]}
                required={true}
              />
              <p className={classes["input-error"]}>
                {errors.code?.type === "required" && "*Code is required."}
              </p>
            </div>
            <div className={classes["field-container"]}>
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
            className={`${classes["form-field"]} ${classes["form-field-1"]} ${classes["animate-field-2"]}`}
          >
            <div className={classes["field-container"]}>
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
            className={`${classes["form-field"]} ${
              window.innerWidth > 800
                ? classes["form-field-2"]
                : classes["form-field-9"]
            } ${classes["animate-field-3"]}`}
          >
            <div>
              <DropDown
                placeholder="Industry"
                register={register}
                fieldName="Industry"
                setValue={setValue}
                data={["IT", "Services"]}
                required={false}
              />
              <p className={classes["input-error"]}></p>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Company Name"
                register={register}
                fieldName="CompanyName"
                required={false}
                left={window.innerWidth > 800 ? "1%" : "4%"}
              />
              <p className={classes["input-error"]}></p>
            </div>
          </div>
        )}
        {isFormTouched && (
          <div
            className={`${classes["form-field"]} ${classes["form-field-1"]} ${classes["animate-field-4"]}`}
          >
            <Input
              type="url"
              placeholder="Website URL"
              register={register}
              fieldName="WebsiteURL"
              required={false}
              left={window.innerWidth > 800 ? "1%" : "4%"}
            />
          </div>
        )}
        {isFormTouched && (
          <div
            className={`${classes["form-field"]} ${classes["form-field-4"]} ${classes["animate-field-5"]}`}
          >
            <h3 className={classes.FormOptionHeading}>Services Required</h3>
            <Checkbox
              name="ServicesRequired"
              size={window.innerWidth > 800 ? 3.7 : 1.2}
              data={ServiceData}
              register={register}
            />
          </div>
        )}
        {isFormTouched && (
          <div
            className={`${classes["form-field"]} ${classes["form-field-1"]} ${classes["message-field"]} ${classes["animate-field-6"]}`}
          >
            <div className={classes["field-container"]}>
              <TextArea
                placeholder="Message*"
                register={register}
                fieldName="message"
                height={window.innerWidth > 800 ? 15 : 11.5}
              />
              <p className={classes["input-error"]}>
                {errors.message?.type === "required" && "*Message is required."}
              </p>
            </div>
          </div>
        )}
        {isFormTouched && (
          <div
            className={`${classes["form-field"]} ${classes["form-field-1"]} ${classes["animate-field-4"]} ${classes["file-container"]}`}
          >
            <div className={classes["btn-container"]}>
              <button
                className="btn"
                onClick={(e) => {
                  setShowFileInput((prevState) => !prevState);
                  e.target.classList.toggle(`${classes["hide-border-bottom"]}`);
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
        )}
        {isFormTouched && (
          <div
            className={`${classes["form-field"]} ${classes["form-field-6"]} ${classes["animate-field-7"]}`}
          >
            <button
              ref={submitBtnRef}
              className={`btn ${classes["btn-submit"]}`}
              type="submit"
              onClick={onSubmitBtnClickHandler}
            >
              Submit
            </button>
            <button
              ref={newsletterBtnRef}
              className={`btn ${classes["btn-newsletter"]}`}
              type="submit"
              onClick={onNewsletterBtnClickHandler}
            >
              <div className={`${classes["btn-newsletter-1"]} inner-btn`}>
                <span>S</span>
              </div>
              <div className={`${classes["btn-newsletter-2"]} inner-btn`}>
                <span>u</span>
              </div>
              <div className={`${classes["btn-newsletter-3"]} inner-btn`}>
                <span>b</span>
              </div>
              <div className={`${classes["btn-newsletter-4"]} inner-btn`}>
                <span>s</span>
              </div>
              <div className={`${classes["btn-newsletter-5"]} inner-btn`}>
                <span>c</span>
              </div>
              <div className={`${classes["btn-newsletter-6"]} inner-btn`}>
                <span>r</span>
              </div>
              <div className={`${classes["btn-newsletter-7"]} inner-btn`}>
                <span>i</span>
              </div>
              <div className={`${classes["btn-newsletter-8"]} inner-btn`}>
                <span>b</span>
              </div>
              <div className={`${classes["btn-newsletter-9"]} inner-btn`}>
                <span>e</span>
              </div>
              <div className={`${classes["btn-newsletter-10"]} inner-btn`}>
                <span> t</span>
              </div>
              <div className={`${classes["btn-newsletter-11"]} inner-btn`}>
                <span>o </span>
              </div>
              <div className={`${classes["btn-newsletter-12"]} inner-btn`}>
                <span>N</span>
              </div>
              <div className={`${classes["btn-newsletter-13"]} inner-btn`}>
                <span>e</span>
              </div>
              <div className={`${classes["btn-newsletter-14"]} inner-btn`}>
                <span>w</span>
              </div>
              <div className={`${classes["btn-newsletter-15"]} inner-btn`}>
                <span>s</span>
              </div>
              <div className={`${classes["btn-newsletter-16"]} inner-btn`}>
                <span>l</span>
              </div>
              <div className={`${classes["btn-newsletter-17"]} inner-btn`}>
                <span>e</span>
              </div>
              <div className={`${classes["btn-newsletter-18"]} inner-btn`}>
                <span>t</span>
              </div>
              <div className={`${classes["btn-newsletter-19"]} inner-btn`}>
                <span>t</span>
              </div>
              <div className={`${classes["btn-newsletter-20"]} inner-btn`}>
                <span>e</span>
              </div>
              <div className={`${classes["btn-newsletter-21"]} inner-btn`}>
                <span>r</span>
              </div>
            </button>
          </div>
        )}
      </form>
      {isFormTouched && (
        <div
          className={`${classes["logo-container"]} ${classes["animate-field-8"]}`}
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
  );
};

export default ContactForm;
