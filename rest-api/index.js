import express from "express";
const app = express();
app.use(express.json());

// should be in .env file
import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  user: "tpl1122_1",
  host: "localhost",
  database: "nvepisodes",
  password: "password",
});

// getting the whole episode list
app.get("/rest-api/episode-list", async (req, res) => {
  const database = await pool.connect();
  const episodes = await database.query("SELECT * FROM episodes");
  database.release();
  res.json(episodes.rows);
});

// getting individual episodes by episode number
app.get("/rest-api/episode", async (req, res) => {
  const index = parseInt(req.query.episodeNumber);
  const database = await pool.connect();
  const episode = await database.query(`SELECT * FROM episodes WHERE episodeNumber = '${index}'`);
  database.release();
  res.json(episode.rows);
});

app.post("/rest-api/episode-list", async (req, res) => {
  const newEpisode = {
    episodeNumber: req.body.episodeNumber,
    title: req.body.title,
  };
  const database = await pool.connect();
  // todo: put column names into insert statements
  await database.query(
    `INSERT INTO episodes VALUES ('${newEpisode.episodeNumber}', '${newEpisode.title}')`
  );
  res.json(newEpisode);
});

app.put("/rest-api/episodes-by-year", async (req, res) => {
  let episodeList = episodes.filter(
    (episode) => parseInt(episode.releaseDate.substring(0, 4)) === req.body.year
  );
  res.json(episodeList);
});

app.delete("/rest-api/episodes", async (req, res) => {
  const database = await pool.connect();
  await database.query(
    `DELETE FROM episodes WHERE (${episodeNumber}='${req.episodeNumber}')`
  );
  res.status(200);
  res.json("The episode has been deleted.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
