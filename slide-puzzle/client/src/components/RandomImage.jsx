import { useState } from "react";
import Puzzle from "./Puzzle";

// put get random image in its own component and use callback function to get category
// put form in its own component

function RandomImage() {
  const solvedPosition = [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
    { row: 0, column: 3 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
    { row: 1, column: 3 },
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
    { row: 2, column: 3 },
    { row: 3, column: 0 },
    { row: 3, column: 1 },
    { row: 3, column: 2 },
    { row: 3, column: 3 },
  ];

  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [category, setCategory] = useState("");
  const [position, setPositon] = useState(solvedPosition);

  function handleSubmit(e) {
    e.preventDefault();
    fetchImage();
  }

  function handleChange(e) {
    setCategory(e.target.value);
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
        setImageUrl(data.urls.regular);
        setImageAlt(data.alt_description);
      });
  }

  function GetPosition() {
    const solvedPosition = [
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 0, column: 2 },
      { row: 0, column: 3 },
      { row: 1, column: 0 },
      { row: 1, column: 1 },
      { row: 1, column: 2 },
      { row: 1, column: 3 },
      { row: 2, column: 0 },
      { row: 2, column: 1 },
      { row: 2, column: 2 },
      { row: 2, column: 3 },
      { row: 3, column: 0 },
      { row: 3, column: 1 },
      { row: 3, column: 2 },
      { row: 3, column: 3 },
    ];

    const shuffledPosition = solvedPosition.sort((a, b) => 0.5 - Math.random());

    return shuffledPosition;
  }

  return (
    <>
      {/* <img
        src={imageUrl}
        alt={imageAlt}
        width="500"
        style={{ border: "thin solid black" }}
      ></img> */}
      <Puzzle url={imageUrl} position={position} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="categories">Choose a puzzle category: </label>
        <select id="categories" onChange={handleChange}>
          <option value="select">Select</option>
          <option value="animals">Animals</option>
          <option value="plants">Plants</option>
          <option value="city">City</option>
          <option value="art">Art</option>
          <option value="food">Food</option>
        </select>
        <br></br>
        <input type="submit" value="GET PUZZLE"></input>
      </form>
    </>
  );
}

export default RandomImage;
