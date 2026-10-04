import './style.css'
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")

const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let result =0 
let hitPosition
let currentTime = 60
let timerId = null
function randomSquare(){
  squares.forEach(square=>{
      square.classList.remove('mole')
  })
   let randomSquare = squares[Math.floor(Math.random() * 9)]
   randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

function moveHole(){
    let timerId = null
    timerId=setInterval(randomSquare,700)
}
moveHole()