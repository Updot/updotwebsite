import classes from "./Client.module.css";
const Client = (props) => {
  return (
    <div className={`${classes.client} ${props.className}`}>
      <img src={props.img} alt="client" />
    </div>
  );
};

export default Client;
