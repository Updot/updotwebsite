import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import UpdotLogo from "../../assets/img/updot-big.svg";
import rightArrow from "../../assets/img/right-arrow.svg";
import Input from "../connect/formFields/Input";
import Modal from "../ui/modal/Modal";
import classes from "./Newsletter.module.scss";

const Newsletter = () => {
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();
  const formSubmitHandler = (formData) => {
    setEmail(formData.email);
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ something: "" });
    }
  });
  const onFirstChange = () => {
    if (!isFormTouched) {
      setIsFormTouched(true);
    }
  };
  return (
    <Fragment>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        Hi {email}! Thank you for subscribing to our newsletter.
      </Modal>
      <div className={classes["connect-btn"]}>
        <Link to="/contact">
          Let's Connect <img src={rightArrow} alt="right arrows" />
        </Link>
      </div>
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
              onFirstChange={onFirstChange}
            />
            <div className={classes["newsletter-btn-container"]}>
              <button
                className="btn"
                type="submit"
                onClick={(e) => {
                  isFormTouched && e.target.classList.add("btn-active");
                }}
              >
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
    </Fragment>
  );
};

export default Newsletter;
