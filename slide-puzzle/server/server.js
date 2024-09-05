import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  const url = "https://api.api-ninjas.com/v1/randomimage";
  const API_KEY = process.env.API_KEY;
  console.log(url);
  fetch(url, { headers: { "X-Api-Key": API_KEY, "Accept": "image/jpg" }})
    .then((res) => res.blob())
    .then((blob) => {
      console.log(blob);
      // const imageUrl = URL.createObjectURL(blob);
      res.send({ blob });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
