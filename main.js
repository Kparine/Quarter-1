const {
  oneServe,
  twoServe,
  ricePerson,
  waterServe
} = require('./data')

//START SERVINGS SUBMIT

function instructionsServings() {

  let riceServ = document.querySelector(".optionOne")
  let waterServ = document.querySelector(".optionOne")

  const rice = oneServe.find(ele => ele.value === parseInt(riceServ.options[riceServ.selectedIndex].value))
  if (rice) {
    document.getElementById("riceAmt").textContent += rice.description
  }

  const water = waterServe.find(ele => ele.value === parseInt(waterServ.options[waterServ.selectedIndex].value))
  if (water) {
    document.getElementById("aguaAmt").textContent += water.description
  }
}

let submit = document.querySelector('#servingSubmit')

submit.addEventListener('click', function (event) {
  instructionsServings()
  instructionsServings.textContent += event.target.textContent
})

//END SERVINGS SUBMIT

function instructionsPerson() {

  let riceAmount = document.querySelector(".optionTwo")
  let waterAmount = document.querySelector(".optionTwo")

  //START PERSON SUBMIT

  const riceTwo = ricePerson.find(ele => ele.value === parseInt(riceAmount.options[riceAmount.selectedIndex].value))
  if (riceTwo) {
    document.getElementById("riceAmt").textContent += riceTwo.description
  }

  const waterTwo = waterServe.find(ele => ele.value === parseInt(waterAmount.options[waterAmount.selectedIndex].value))
  if (waterTwo) {
    document.getElementById("aguaAmt").textContent += waterTwo.description
  }
}

let submitTwo = document.querySelector("#personSubmit")

submitTwo.addEventListener('click', function (e) {
  instructionsPerson()
  instructionsPerson.textContent += e.target.textContent
})

// //RESET BUTTON

let reset = document.querySelector('#resetSubmit')

reset.addEventListener('click', function (event) {
  event.target = location.reload();
})

//LOCAL STORAGE
// var testObject = document.getElementByID("aguaAmt")

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject))

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject')

// console.log('retrievedObject: ', JSON.parse(retrievedObject))

// function riceServ() {

// document.getElementById('hidden_elements').style.display = 'none'

// document.querySelector('submit').addEventListener('submit', function (event) {

//   if (event.target.submit === true) {
//     document.getElementById('hidden_elements').style.display = 'block'
//   } else {
//     document.getElementById('hidden_elements').style.display = 'none'
//   }
// })