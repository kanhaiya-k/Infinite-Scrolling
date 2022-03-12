let divContent = document.getElementById("divContent");
let listEnd = document.getElementById("listEnd");
let itemCount = 0;
let appendding = false;

window.addEventListener("DomContentLoaded", load);
function load() {
  additem();
}

function additem() {
  appendding = true;
  for (let i = 0; i <= 25; i++) {
    let item = createData(["This is Scroller Item No " + itemCount]);
    divContent.appendChild(item);
    itemCount++;
  }
  appendding = false;
}

function createData(data) {
  let item = document.createElement("div");
  item.setAttribute("class", "item");
  item.textContent = data;
  return item;
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target.id === "listEnd") {
      if (entry.isIntersecting && !appendding) {
        appendding = true;

        setTimeout(() => {
          additem();
        }, 1000);
      }
    }
  });
};
let observer = new IntersectionObserver(callback, options);
observer.observe(listEnd);
