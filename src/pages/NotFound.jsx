import { Fragment } from "react";
import { useSelector } from "react-redux";
import Error from "../components/error/Error";

const NotFound = () => {
  const isLightThemeActive = useSelector(
    (state) => state.themeState.isLightThemeActive
  );

  return (
    <Fragment>
      <Error isLightThemeActive={isLightThemeActive} />
    </Fragment>
  );
};

export default NotFound;
