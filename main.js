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