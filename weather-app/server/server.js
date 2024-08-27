import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express());

app.get("/weather", (req, res) => {
  const city = req.query.cityName;
  const apiKey = process.env.API_KEY;
  const params = new URLSearchParams({
    q: req.query.cityName,
    q: city,
    appid: apiKey,
    unites: "imperial",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
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
