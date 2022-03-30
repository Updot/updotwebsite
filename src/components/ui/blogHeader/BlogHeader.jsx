import { useState, useContext } from "react";
import Input from "../../connect/formFields/Input";
import SmallNav from "../../ui/smallNav/SmallNav";
import workData from "../../work/work-data";

import classes from "./BlogHeader.module.scss";

const BlogHeader = (props) => {
  const { handleSearch, searchState } = props;

  return (
    <div className={classes["blog-header"]}>
      <form action="#">
        <Input
          type="text"
          placeholder="Search"
          value={searchState}
          handleChange={(val) => handleSearch(val)}
          left={window.innerWidth > 800 ? "4%" : "10%"}
        />
      </form>
      <div className={classes["blog-nav"]}>
        <SmallNav navData={props.navData} />
      </div>
    </div>
  );
};

export default BlogHeader;
