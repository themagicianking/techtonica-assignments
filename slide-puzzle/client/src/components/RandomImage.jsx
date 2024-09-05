import { useState } from "react";
import Puzzle from "./Puzzle";

function RandomImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [category, setCategory] = useState("");
  let testObject = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCategory(e.target.value);
    fetchImage();
  }

  async function fetchImage() {
    await fetch(`http://localhost:5000/?category=${category}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json.data;
      })
      .then((data) => {
        setImageUrl(`${data.urls.regular}`);
        setImageAlt(data.alt_description);
      });
  }

  function handleInputChange(event) {
    setCategory(event.target.value);
  }

  return (
    <>
      <img
        src={imageUrl}
        alt={imageAlt}
        // width="500"
        style={{ border: "thin solid black" }}
      ></img>
      <Puzzle
        url={imageUrl}
        row0Column0={testObject[0]}
        row0Column1={testObject[1]}
        row0Column2={testObject[2]}
        row0Column3={testObject[3]}
        row1Column0={testObject[4]}
        row1Column1={testObject[5]}
        row1Column2={testObject[6]}
        row1Column3={testObject[7]}
        row2Column0={testObject[8]}
        row2Column1={testObject[9]}
        row2Column2={testObject[10]}
        row2Column3={testObject[11]}
        row3Column0={testObject[12]}
        row3Column1={testObject[13]}
        row3Column2={testObject[14]}
        row03olumn3={testObject[15]}
      />
      <form onSubmit={handleSubmit}>
        <input
          list="categories"
          value={category}
          onChange={handleInputChange}
        />
        <datalist id="categories">
          <option value="animals" />
          <option value="plants" />
          <option value="city" />
          <option value="art" />
          <option value="food" />
        </datalist>
        <button type="submit">GET IMAGE</button>
      </form>
    </>
  );
}

export default RandomImage;
