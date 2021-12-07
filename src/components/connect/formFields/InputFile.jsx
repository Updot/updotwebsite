import { useState } from "react";
import pdfIcon from "../../../assets/img/pdf.svg";
import imageIcon from "../../../assets/img/image.svg";
import classes from "./InputFile.module.scss";

const InputFile = (props) => {
  const [file, setFile] = useState(null);
  const [base64File, setBase64File] = useState(null);

  const inputChangeHandler = (fieldName, data) => {
    // function getBase64(file, cb) {
    //   let reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = function () {
    //     cb(reader.result);
    //   };
    //   reader.onerror = function (error) {
    //     console.log("Error: ", error);
    //   };
    // }
    // getBase64(data, (result) => {
    //   setBase64File((prevData) => {
    //     return { ...prevData, [fieldName]: result };
    //   });
    // });
    props.setAttachment(fieldName, data);
  };
  return (
    <div
      className={classes["input-file-container"]}
      style={{
        height: props.height ? props.height : "17.9rem",
        width: props.width ? props.width : "17.9rem",
        marginRight: props.mr ? props.mr : "",
      }}
    >
      <input
        type="file"
        id={props.name}
        hidden
        onChange={(e) => {
          setFile(e.target.files[0]);
          inputChangeHandler(`attechment-${props.name}`, e.target.files[0]);
        }}
      />
      {!file && (
        <label className={classes["file-label"]} htmlFor={props.name}>
          <span>+</span>
        </label>
      )}
      {file && (
        <img
          src={file.type.includes("image") ? imageIcon : pdfIcon}
          alt=""
          className={classes["file-icon"]}
        />
      )}
      {file && (
        <span
          className={classes.remove}
          onClick={(e) => {
            setFile(null);
          }}
        >
          X
        </span>
      )}
    </div>
  );
};

export default InputFile;
