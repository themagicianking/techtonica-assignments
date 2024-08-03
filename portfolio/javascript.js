// arrays to hold list items for various sections
const skillList = ["HTML & CSS", "Git & GitHub", "JavaScript", "Ruby", "Python"];
const languageList = ["English (native)", "American Sign Language (conversational)"];
const projectData = [{ name: "Recipe Page", description: "A simple, highly responsive recipe site (HTML, CSS, JS, Bootstrap)", link: "https://github.com/themagicianking/techtonica-assignments/tree/main/recipe"}, { name: "Hangman", description: "A command line hangman game (Ruby)", link: "https://github.com/themagicianking/mastermind-2" }, { name: "Tic Tac Toe", description: "A command line tic tac toe game (Ruby)", link: "https://github.com/themagicianking/tic-tac-toe-three" }, { name: "Calculator", description: "A basic calculator page (HTML, CSS, JS)", link: "https://themagicianking.github.io/calculator-two/" }, { name: "Etch a Sketch", description: "An etch a sketch game (HTML, CSS, JS)", link: "https://themagicianking.github.io/etch-a-sketch-two/" }]
const bio = "I am a software developer, rock climber, animal lover, and fiction writer."

// populateSection adds items dynamically to each section
function populateSection(items, section) {
  section = document.getElementsByClassName(section)[0];
  const sectionList = document.createElement("ul");

  items.forEach((item) => {
    const element = document.createElement("li");
    element.innerHTML = item;
    sectionList.appendChild(element);
  })

  section.appendChild(sectionList);
};

// populateProjects adds project names, links, and details to the project section

function populateProjects(projectData) {
  return projectData.map((project) => projectHTML(project));
};

function projectHTML(project) {
  return `<a class="project-display" href=${project.link}>${project.name}</a><p>${project.description}</p>`;
};

// populates skills section
populateSection(skillList, "skills");
populateSection(languageList, "skills");

// populates projects section
populateSection(populateProjects(projectData), "projects");

// add bio to about section
let aboutText = document.createElement("p");
aboutText.setAttribute("id", "bio");
aboutText.textContent = bio;
document.getElementById("about").prepend(aboutText);

// converting submitted message into email message
const contactForm = document.getElementById("contact-form")

function addMessage(event) {
  const userMessage = document.getElementById("message").value;
  const name = document.getElementById("name").value;

  window.open(`mailto:tmoonder@gmail.com?subject=${name}%20re:%20Portfolio&body=${userMessage}`)
  event.preventDefault();
  contactForm.reset();
}

contactForm.addEventListener("submit", addMessage);
