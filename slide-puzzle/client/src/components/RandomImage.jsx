import { useState } from "react";
import Puzzle from "./Puzzle";

// put get random image in its own component and use callback function to get category
// put form in its own component

function RandomImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [category, setCategory] = useState("");

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
        setImageUrl(data.urls.regular);
        setImageAlt(data.alt_description);
      });
  }

  function handleInputChange(event) {
    setCategory(event.target.value);
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

    console.log(shuffledPosition);

    return shuffledPosition;
  }

  return (
    <>
      <img
        src={imageUrl}
        alt={imageAlt}
        width="500"
        style={{ border: "thin solid black" }}
      ></img>
      <Puzzle url={imageUrl} position={GetPosition()} />
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
