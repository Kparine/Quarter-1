const {
  oneServe,
  twoServe,
  ricePerson,
  waterServe
} = require('./data')


//configs here from jquery library
// animation: "smooth",
// count_past_zero: true,
// Minutes: {
//   show: true,
//   text: "Minutes",
//   color: "#BFB"
//   },
//   Seconds: {
//   show: true,
//   color: "#F99"
//   }


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
  submitTwo.setAttribute('disabled', 'true')
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
  submit.setAttribute('disabled', 'true')
})
// //RESET BUTTON

let reset = document.querySelector('#resetSubmit')

reset.addEventListener('click', function (event) {
  event.target = location.reload();
})

//TIMER FUNCTIONS

$(".demo").TimeCircles({
  time: {
    Days: {
      show: false
    },

    Hours: {
      show: false,

    },

    Minutes: {
      color: "#4286f4"
    },
    Seconds: {
      color: "#41f4c4",
    }
  },
  count_past_zero: false,
  start: false,
  direction: "Counter-clockwise",
  count_past_zero: false,
  circle_bg_color: '#70000000'
}).addListener(function (total) {
  if(total === 0){

  } 

  //(callback, type = "visible")

  //add audio file here
})
$("#start").click(function () {
  $(".demo").TimeCircles().start();
});
$("#stop").click(function () {
  $(".demo").TimeCircles().stop();
});
$("#restart").click(function () {
  $(".demo").TimeCircles().restart();
});

//LOCAL STORAGE
// var testObject = document.getElementByID("aguaAmt")

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject))

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject')

// console.log('retrievedObject: ', JSON.parse(retrievedObject))