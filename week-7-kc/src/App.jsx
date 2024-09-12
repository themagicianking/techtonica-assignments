import "./App.css";
import { useState } from "react";
import RegisterYourApplicationForm from "./components/form";
import Message from "./components/message";

export default function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({});

  const submitData = (data) => {
    console.log(data);
    setIsSubmit(true);
    setData(data);
  };

  return (
    <div className="App">
      <h1>Thank you for Submitting your refound</h1>

      {isSubmit ? (
        <Message data={data} />
      ) : (
        <RegisterYourApplicationForm onSubmit={submitData} />
      )}
    </div>
  );
}
