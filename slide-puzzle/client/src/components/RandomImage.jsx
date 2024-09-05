import { useState } from "react";

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
        setImageUrl(data.urls.raw);
        setImageAlt(data.alt_description);
      });
  }

  function handleInputChange(event) {
    setCategory(event.target.value);
  }

  return (
    <>
      <img src={imageUrl} alt={imageAlt} width="500"></img>
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
