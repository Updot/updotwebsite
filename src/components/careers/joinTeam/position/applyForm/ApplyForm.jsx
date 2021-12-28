import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import ServiceData from "../../../../connect/serviceData.json";
import Input from "../../../../connect/formFields/Input";
import DropDown from "../../../../connect/formFields/DropDown";
// import Checkbox from "../../../../connect/formFields/Checkbox";
// import TextArea from "../../../../connect/formFields/TextArea";

import classes from "./ApplyForm.module.scss";
import InputFile from "../../../../connect/formFields/InputFile";
import Modal from "../../../../ui/modal/Modal";

import { dialCodes } from "../../../../../util/InternationalDialCodes";

const ApplyForm = (props) => {
  // const [showFileInput, setShowFileInput] = useState(false);
  const formOuterRef = useRef(null);
  const [attachments, setAttachments] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const submitBtnRef = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ something: "" });
    }
  }, [isSubmitSuccessful, reset]);
  const formSubmitHandler = async (formData) => {
    const form = new FormData();
    Object.keys(attachments).forEach((k) => {
      form.append(k, attachments[k]);
    });
    for (var key in formData) {
      form.append(key, formData[key]);
    }
    const response = await fetch(
      "https://temp-updot-backend-o9zol.ondigitalocean.app/api/data-submission/careers",
      {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
        },
        body: form,
      }
    );
    if (response.ok) {
      setSubmissionMessage(
        `Hey, ${formData.name}!, Thankyou for submitting application form`
      );
    } else {
      setSubmissionMessage(`Error occured while submitting form!!`);
    }
    setIsModalOpen(true);
  };

  // const onSubmitBtnClickHandler = (e) => {
  //   submitBtnRef.current.classList.add(`${classes["animate-btn"]}`);
  // };
  const fileContainerSize = window.innerWidth > 800 ? "17.9rem" : "8.8rem";
  const setAttechment = (fieldName, result) => {
    setAttachments((prevState) => {
      return { ...prevState, [fieldName]: result };
    });
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {submissionMessage}
      </Modal>
      <div ref={formOuterRef} className={`${classes["form-container-change"]}`}>
        <form
          className={classes.form}
          onSubmit={handleSubmit(formSubmitHandler)}
        >
          <div
            className={`${classes["form-field"]} ${classes["form-field-1"]}`}
          >
            <div className={classes["field-container"]}>
              <Input
                type="text"
                placeholder="Name*"
                register={register}
                fieldName="name"
                error={errors}
                required={true}
                left={window.innerWidth > 800 ? "1%" : "3%"}
                // onFirstChange={() => {}}
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
                data={dialCodes}
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
                left={window.innerWidth > 800 ? "2%" : "3%"}
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
                left={window.innerWidth > 800 ? "1%" : "3%"}
                required={true}
              />
              <p className={classes["input-error"]}>
                {errors.emailId?.type === "required" &&
                  "*Email ID is required."}
              </p>
            </div>
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-3"]}`}
          >
            <div>
              <DropDown
                placeholder="Are your currently employed?*"
                register={register}
                fieldName="currentlyEmployed"
                setValue={setValue}
                data={["Yes", "No"]}
                required={true}
              />
              <p className={classes["input-error"]}>
                {errors.currentlyEmployed?.type === "required" &&
                  "*Employment status is required."}
              </p>
            </div>
            <div>
              <DropDown
                placeholder="How Did You Hear About Us*"
                register={register}
                fieldName="hearAboutUs"
                setValue={setValue}
                data={["Search Engine", "Social Media", "Referral"]}
                required={true}
              />
              <p className={classes["input-error"]}>
                {errors.hearAboutUs?.type === "required" &&
                  "*Hear About Us is required."}
              </p>
            </div>
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-3"]}`}
          >
            <div>
              <DropDown
                placeholder="Position Applying For*"
                register={register}
                fieldName="position"
                setValue={setValue}
                // defaultValue={props.positions[0]}
                data={props.positions}
                required={true}
              />
              <p className={classes["input-error"]}>
                {errors.position?.type === "required" &&
                  "*Position is required."}
              </p>
            </div>
            <div>
              <DropDown
                placeholder="Preferred Joining Time*"
                register={register}
                fieldName="joiningTime"
                setValue={setValue}
                data={["Immediate", "Within a month", "More than a month"]}
                required={true}
              />
              <p className={classes["input-error"]}>
                {errors.joiningTime?.type === "required" &&
                  "*Joining Time is required."}
              </p>
            </div>
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-3"]}`}
          >
            <div>
              <DropDown
                placeholder="Current Salary"
                register={register}
                fieldName="currentSalary"
                setValue={setValue}
                data={[
                  "0 - 2,00,000",
                  "2,00,000 - 5,00,000",
                  "5,00,000 - 10,00,000",
                  "10,00,000+",
                ]}
                required={false}
              />
              <p className={classes["input-error"]}>
                {/* {errors.emailId?.type === "required" && "*Email ID is required."} */}
              </p>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Expected Salary (Per anum eg. xxxxxx)"
                register={register}
                fieldName="expectedSalary"
                left={window.innerWidth > 800 ? "1.5%" : "3%"}
                required={false}
              />
            </div>
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-3"]}`}
          >
            <div
              className={`${classes["protfolio-container"]} ${classes["protfolio-container-2"]}`}
            >
              <h3>Upload Resume* / Portfolio</h3>
              <div className={classes["file-input-container"]}>
                <InputFile
                  name="file1"
                  height={fileContainerSize}
                  width={fileContainerSize}
                  setAttachment={setAttechment}
                  mr={window.innerWidth > 800 ? "5rem" : "2rem"}
                />
                <InputFile
                  name="file2"
                  setAttechment={setAttechment}
                  height={fileContainerSize}
                  width={fileContainerSize}
                />
              </div>
            </div>
            <Input
              type="url"
              placeholder="Portfolio Link"
              register={register}
              fieldName="portfolioLink"
              left="1.5%"
              required={false}
            />
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-6"]}`}
          >
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
    </>
  );
};

export default ApplyForm;
