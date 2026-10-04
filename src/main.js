import './style.css'
import bonkMusic from "./assets/bonk_uacLPsR.mp3"
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const bonk = new Audio(bonkMusic)
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
    timerId=setInterval(randomSquare,500)
}
squares.forEach(square=>{
    square.addEventListener("mousedown",()=>{
        if(square.id == hitPosition){
            bonk.play()
            result++
            score.textContent=result
            hitPosition=null
        }
    })
})
moveHole()
function countDown(){
    currentTime--
    timeLeft.textContent=currentTime
    if(currentTime==0){
        clearInterval(countDownTimerId)
        alert("Game Over!Your  final score is"+result)
    }
}

let countDownTimerId =setInterval(countDown,1000)
