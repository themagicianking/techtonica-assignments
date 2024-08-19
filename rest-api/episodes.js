// NOTE #1: release dates are taken from apple podcasts, duration is taken from spotify. (there shouldn't be any discrepancies, but if there are.) actors and writers are listed in alphabetical order by last name, regardless of contribution size. Unsure what to do in the future for anomaly episodes (those with multiple weathers, those that are rereleases, and episodes with multiple parts)

// NOTE #2: double quotes need to be added bc JSON (prettier keeps getting rid of them). Either wait and do this at the end with find and replace or figure out how to fix prettier to ignore that particular formatting thing for this file only.

// NOTE #3: release dates are using ISO 8601. until i find something better, episode length is given in the format of 00:00 with the first two numbers representing minutes and the second two representing seconds.

// NOTE #4: rebuilding using RSS feed data

// NOTE #5: create year from date

const EPISODES = [
  // template object
  // {
  //   id: 0,
  //   episodeNumber: "string",
  //   releaseDate: "string 0000-00-00",
  //   duration: "string 00:00",
  //   title: "string",
  //   description: "string",
  //   weather: { title: "string", artist: "string" },
  //   actors: ["Cecil Baldwin"],
  //   writers: ["Jeffrey Cranor", "Joseph Fink"],
  // },
  // actual objects
  {
    id: 0,
    episodeNumber: "1",
    releaseDate: "2012-06-15",
    duration: "24:03",
    title: "Pilot",
    description:
      "Pilot Episode. A new dog park opens in Night Vale. Carlos, a scientist, visits and discovers some interesting things. Seismic things. Plus, a helpful guide to surveillance helicopter-spotting.",
    weather: { title: "These and More Than These", artist: "Joseph Fink" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 1,
    episodeNumber: "2",
    releaseDate: "2012-07-01",
    duration: "20:21",
    title: "Glow Cloud",
    description:
      "A mysterious, glowing cloud makes its way across Night Vale. Plus, new Boy Scouts hierarchy, community events calendar, and a PTA bake sale for a great cause!",
    weather: { title: "The Bus is Late", artist: "Satellite High" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 2,
    episodeNumber: "3",
    releaseDate: "2012-07-15",
    duration: "20:56",
    title: "Station Management",
    description:
      "It's contract renewal time with station management, and negotiations get tricky. Plus, a new city litter initiative, books stop working, and a creeping fear comes to town!",
    weather: { title: "Bill & Annie", artist: "Chuck Brodsky" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 3,
    episodeNumber: "4",
    releaseDate: "2012-08-01",
    duration: "23:17",
    title: "PTA Meeting",
    description:
      "Last night's PTA meeting accidentally opens a rift in spacetime, and Night Vale faces the consequences. Plus, changes afoot at the Night Vale Daily Journal, controversy at Radon Canyon, and our annual high school football preview!",
    weather: { title: "Closer", artist: "The Tiny" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 4,
    episodeNumber: "5",
    releaseDate: "2012-08-15",
    duration: "21:10",
    title: "The Shape in Grove Park",
    description:
      "A protest against the removal of the Shape In Grove Park That No One Acknowledges Or Speaks About. Plus, changes to the school curriculum, a growing tarantula problem in town, and musical auditions!",
    weather: { title: "Jerusalem", artist: "Dan Bern" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 5,
    episodeNumber: "6",
    releaseDate: "2012-09-01",
    duration: "23:04",
    title: "The Drawbridge",
    description:
      "The city faces extensive delays in the revitalization of the Old Town Drawbridge. Plus, time for another pledge drive, changes afoot at the Night Vale Daily Journal, and good news for radio controlled airplane hobbyists!",
    weather: { title: "Aye", artist: "Dio" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 6,
    episodeNumber: "7",
    releaseDate: "2012-09-15",
    duration: "24:36",
    title: "History Week",
    description:
      "Learn about the storied history of Night Vale during this special week's celebration. Plus, psychological assaults on tourists, highway construction announcements, and metal detectors in schools!",
    weather: { title: "Despite What You've Been Told", artist: "Two Gallants" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 7,
    episodeNumber: "8",
    releaseDate: "2012-10-01",
    duration: "23:56",
    title: "The Lights in Radon Canyon",
    description:
      "Mysterious lights and sounds are coming from Radon Canyon. Plus, tips on how to win the town lottery, our newest (incorporeal) School Board member, and the abandoned mineshaft finally gets HBO!",
    weather: { title: "This Too Shall Pass", artist: "Danny Schmidt" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 8,
    episodeNumber: "9",
    releaseDate: "2012-10-15",
    duration: "23:51",
    title: "PYRAMID",
    description:
      "A large, philosophical pyramid appears in town, announcing several messages, but is it what it seems? Plus, best practices for regular skin-checks, an update on the levitating cat, and whatever happened to that vile barber?",
    weather: { title: "Last Song", artist: "Jason Webley" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
  {
    id: 9,
    episodeNumber: "10",
    releaseDate: "2012-11-01",
    duration: "24:37",
    title: "Feral Dogs",
    description:
      "A roving pack of feral dogs terrorizes Night Vale. Plus, a new installment of Community Health Tips, the Fireperson Appreciation Parade, and free admission day at the Museum of Forbidden Technologies!",
    weather: { title: "i Know This", artist: "Rachel Kann" },
    actors: ["Cecil Baldwin"],
    writers: ["Jeffrey Cranor", "Joseph Fink"],
  },
];

export default EPISODES;
