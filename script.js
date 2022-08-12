const txtElement = ["Freelancer", "Web Developer", "Graphic Designer"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let worlds = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }
  currentTxt = txtElement[count];

  worlds = currentTxt.slice(0, ++txtIndex);
  console.log(worlds);
  document.querySelector(".efek-ngetik").textContent = worlds;

  if (worlds.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 500);
})();
