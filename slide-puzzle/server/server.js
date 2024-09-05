import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  const API_KEY = process.env.API_KEY;
  const CATEGORY = "cat";
  const params = new URLSearchParams({
    client_id: API_KEY,
    query: CATEGORY,
    orientation: "squarish",
  });
  const url = `https://api.unsplash.com/photos/random?${params}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
