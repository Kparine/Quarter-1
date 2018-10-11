(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.oneServe = [{
  description: '1/2 cup of',
  value: 0
}, {
  description: '1 cup of',
  value: 1
}, {
  description: '2 cups of',
  value: 2
},
{
  description: '3 cups of',
  value: 3
}, {
  description: '4 cups of',
  value: 4
}, {
  description: '5 cups of',
  value: 5
}
]

module.exports.twoServe = [{
  description: 'of 1/2 cup',
  value: 0
}, {
  description: 'of 1 cup',
  value: 1
}, {
  description: 'of 1 1/2 cups',
  value: 2
},
{
  description: 'of 2 cups',
  value: 3
}, {
  description: 'of 2 1/2 cups',
  value: 4
}, {
  description: 'of 5 cups',
  value: 5
}
]

module.exports.ricePerson = [{
  description: 'of 1/2 cup',
  value: 0
}, {
  description: 'of 1 cup',
  value: 1
}, {
  description: 'of 1 1/2 cups',
  value: 2
},
{
  description: 'of 2 cups',
  value: 3
}, {
  description: 'of 2 1/2 cups',
  value: 4
}, {
  description: 'of 5 cups',
  value: 5
}
]

module.exports.waterServe = [{
  description: '1 cup of',
  value: 0
}, {
  description: '1 3/4 cup of',
  value: 1
}, {
  description: '2 3/4 cups of',
  value: 2
},
{
  description: '3 1/2 cups of',
  value: 3
}, {
  description: '4 1/2 cups of',
  value: 4
}, {
  description: '8 3/4 cups of',
  value: 5
}
]
},{}],2:[function(require,module,exports){
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
},{"./data":1}]},{},[2]);
