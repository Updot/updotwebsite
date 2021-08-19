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
const ContactForm = () => {
  const [isStandby, setIsStandby] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const formOuterRef = useRef(null);
  const submitBtnRef = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const formSubmitHandler = (formData) => {
    alert(`Hey, ${formData.name}!, Thankyou for Submitting form`);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ something: "" });
    }
    window.addEventListener("scroll", (e) => {
      function onEntry(entry) {
        entry.forEach((change) => {
          if (change.isIntersecting) {
            if (!isStandby) {
              setTimeout(() => {
                setIsStandby(true);
              }, 4000);
            }
          }
        });
      }

      let options = {
        threshold: [0.3],
      };

      let observer = new IntersectionObserver(onEntry, options);

      let elements = formOuterRef.current;

      observer.observe(elements);
    });
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
            className={`${classes["form-field"]} ${classes["form-field-2"]} ${classes["animate-field-3"]}`}
          >
            <DropDown
              placeholder="Industry"
              register={register}
              fieldName="Industry"
              setValue={setValue}
              data={["IT", "Services"]}
              required={false}
            />
            <Input
              type="text"
              placeholder="Company Name"
              register={register}
              fieldName="CompanyName"
              required={false}
            />
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
              size={3.7}
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
                height={15}
              />
              <p className={classes["input-error"]}>
                {errors.message?.type === "required" && "*Message is required."}
              </p>
            </div>
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
              <div className={`${classes["btn-inner-1"]} inner-btn`}>
                <span>S</span>
              </div>
              <div className={`${classes["btn-inner-2"]} inner-btn`}>
                <span>u</span>
              </div>
              <div className={`${classes["btn-inner-3"]} inner-btn`}>
                <span>b</span>
              </div>
              <div className={`${classes["btn-inner-4"]} inner-btn`}>
                <span>m</span>
              </div>
              <div className={`${classes["btn-inner-5"]} inner-btn`}>
                <span>i</span>
              </div>
              <div className={`${classes["btn-inner-6"]} inner-btn`}>
                <span>t</span>
              </div>
            </button>
            <a href="/" className="btn" type="submit">
              Subscribe to Newsletter
            </a>
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
      {isStandby && !isFormTouched && (
        <p className={classes["standby-message"]}>Ok, then let's start!</p>
      )}
    </div>
  );
};

export default ContactForm;
