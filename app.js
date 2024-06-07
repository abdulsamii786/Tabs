let getContent = document.querySelectorAll(".content");
let getTabLinks = document.querySelectorAll(".tabs-link");

function showContent(evt, tabs) {
  for (let i = 0; i < getContent.length; i++) {
    getContent[i].style.display = "none";
  }
  for (let i = 0; i < getTabLinks.length; i++) {
    getTabLinks[i].className = getTabLinks[i].className.replace(" show-bg", "");
  }
  document.getElementById(tabs).style.display = "block";
  evt.currentTarget.className += " show-bg";
}

// rights========

let yearID = document.getElementById("year");

function getYear() {
  let d = new Date();
  let year = d.getFullYear();
  yearID.innerText = year;
}
getYear();
