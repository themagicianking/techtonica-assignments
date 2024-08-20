import episodes from "./episodes.js";
import express from "express";

const app = express();

app.use(express.json());

app.get("/rest-api/episode-list", (req, res) => {
  res.json(episodes);
});

app.get("/rest-api/episode-item", (req, res) => {
  const index = parseInt(req.query.id);
  res.json(episodes[index]);
});

app.post("/rest-api/episodes", (req, res) => {
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

app.put("/rest-api/episodes-by-year", (req, res) => {
  let episodeList = episodes.filter(
    (episode) => parseInt(episode.releaseDate.substring(0, 4)) === req.body.year
  );
  res.json(episodeList);
});

// app.delete();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
