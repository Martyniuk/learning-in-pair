const tabsTitles = document.querySelector(".tabs-title");
const tabsContents = document.querySelector(".tabs-content");

tabsTitles.addEventListener("click", function (e) {
  const element = e.target;

  removeActiveClassFromChildren(tabsTitles);
  makeTabContentVisible(element.id);

  element.classList.add("active");
});

function removeActiveClassFromChildren(element) {
  Array.from(element.children).forEach((child) => {
    child.classList.remove("active");
  });
}

function makeTabContentVisible(tabId) {
  removeActiveClassFromChildren(tabsContents);

  switch (tabId) {
    case "1": {
      tabsContents.children[0].classList.add("active");
      break;
    }
    case "2":
      tabsContents.children[1].classList.add("active");
      break;
    default:
      throw new Error(`Unexpected Tab name - ${tabName}`);
  }
}
