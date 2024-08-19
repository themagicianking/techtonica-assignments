// NOTE #1: release dates are taken from apple podcasts, duration is taken from spotify. (there shouldn't be any discrepancies, but if there are.) actors and writers are listed in alphabetical order by last name, regardless of contribution size. Unsure what to do in the future for anomaly episodes (those with multiple weathers, those that are rereleases, and episodes with multiple parts)

// NOTE #2: double quotes need to be added bc JSON (prettier keeps getting rid of them). Either wait and do this at the end with find and replace or figure out how to fix prettier to ignore that particular formatting thing for this file only.

// NOTE #3: release dates are using ISO 8601. until i find something better, episode length is given in the format of 00:00 with the first two numbers representing minutes and the second two representing seconds.

const EPISODES = [
  // template object
  {
    id: 0,
    year: 1,
    releaseDate: null,
    duration: null,
    title: null,
    description: null,
    weather: null,
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 1,
    year: 1,
    releaseDate: "2012-06-15",
    duration: "24:03",
    title: "Pilot",
    description:
      "Pilot Episode. A new dog park opens in Night Vale. Carlos, a scientist, visits and discovers some interesting things. Seismic things. Plus, a helpful guide to surveillance helicopter-spotting.",
    weather: "These and More Than These by Joseph Fink",
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 2,
    year: 1,
    title: "Glow Cloud",
    description:
      "A mysterious, glowing cloud makes its way across Night Vale. Plus, new Boy Scouts hierarchy, community events calendar, and a PTA bake sale for a great cause!",
    weather: "The Bus is Late by Satellite High",
    actors: ["Cecil Baldwin"],
  },
  {
    id: 3,
    year: 1,
    title: "Station Management",
    description:
      "It's contract renewal time with station management, and negotiations get tricky. Plus, a new city litter initiative, books stop working, and a creeping fear comes to town!",
    weather: "Bill & Annie by Chuck Brodsky",
    actors: ["Cecil Baldwin"],
  },
  {
    id: 4,
    year: 1,
    title: "PTA Meeting",
    description:
      "Last night's PTA meeting accidentally opens a rift in spacetime, and Night Vale faces the consequences. Plus, changes afoot at the Night Vale Daily Journal, controversy at Radon Canyon, and our annual high school football preview!",
    weather: "Closer by The Tiny",
    actors: ["Cecil Baldwin"],
  },
  {
    id: 5,
    year: 1,
    title: "The Shape in Grove Park",
    description:
      "A protest against the removal of the Shape In Grove Park That No One Acknowledges Or Speaks About. Plus, changes to the school curriculum, a growing tarantula problem in town, and musical auditions!",
    weather: "Jerusalem by Dan Bern",
    actors: ["Cecil Baldwin"],
  },
  { id: 0, year: 1, title: null, description: null, weather: null, actors: [] },
];
