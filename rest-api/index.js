import episodes from "./episodes.js";
import express from "express";
const app = express();

app.get("/rest-api/episodes", (req, res) => {
  res.json(episodes);
});

// app.post("/rest-api/episodes", (req, res) => {
//   const newEpisode = {
//     id: 0,
//     episodeNumber: "string",
//     releaseDate: "string 0000-00-00",
//     duration: "string 00:00",
//     title: "string",
//     description: "string",
//     weather: { title: "string", artist: "string" },
//     actors: ["Cecil Baldwin"],
//     writers: ["Jeffrey Cranor", "Joseph Fink"],
//   };
//   res.json(newEpisode);
// });

// app.put();

// app.delete();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
