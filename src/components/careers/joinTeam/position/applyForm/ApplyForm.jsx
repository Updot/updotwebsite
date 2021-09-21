import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import ServiceData from "../../../../connect/serviceData.json";
import Input from "../../../../connect/formFields/Input";
import DropDown from "../../../../connect/formFields/DropDown";
import Checkbox from "../../../../connect/formFields/Checkbox";
import TextArea from "../../../../connect/formFields/TextArea";

import classes from "./ApplyForm.module.css";
import InputFile from "../../../../connect/formFields/InputFile";
const ApplyForm = () => {
  const [showFileInput, setShowFileInput] = useState(false);
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

  const onSubmitBtnClickHandler = (e) => {
    submitBtnRef.current.classList.add(`${classes["animate-btn"]}`);
  };
  return (
    <div ref={formOuterRef} className={`${classes["form-container-change"]}`}>
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
              left="2%"
              onFirstChange={() => {}}
            />
            <p className={classes["input-error"]}>
              {errors.name?.type === "required" && "*Name is required."}
            </p>
          </div>
        </div>
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
              left="2%"
              required={true}
            />
            <p className={classes["input-error"]}>
              {errors.phoneNumber?.type === "required" &&
                "*Phone Number is required."}
            </p>
          </div>
        </div>

        <div
          className={`${classes["form-field"]} ${classes["form-field-1"]} ${classes["animate-field-2"]}`}
        >
          <div className={classes["field-container"]}>
            <Input
              type="text"
              placeholder="Email ID*"
              register={register}
              fieldName="emailId"
              left="2%"
              required={true}
            />
            <p className={classes["input-error"]}>
              {errors.emailId?.type === "required" && "*Email ID is required."}
            </p>
          </div>
        </div>
        <div className={`${classes["form-field"]} ${classes["form-field-3"]}`}>
          <DropDown
            placeholder="Are your currently employed?*"
            register={register}
            fieldName="Industry"
            setValue={setValue}
            data={["IT", "Services"]}
            required={false}
          />
          <DropDown
            placeholder="How Did You Hear About Us*"
            register={register}
            fieldName="Industry"
            setValue={setValue}
            data={["IT", "Services"]}
            required={false}
          />
        </div>
        <div className={`${classes["form-field"]} ${classes["form-field-3"]}`}>
          <DropDown
            placeholder="Position Applying For*"
            register={register}
            fieldName="Industry"
            setValue={setValue}
            data={["IT", "Services"]}
            required={false}
          />
          <DropDown
            placeholder="Preferred Joining Time*"
            register={register}
            fieldName="Industry"
            setValue={setValue}
            data={["IT", "Services"]}
            required={false}
          />
        </div>
        <div className={`${classes["form-field"]} ${classes["form-field-3"]}`}>
          <DropDown
            placeholder="Current Salary"
            register={register}
            fieldName="Industry"
            setValue={setValue}
            data={["IT", "Services"]}
            required={false}
          />
          <DropDown
            placeholder="Expected Salary"
            register={register}
            fieldName="Industry"
            setValue={setValue}
            data={["IT", "Services"]}
            required={false}
          />
        </div>
        <div className={`${classes["form-field"]} ${classes["form-field-3"]}`}>
          <div>
            <h3>Upload Resume* / Portfolio</h3>
            <div className={classes["file-input-container"]}>
              <InputFile
                name="file1"
                height="12rem"
                width="12rem"
                mr="1.5rem"
              />
              <InputFile name="file2" height="12rem" width="12rem" />
            </div>
          </div>
          <Input
            type="url"
            placeholder="Portfolio Link"
            register={register}
            fieldName="PortfolioLink"
            required={false}
          />
        </div>
        <div className={`${classes["form-field"]} ${classes["form-field-6"]}`}>
          <button
            className="btn"
            type="submit"
            onClick={(e) => {
              e.target.classList.add("btn-active");
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
