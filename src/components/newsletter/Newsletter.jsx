import { useEffect } from "react";
import { useForm } from "react-hook-form";

import UpdotLogo from "../../assets/img/updot-big.svg";
import Input from "../connect/formFields/Input";
import classes from "./Newsletter.module.css";
const Newsletter = () => {
  const {
    register,
    handleSubmit,
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
    <div className={classes.newsletter}>
      <div className={classes["newsletter-container"]}>
        <h3 className={classes["newsletter-heading"]}>
          Subscribe to our Newsletter
        </h3>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Input
            type="email"
            placeholder="Email*"
            register={register}
            fieldName="email"
            error={errors}
            required={true}
          />
          <div className={classes["newsletter-btn-container"]}>
            <button className="btn" type="submit">
              Subscribe Now
            </button>
            <p className={classes["newsletter-info"]}>
              We'll never share your info with anyone else.
            </p>
          </div>
        </form>
      </div>
      <div className={classes["newsletter-logo"]}>
        <img src={UpdotLogo} alt="updot logo" />
      </div>
    </div>
  );
};

export default Newsletter;
