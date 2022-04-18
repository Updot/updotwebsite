import { useRef, useContext } from "react";
// import ServiceData from "../../../../connect/serviceData.json";
import Input from "../../../../connect/formFields/Input";
import DropDown from "../../../../connect/formFields/DropDown";
import SearchField from "../../../../connect/formFields/SearchField";

import classes from "./ApplyForm.module.scss";
import InputFile from "../../../../connect/formFields/InputFile";
import Modal from "../../../../ui/modal/Modal";
import { CareerContext } from "../../../../../context/formContext";

const ApplyForm = (props) => {
  // const [showFileInput, setShowFileInput] = useState(false);
  const formOuterRef = useRef(null);
  const submitBtnRef = useRef(null);
  const {
    formState,
    loading,
    setAttachments,
    errorState,
    setFormState,
    handleCarrerSubmit,
    isModalOpen,
    setIsModalOpen,
    submissionMessage,
  } = useContext(CareerContext);

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
        <form className={classes.form} onSubmit={handleCarrerSubmit}>
          <div
            className={`${classes["form-field"]} ${classes["form-field-1"]}`}
          >
            <div id="name" className={classes["field-container"]}>
              <Input
                type="text"
                placeholder="Name*"
                autoComplete="name"
                value={formState.name}
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
          <div
            className={`${classes["form-field"]} ${classes["form-field-2"]} ${classes["animate-field-1"]}`}
          >
            <div id="countryCode" className={classes["field-container"]}>
              <SearchField formState={formState} setFormState={setFormState} />
              {errorState.countryCode && (
                <p className={classes["input-error"]}>
                  {errorState.countryCode}
                </p>
              )}
            </div>
            <div id="phoneNumber" className={classes["field-container"]}>
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

          <div
            className={`${classes["form-field"]} ${classes["form-field-1"]} ${classes["animate-field-2"]}`}
          >
            <div id="emailId" className={classes["field-container"]}>
              <Input
                type="email"
                placeholder="Email ID*"
                autoComplete="email"
                value={formState.emailId}
                handleChange={(val) =>
                  setFormState({ ...formState, emailId: val })
                }
                left={window.innerWidth > 800 ? "1%" : "4%"}
              />
              {errorState.emailId && (
                <p className={classes["input-error"]}>{errorState.emailId}</p>
              )}
            </div>
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-3"]}`}
          >
            <div id="currentJob">
              <DropDown
                placeholder="Are your currently employed?*"
                data={["Yes", "No"]}
                handleChange={(val) =>
                  setFormState({ ...formState, currentJob: val })
                }
              />
              {errorState.currentJob && (
                <p className={classes["input-error"]}>
                  {errorState.currentJob}
                </p>
              )}
            </div>
            <div id="source">
              <DropDown
                placeholder="How Did You Hear About Us*"
                data={["Search Engine", "Social Media", "Referral"]}
                handleChange={(val) =>
                  setFormState({ ...formState, source: val })
                }
              />
              {errorState.source && (
                <p className={classes["input-error"]}>{errorState.source}</p>
              )}
            </div>
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-3"]}`}
          >
            <div id="position">
              <DropDown
                placeholder="Position Applying For*"
                data={props.positions}
                handleChange={(val) =>
                  setFormState({ ...formState, position: val })
                }
              />
              {errorState.position && (
                <p className={classes["input-error"]}>{errorState.position}</p>
              )}
            </div>
            <div id="preferredJoiningDate">
              <DropDown
                placeholder="Preferred Joining Time*"
                data={["Immediate", "Within a month", "More than a month"]}
                handleChange={(val) =>
                  setFormState({ ...formState, preferredJoiningDate: val })
                }
              />
              {errorState.preferredJoiningDate && (
                <p className={classes["input-error"]}>
                  {errorState.preferredJoiningDate}
                </p>
              )}
            </div>
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-3"]}`}
          >
            <div>
              <DropDown
                placeholder="Current Salary"
                data={[
                  "0 - 2,00,000",
                  "2,00,000 - 5,00,000",
                  "5,00,000 - 10,00,000",
                  "10,00,000+",
                ]}
                handleChange={(val) =>
                  setFormState({ ...formState, currentSalary: val })
                }
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Expected Salary (Per anum eg. xxxxxx)"
                value={formState.expectedSalary}
                handleChange={(val) =>
                  setFormState({ ...formState, expectedSalary: val })
                }
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
                  setAttachment={setAttechment}
                  height={fileContainerSize}
                  width={fileContainerSize}
                />
              </div>
            </div>

            <Input
              type="url"
              placeholder="Portfolio Link"
              value={formState.portfolioLink}
              handleChange={(val) =>
                setFormState({ ...formState, portfolioLink: val })
              }
            />
          </div>
          <div
            className={`${classes["form-field"]} ${classes["form-field-6"]}`}
          >
            <button
              className="btn"
              type="submit"
              ref={submitBtnRef}
              onClick={(e) => {
                e.target.classList.add("btn-active");
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplyForm;
