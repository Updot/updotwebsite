import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../connect/formFields/Input";
import SmallNav from "../../ui/smallNav/SmallNav";

import classes from "./BlogHeader.module.css";
const BlogHeader = (props) => {
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
    <div className={classes["blog-header"]}>
      <form action="#" onSubmit={handleSubmit(formSubmitHandler)}>
        <Input
          type="text"
          placeholder="Search"
          register={register}
          fieldName="search"
          error={errors}
          required={true}
        />
      </form>
      <div className={classes["blog-nav"]}>
        <SmallNav navData={props.navData} />
      </div>
    </div>
  );
};

export default BlogHeader;
