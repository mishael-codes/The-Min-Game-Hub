let rhBtn = document.getElementsByClassName("hint")[1];

function rhymeHint() {
  if (num === 1) {
    let arrayOfHints = [
      "Rhymes with sun",
      "Rhymes with won",
      "Rhymes with gun",
      "Rhymes with run",
      "Rhymes with pun",
      "Rhymes with spun",
      "Rhymes with stun",
      "Rhymes with tonne",
      "Rhymes with begun",
      "Rhymes with undone",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 2) {
    let arrayOfHints = [
      "Rhymes with stu",
      "Rhymes with ewe",
      "Rhymes with due",
      "Rhymes with cue",
      "Rhymes with flu",
      "Rhymes with hoo",
      "Rhymes with sue",
      "Rhymes with drew",
      "Rhymes with revue",
      "Rhymes with queue",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 3) {
    let arrayOfHints = [
      "Rhymes with he",
      "Rhymes with we",
      "Rhymes with see",
      "Rhymes with she",
      "Rhymes with sea",
      "Rhymes with free",
      "Rhymes with agree",
      "Rhymes with degree",
      "Rhymes with Tennesse",
      "Rhymes with guarantee",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 4) {
    let arrayOfHints = [
      "Rhymes with war",
      "Rhymes with pour",
      "Rhymes with more",
      "Rhymes with bore",
      "Rhymes with your",
      "Rhymes with store",
      "Rhymes with shore",
      "Rhymes with ignore",
      "Rhymes with anymore",
      "Rhymes with underscore",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 5) {
    let arrayOfHints = [
      "Rhymes with dive",
      "Rhymes with alive",
      "Rhymes with revive",
      "Rhymes with derive",
      "Rhymes with strive",
      "Rhymes with thrive",
      "Rhymes with arrive",
      "Rhymes with connive",
      "Rhymes with survive",
      "Rhymes with contrive",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 6) {
    let arrayOfHints = [
      "Rhymes with fix",
      "Rhymes with mix",
      "Rhymes with hicks",
      "Rhymes with picks",
      "Rhymes with clicks",
      "Rhymes with chicks",
      "Rhymes with bricks",
      "Rhymes with sticks",
      "Rhymes with tricks",
      "Rhymes with cliques",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 7) {
    let arrayOfHints = [
      "Rhymes with bevan",
      "Rhymes with reden",
      "Rhymes with resin",
      "Rhymes with devil",
      "Rhymes with steven",
      "Rhymes with heaven",
      "Rhymes with eleven",
      "Rhymes with leaven",
      "Rhymes with grovel",
      "Rhymes with Mclaren",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 8) {
    let arrayOfHints = [
      "Rhymes with bait",
      "Rhymes with mate",
      "Rhymes with date",
      "Rhymes with state",
      "Rhymes with skate",
      "Rhymes with crate",
      "Rhymes with great",
      "Rhymes with estate",
      "Rhymes with innate",
      "Rhymes with inmate",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 9) {
    let arrayOfHints = [
      "Rhymes with vine",
      "Rhymes with wine",
      "Rhymes with align",
      "Rhymes with behind",
      "Rhymes with divine",
      "Rhymes with benign",
      "Rhymes with design",
      "Rhymes with resign",
      "Rhymes with combine",
      "Rhymes with incline",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 10) {
    let arrayOfHints = [
      "Rhymes with hen",
      "Rhymes with den",
      "Rhymes with men",
      "Rhymes with zen",
      "Rhymes with when",
      "Rhymes with amen",
      "Rhymes with sven",
      "Rhymes with then",
      "Rhymes with glenn",
      "Rhymes with sebastien",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 11) {
    let arrayOfHints = [
      "Rhymes with resin",
      "Rhymes with devil",
      "Rhymes with reden",
      "Rhymes with bevan",
      "Rhymes with leaven",
      "Rhymes with steven",
      "Rhymes with eleven",
      "Rhymes with grovel",
      "Rhymes with heaven",
      "Rhymes with Mclaren",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num === 12) {
    let arrayOfHints = [
      "Rhymes with dev",
      "Rhymes with rev",
      "Rhymes with elve",
      "Rhymes with kiev",
      "Rhymes with delve",
      "Rhymes with selves",
      "Rhymes with shelve",
      "Rhymes with ourselves",
      "Rhymes with yourselves",
      "Rhymes with themselves",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else(hintText.textContent = `You can't use a rhyme hint for this number😪`, rhBtn.classList.add("disabled")); 

  //else if (num == 13) {
  //   let arrayOfHints = [
  //     "Rhymes with green",
  //     "Rhymes with been",
  //     "Rhymes with gerstein",
  //     "Rhymes with peredeen",
  //     "Rhymes with ",
  //     "Rhymes with hoo",
  //     "Rhymes with sue",
  //     "Rhymes with drew",
  //     "Rhymes with revue",
  //     "Rhymes with queue"
  //   ];
  //   let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
  //   hintText.textContent = arrayOfHints[randomizeHints];
  // } else if (num == 14) {
  //   let arrayOfHints = [
  //     "Rhymes with stu",
  //     "Rhymes with ewe",
  //     "Rhymes with due",
  //     "Rhymes with cue",
  //     "Rhymes with flu",
  //     "Rhymes with hoo",
  //     "Rhymes with sue",
  //     "Rhymes with drew",
  //     "Rhymes with revue",
  //     "Rhymes with queue"
  //   ];
  //   let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
  //   hintText.textContent = arrayOfHints[randomizeHints];
  // } else if (num == 15) {
  //   let arrayOfHints = [
  //     "Rhymes with stu",
  //     "Rhymes with ewe",
  //     "Rhymes with due",
  //     "Rhymes with cue",
  //     "Rhymes with flu",
  //     "Rhymes with hoo",
  //     "Rhymes with sue",
  //     "Rhymes with drew",
  //     "Rhymes with revue",
  //     "Rhymes with queue"
  //   ];
  //   let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
  //   hintText.textContent = arrayOfHints[randomizeHints];
  // }
  hintContainer.classList.add("showHintContainer");
  hintBtn.classList.remove("hintBtn");
  hintBtn.classList.add("visibleHintBtn");
}

hintBtn.addEventListener("click", () => {
  // hintContainer.style.display = "none";
  hintContainer.classList.remove("showHintContainer");
  hintBtn.classList.add("hintBtn");
});
