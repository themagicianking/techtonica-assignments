const skillsItems = ["HTML & CSS", "Git & GitHub", "JavaScript", "Ruby", "Python"]

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

populateSection(skillsItems, "skills");