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