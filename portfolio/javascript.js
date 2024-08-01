// arrays to hold list items for various sections
const skillList = ["HTML & CSS", "Git & GitHub", "JavaScript", "Ruby", "Python"];
const languageList = ["English (native)", "American Sign Language (conversational)"];
const projectData = [{ name: "Recipe Page", description: "A simple, highly responsive recipe site (HTML, CSS, JS, Bootstrap)", link: "https://github.com/themagicianking/techtonica-assignments/tree/main/recipe"}, {name: "Example Project", description: "An example project description.", link: "google.com"}]
const blurb = "I am a software developer, rock climber, animal lover, and fiction writer."

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
  let projectList = [];

  projectData.forEach((project) => {
    let htmlContent = `<a class="project-display" href=${project.link}>${project.name}</a><p>${project.description}`
    projectList.push(htmlContent);
  });

  return projectList;
}

// populates skills section
populateSection(skillList, "skills");
populateSection(languageList, "skills");

// populates projects section
populateSection(populateProjects(projectData), "projects");

// add blurb to about section
let aboutBlurb = document.createElement("p");
aboutBlurb.textContent = blurb;
document.getElementById("about").prepend(aboutBlurb);

// converting submitted message into email message

function addMessage(event) {
  const userMessage = document.getElementById("message").value;

  window.open(`mailto:tmoonder@gmail.com?subject=Portfolio&body=${userMessage}`)
  event.preventDefault();
}

document.getElementById("contact-form").addEventListener("submit", addMessage);