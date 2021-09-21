import { useState } from "react";
import classes from "./InputFile.module.css";

const InputFile = (props) => {
  const [file, setFile] = useState(null);
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
          setFile(URL.createObjectURL(e.target.files[0]));
        }}
      />
      {!file && (
        <label className={classes["file-label"]} htmlFor={props.name}>
          <span>+</span>
        </label>
      )}
      {file && <img src={file} alt="" />}
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
