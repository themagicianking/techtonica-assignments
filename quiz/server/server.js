import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  const url = "";
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
