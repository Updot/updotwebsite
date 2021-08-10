import { useDispatch } from "react-redux";
import { mapStateAction } from "../../../store/mapState";
import indiaMin from "../../../assets/img/ind-small.svg";
import uaeMin from "../../../assets/img/uae-min.svg";
const AreaSwitch = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = (country) => {
    dispatch(mapStateAction.setMap(country));
  };
  return (
    <div>
      {props.current === "ind" ? (
        <div onClick={onClickHandler.bind(null, "uae")}>
          <img src={uaeMin} alt="uae map" />
        </div>
      ) : (
        <div onClick={onClickHandler.bind(null, "ind")}>
          <img src={indiaMin} alt="india map" />
        </div>
      )}
    </div>
  );
};

export default AreaSwitch;
