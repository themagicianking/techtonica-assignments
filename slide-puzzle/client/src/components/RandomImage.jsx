import { useState } from "react";

function RandomImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetchImage();
  }

  async function fetchImage() {
    await fetch("http://localhost:5000/")
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

  return (
    <>
      <img src={imageUrl} alt={imageAlt} width="500"></img>
      <form onSubmit={handleSubmit}>
        {" "}
        <button type="submit">GET IMAGE</button>
      </form>
    </>
  );
}

export default RandomImage;
