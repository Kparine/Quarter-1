(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.oneServe = [{
  description: '1/2 cup of',
  value: 0.5
}, {
  description: '1 cup of',
  value: 1
}, {
  description: '1 3/4 cups of',
  value: 2
},
{
  description: '3 1/2 cups of',
  value: 3
}, {
  description: '5 1/4 cups of',
  value: 4
}, {
  description: '8 3/4 cups of',
  value: 5
}
]

module.exports.twoServe = [{
  description: 'of 1/2 cup',
  value: 1
}, {
  description: 'of 1 cup',
  value: 2
}, {
  description: 'of 1 1/2 cups',
  value: 3
},
{
  description: 'of 2 cups',
  value: 4
}, {
  description: 'of 2 1/2 cups',
  value: 5
}, {
  description: 'of 5 cups',
  value: 10
}
]

module.exports.personServe = [{
  description: 'of 1/2 cup',
  value: 1
}, {
  description: 'of 1 cup',
  value: 2
}, {
  description: 'of 1 3/4 cups',
  value: 3
},
{
  description: 'of 3 1/2 cups',
  value: 4
}, {
  description: 'of 5 1/4 cups',
  value: 5
}, {
  description: 'of 8 3/4 cups',
  value: 10
}
]
},{}],2:[function(require,module,exports){
const {
  oneServe
} = require('./data')

const {
  twoServe
} = require('./data')

const {
  personServe
} = require('./data')
// function riceServ() {

// document.getElementById('hidden_elements').style.display = 'none'

// document.querySelector('submit').addEventListener('submit', function (event) {

//   if (event.target.submit === true) {
//     document.getElementById('hidden_elements').style.display = 'block'
//   } else {
//     document.getElementById('hidden_elements').style.display = 'none'
//   }
// })
function instructionsServings() {

  let riceServ = document.querySelector("#optionOne")
  let waterServ = document.querySelector("#optionOne")

  const rice = oneServe.find(ele => ele.value === parseInt(riceServ.options[riceServ.selectedIndex].value))
  const water = twoServe.find(ele => ele.value === parseInt(riceServ.options[riceServ.selectedIndex].value))
  if (rice) {

    document.getElementById("riceAmt").textContent += rice.description
    document.getElementById("aguaAmt").textContent += rice.description
  }
}

let submit = document.querySelector('#servingSubmit')

submit.addEventListener('click', function (event) {
  instructionsServings()
  instructionsServings.textContent += event.target.textContent
})
//     // find place to display
//     // place description there
//     // unhide
//   }

// }

// let submitTwo = document.querySelector('#servingSubmit')
// console.log(submit)
// submitTwo.addEventListener('click', function (event) {
//   instructionsTwo()
//   // instructions.textContent += event.target.textContent

// })


// let submit = document.querySelector('.servings')

// submit.addEventListener('submit', function (event) {
//   instructions.textContent += event.target.textContent



//   })
let reset = document.querySelector('#resetSubmit')

reset.addEventListener('click', function (event) {
  
  event.target = location.reload();
})



//
},{"./data":1}]},{},[2]);
