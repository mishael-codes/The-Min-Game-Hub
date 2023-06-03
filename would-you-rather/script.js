async function fetchQuestions(){
  let url = "https://would-you-rather-api.abaanshanid.repl.co/"
  
  let response = await fetch(url)
  return await response.json()
}

async function displayQuestions(){
  let questions = await fetchQuestions()
  let display = document.getElementById('question');
  let num = document.getElementById('question-number');

  num.textContent = parseInt(questions.id) + 1;
  display.textContent = questions.data;
}

let btn = document.getElementById('button');

btn.addEventListener('click', displayQuestions)