let hintText = document.getElementById("hint-text");
let hintContainer = document.querySelector(".hint-container");
let hintBtn = document.querySelector(".hintBtn");

function showHint() {
  if (num % 2 === 0 && num % 3 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 2 and 3",
      "The number is a multiple of 2 and a multiple of 3",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 2 === 0 && num % 4 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 2 and 4",
      "The number is a multiple of 2 and a multiple of 4",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 2 === 0 && num % 5 === 0) {
    let arrayOfHints = [
      "The number ends with 0",
      "The number is divisible by both 2 and 5",
      "The number is a multiple of 2 and a multiple of 5",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 2 === 0 && num % 6 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 2 and 6",
      "The number is a multiple of 2 and a multiple of 6",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 2 === 0 && num % 7 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 2 and 7",
      "The number is a multiple of 2 and a multiple of 7",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 2 === 0 && num % 8 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 2 and 8",
      "The number is a multiple of 2 and a multiple of 8",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 2 === 0 && num % 9 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 2 and 9",
      "The number is a multiple of 2 and a multiple of 9",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  }

  // hints for numbers divisible by 3 and other numbers
  else if (num % 3 === 0 && num % 4 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 3 and 4",
      "The number is a multiple of 3 and a multiple of 4",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 3 === 0 && num % 5 === 0) {
    let arrayOfHints = [
      "This is an odd number",
      "The number ends with 5",
      "The number is divisible by both 3 and 5",
      "The number is a multiple of 3 and a multiple of 5",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 3 === 0 && num % 6 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 3 and 6",
      "The number is a multiple of 3 and a multiple of 6",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 3 === 0 && num % 7 === 0) {
    let arrayOfHints = [
      "This is either an even or odd number",
      "The number is divisible by both 3 and 7",
      "The number is a multiple of 3 and a multiple of 7",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 3 === 0 && num % 8 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 3 and 8",
      "The number is a multiple of 3 and a multiple of 8",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 3 === 0 && num % 9 === 0) {
    let arrayOfHints = [
      "This is either an even or an odd number",
      "The number is divisible by both 3 and 9",
      "The number is a multiple of 3 and a multiple of 9",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  }

  // hints for numbers divisible by 4 && others
  else if (num % 4 === 0 && num % 5 === 0) {
    let arrayOfHints = [
      "The number ends with 0",
      "The number is divisible by both 4 and 5",
      "The number is a multiple of 4 and a multiple of 5",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 4 === 0 && num % 6 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 4 and 6",
      "The number is a multiple of 4 and a multiple of 6",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 4 === 0 && num % 7 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 4 and 7",
      "The number is a multiple of 4 and a multiple of 7",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 4 === 0 && num % 8 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 4 and 8",
      "The number is a multiple of 4 and a multiple of 8",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 4 === 0 && num % 9 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 4 and 9",
      "The number is a multiple of 4 and a multiple of 9",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  }

  //hints for 5 && others
  else if (num % 5 === 0 && num % 6 === 0) {
    let arrayOfHints = [
      "The number ends with 0",
      "The number is divisible by both 5 and 6",
      "The number is a multiple of 5 and a multiple of 6",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 5 === 0 && num % 7 === 0) {
    let arrayOfHints = [
      "This is an odd number",
      "The number ends with 5",
      "The number is divisible by both 5 and 7",
      "The number is a multiple of 5 and a multiple of 7",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 5 === 0 && num % 8 === 0) {
    let arrayOfHints = [
      "The number ends with 0",
      "The number is divisible by both 5 and 8",
      "The number is a multiple of 5 and a multiple of 8",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 5 === 0 && num % 9 === 0) {
    let arrayOfHints = [
      "The number ends with 5",
      "This is an odd number",
      "The number is divisible by both 5 and 9",
      "The number is a multiple of 5 and a multiple of 9",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  }

  // hints for 6 && others
  else if (num % 6 === 0 && num % 7 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 6 and 7",
      "The number is a multiple of 6 and a multiple of 7",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 6 === 0 && num % 8 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 6 and 8",
      "The number is a multiple of 6 and a multiple of 8",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 6 === 0 && num % 9 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 6 and 9",
      "The number is a multiple of 6 and a multiple of 9",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  }

  //hnts for 7 && others
  else if (num % 7 === 0 && num % 8 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 7 and 8",
      "The number is a multiple of 7 and a multiple of 8",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 7 === 0 && num % 9 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 7 and 9",
      "The number is a multiple of 7 and a multiple of 9",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  }

  //hinnt for 8 && others
  else if (num % 8 === 0 && num % 9 === 0) {
    let arrayOfHints = [
      "The number is divisible by both 8 and 9",
      "The number is a multiple of 8 and a multiple of 9",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  }

  // normal hints
  else if (num === 1) {
    hintText.textContent = `I can divide any number without removing anything`;
  } else if (num % 2 === 0) {
    let arrayOfHints = [
      "The number is divisible by 2",
      "The number is a multiple of 2",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 3 === 0) {
    let arrayOfHints = [
      "The number is divisible by 3",
      "The number is a multiple of 3",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 4 === 0) {
    let arrayOfHints = [
      "The number is divisible by 4",
      "The number is a multiple of 4",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 5 === 0) {
    let arrayOfHints = [
      "The number is divisible by 5",
      "The number is a multiple of 5",
      "The number ends in either 0 or 5",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 6 === 0) {
    let arrayOfHints = [
      "The number is divisible by 6",
      "The number is a multiple of 6",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 7 === 0) {
    let arrayOfHints = [
      "The number is divisible by 7",
      "The number is a multiple of 7",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 8 === 0) {
    let arrayOfHints = [
      "The number is divisible by 2",
      "The number is divisible by 4",
      "The number is divisible by 8",
      "The number is a multiple of 2",
      "The number is a multiple of 4",
      "The number is a multiple of 8",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num % 9 === 0) {
    let arrayOfHints = [
      "The number is divisible by 3",
      "The number is divisible by 9",
      "The number is a multiple of 9",
    ];
    let randomizeHints = Math.floor(Math.random() * arrayOfHints.length);
    hintText.textContent = arrayOfHints[randomizeHints];
  } else if (num > 19 && num < 40) {
    hintText.textContent = `The number is greater than 19 but less than 40`;
  } else if (num > 39 && num < 50) {
    hintText.textContent = `The number is greater than 39 but less than 50`;
  } else if (num > 49 && num < 70) {
    hintText.textContent = `The number is greater than 49 but less than 70`;
  } else if (num > 69 && num < 91) {
    hintText.textContent = `The number is greater than 69 but less than 91`;
  } else if (num > 90) {
    hintText.textContent = `The number is greater than 90`;
  } else
    hintText.textContent = `You can't get a whole number after dividing me`;

  // hintContainer.style.display = "block";
  hintContainer.classList.add("showHintContainer");
  hintBtn.classList.remove("hintBtn");
  hintBtn.classList.add("visibleHintBtn");
}

hintBtn.addEventListener("click", () => {
  // hintContainer.style.display = "none";
  hintContainer.classList.remove("showHintContainer");
  hintBtn.classList.add("hintBtn");
});