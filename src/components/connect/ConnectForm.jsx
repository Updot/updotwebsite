import { useForm } from "react-hook-form";
import ServiceData from "./serviceData.json";
import Input from "./formFields/Input";
import DropDown from "./formFields/DropDown";
import Checkbox from "./formFields/Checkbox";
import TextArea from "./formFields/TextArea";

import classes from "./ConnectForm.module.css";
import { useEffect } from "react";
const ConnectForm = () => {
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
  });
  return (
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
          />
          <p className={classes["input-error"]}>
            {errors.name?.type === "required" && "*Name is required."}
          </p>
        </div>
      </div>
      <div className={`${classes["form-field"]} ${classes["form-field-2"]}`}>
        <div className={classes["field-container"]}>
          <DropDown
            placeholder="Code*"
            register={register}
            fieldName="code"
            setValue={setValue}
            data={["+91"]}
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
        <div className={classes["field-container"]}>
          <Input
            type="text"
            placeholder="Email ID*"
            register={register}
            fieldName="emailId"
            required={true}
          />
          <p className={classes["input-error"]}>
            {errors.emailId?.type === "required" && "*Email ID is required."}
          </p>
        </div>
      </div>
      <div className={`${classes["form-field"]} ${classes["form-field-3"]}`}>
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
        <Input
          type="url"
          placeholder="Website URL"
          register={register}
          fieldName="WebsiteURL"
          required={false}
        />
      </div>
      <div className={`${classes["form-field"]} ${classes["form-field-4"]}`}>
        <h5 className={classes.FormOptionHeading}>Services Required</h5>
        <Checkbox
          name="ServicesRequired"
          data={ServiceData}
          register={register}
        />
      </div>
      <div className={`${classes["form-field"]} ${classes["form-field-5"]}`}>
        <div className={classes["field-container"]}>
          <TextArea
            placeholder="Message*"
            register={register}
            fieldName="message"
          />{" "}
          <p className={classes["input-error"]}>
            {errors.message?.type === "required" && "*Message is required."}
          </p>
        </div>
      </div>
      <div className={`${classes["form-field"]} ${classes["form-field-6"]}`}>
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ConnectForm;
