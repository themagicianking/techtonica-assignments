const Message = (props) => {
  return (
    <div>
      <h3>Thank you for submitting our form </h3>
      <p> {props.data.name} </p>
      <p> You registered the email {props.data.email}</p>
    </div>
  );
};

export default Message;
