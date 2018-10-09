(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.aquaServ = [{
  description: '1/2 cup',
  value: 0.5
}, {
  description: '1 cup',
  value: 1
}, {
  description: '1 3/4 cups',
  value: 2
},
{
  description: '3 1/2 cups',
  value: 3
}, {
  description: '5 1/4 cups',
  value: 4
}, {
  description: '8 3/4 cups',
  value: 5
}
]

module.exports.personRice = [{
  description: '1/2 cup',
  value: 1
}, {
  description: '1 cup',
  value: 2
}, {
  description: '1 1/2 cups',
  value: 3
},
{
  description: '2 cups',
  value: 4
}, {
  description: '2 1/2 cups',
  value: 5
}, {
  description: '5 cups',
  value: 10
}
]

module.exports.personWater = [{
  description: '1/2 cup',
  value: 1
}, {
  description: '1 cup',
  value: 2
}, {
  description: '1 3/4 cups',
  value: 3
},
{
  description: '3 1/2 cups',
  value: 4
}, {
  description: '5 1/4 cups',
  value: 5
}, {
  description: '8 3/4 cups',
  value: 10
}
]
},{}],2:[function(require,module,exports){
const {
  aquaServ
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


function instructions() {

  let riceServ = document.querySelector("#optionOne")
  const rice = aquaServ.find(ele => ele.value === parseInt(riceServ.options[riceServ.selectedIndex].value))

  console.log('here?', rice.description)


  if (rice) {

    document.getElementById("riceAmt").textContent += rice.description

  }

}


let submit = document.querySelector('#servingSubmit')
// console.log(submit)
submit.addEventListener('click', function (event) {
  // console.log('string', event.selectedIndex)
  // console.log(event.target)
  instructions()
  instructions.textContent += event.target.textContent

})

// function instructionsTwo() { 

//   let riceServ = document.querySelector(".optionTwo").value
//   console.log(riceServ)    

//   const water = aquaServ.find(ele => ele.value === parseInt(riceServ))
//   if(water){



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
//
},{"./data":1}]},{},[2]);
