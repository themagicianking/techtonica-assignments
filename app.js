import express from "express";
const app = express();
app.use(express.json());

async function fetchData() {
  const response = await fetch(
    "https://www.eventbriteapi.com/v3/users/me/?token=SI2YYVL3EYHH2PMBBRZJ"
  );

  return response.json();
}

app.get("/", async (req, res) => {
  const database = await fetchData();
  res.json(database);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
