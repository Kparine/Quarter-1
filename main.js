const {
  oneServe,
  twoServe,
  ricePerson,
  waterServe
} = require('./data')

//START SERVINGS SUBMIT

const riceAmount = localStorage.getItem('riceAmt')
if (riceAmount) document.getElementById('riceAmt').textContent += riceAmount

const waterAmount = localStorage.getItem('aguaAmt')
if (waterAmount) document.getElementById('aguaAmt').textContent += waterAmount

function instructionsServings() {

  let riceServ = document.querySelector(".optionOne")
  let waterServ = document.querySelector(".optionOne")

  const rice = oneServe.find(ele => ele.value === parseInt(riceServ.options[riceServ.selectedIndex].value))
  if (rice) {
    document.getElementById("riceAmt").textContent = rice.description
  }

  const water = waterServe.find(ele => ele.value === parseInt(waterServ.options[waterServ.selectedIndex].value))
  if (water) {
    document.getElementById("aguaAmt").textContent = water.description
  }
  
  localStorage.setItem('riceAmt', rice.description)
  localStorage.setItem('aguaAmt', water.description)
}

let submit = document.querySelector('#servingSubmit')
submit.addEventListener('click', function (event) {
  instructionsServings()
  instructionsServings.textContent += event.target.textContent
  submitTwo.setAttribute('disabled', 'true')
})

//END SERVINGS SUBMIT


function instructionsPerson() {
  let riceAmount = document.querySelector('.optionTwo')
  let waterAmount = document.querySelector('.optionTwo')

  //START PERSON SUBMIT

  const riceTwo = ricePerson.find(ele => ele.value === parseInt(riceAmount.options[riceAmount.selectedIndex].value))
  if (riceTwo) {
    document.getElementById('riceAmt').textContent = riceTwo.description
  }
  const waterTwo = waterServe.find(ele => ele.value === parseInt(waterAmount.options[waterAmount.selectedIndex].value))
  if (waterTwo) {
    document.getElementById('aguaAmt').textContent = waterTwo.description
  }

  localStorage.setItem('riceAmt', riceTwo.description)
  localStorage.setItem('aguaAmt', waterTwo.description)

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

$(".demo").TimeCircles({count_past_zero: false}).addListener(countdownComplete);
	
function countdownComplete(unit, value, total){
	if(total<=0){
    $(this).fadeOut('slow').replaceWith("<h1>Ding, Rice is Done!</h1>") 
    document.querySelector('#alarm').play()
 
  } 
}

