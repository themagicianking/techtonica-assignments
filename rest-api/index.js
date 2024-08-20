import episodes from "./episodes.js";
import express from "express";

const app = express();

app.use(express.json());

app.get("/rest-api/episodes", (req, res) => {
  res.json(episodes);
});

app.post("/rest-api/episodes", (req, res) => {
  console.log(req.body);
  const newEpisode = {
    id: req.body.id,
    episodeNumber: req.body.episodeNumber,
    releaseDate: req.body.releaseDate,
    duration: req.body.duration,
    title: req.body.title,
    description: req.body.description,
    weather: req.body.weather,
    actors: req.body.actors,
    writers: req.body.writers,
  };
  res.json(newEpisode);
});

// app.put();

// app.delete();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
