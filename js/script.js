const containerEl = document.querySelector(".container");
const resetEl = document.querySelector(".reset--button");

const addScore = function (name, target) {
  let score = document.querySelector(`.${name}--score`);
  let newScoreValue =
    parseInt(score.textContent) + parseInt(target.textContent);
  score.textContent = newScoreValue;
};

containerEl.addEventListener("click", (event) => {
  const target = event.target;

  if (target.parentNode.className.includes("home--buttons"))
    addScore("home", target);
  if (target.parentNode.className.includes("guest--buttons"))
    addScore("guest", target);
});
