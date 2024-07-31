// arrays to hold list items for various sections
const skillList = ["HTML & CSS", "Git & GitHub", "JavaScript", "Ruby", "Python"];
const languageList = ["English (native)", "American Sign Language (conversational)"];
const projectList = ["Recipe Page"];
const blurb = "I am a software developer, rock climber, animal lover, and fiction writer."

// populateSection adds items dynamically to each section
function populateSection(items, section) {
  section = document.getElementsByClassName(section)[0];
  let sectionList = document.createElement("ul");

  items.forEach((item) => {
    let element = document.createElement("li");
    element.textContent = item;
    sectionList.appendChild(element);
  })

  section.appendChild(sectionList);
};

// populating each section
populateSection(skillList, "skills");
populateSection(languageList, "skills");
populateSection(projectList, "projects");

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