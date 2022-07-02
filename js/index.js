const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMais = document.querySelector('.mais')
const buttonMenos = document.querySelector('.menos')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes
let seconds
const forrest = document.querySelector('.forrest')
const rain = document.querySelector('.rain')
const coffeHouse = document.querySelector('.coffe-house')
const fire = document.querySelector('.fire')
const audioForrest = new Audio("./sounds/Floresta.wav")
const audioRain = new Audio("./sounds/Chuva.wav")
const audioFire = new Audio("./sounds/Lareira.wav")
const audioCoffeHouse = new Audio("./sounds/Cafeteria.wav")
const kitchenTimer = new Audio("./sounds/audios_kichen-timer.mp3")

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let finished = minutes <= 0 && seconds <= 0
    updateDisplay(minutes, 0)

    if (finished) {
      updateDisplay()
      kitchenTimer.play()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}
function Mais(){
  minutesDisplay.textContent = String(
    Number(minutesDisplay.textContent) + 5
  ).padStart(2, '0')
}
function updateDisplay(minutes, seconds) {
  minutes = minutes === undefined ? 25 : minutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}
function Menos(){
  if(minutesDisplay.textContent <= 4 ){
    updateDisplay(0, 0)
  }
  else{
    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) - 5).padStart(2, '0')
  }
}

buttonPlay.addEventListener('click', function(){
  countdown()
})
buttonMais.addEventListener('click', function(){
  Mais()
})
buttonMenos.addEventListener('click', function(){
  Menos()
})
buttonStop.addEventListener('click', function(){
  updateDisplay(0, 0)
})

function focusForrest(){
  if (forrest.classList.contains('focus')){
    forrest.classList.remove('focus')
    audioForrest.pause()
  } else{
    audioForrest.play()
    audioForrest.loop = true
    audioFire.pause()
    audioRain.pause()
    audioCoffeHouse.pause()
    forrest.classList.add('focus')
    rain.classList.remove('focus')
    coffeHouse.classList.remove('focus')
    fire.classList.remove('focus')
  }
}
function focusRain(){
    if (rain.classList.contains('focus')){
      rain.classList.remove('focus')
      audioRain.pause()
    } else{
      audioRain.play()
      audioRain.loop = true
      audioForrest.pause()
      audioFire.pause()
      audioCoffeHouse.pause()
      forrest.classList.remove('focus')
      rain.classList.add('focus')
      coffeHouse.classList.remove('focus')
      fire.classList.remove('focus')
    }
}
function focusCoffeHouse(){
    if (coffeHouse.classList.contains('focus')){
      coffeHouse.classList.remove('focus')
      audioCoffeHouse.pause()
    } else{
      audioCoffeHouse.play()
      audioCoffeHouse.loop = true
      audioForrest.pause()
      audioFire.pause()
      audioRain.pause()
      forrest.classList.remove('focus')
      rain.classList.remove('focus')
      coffeHouse.classList.add('focus')
      fire.classList.remove('focus')
    }
}
function focusFire(){
    if (fire.classList.contains('focus')){
      fire.classList.remove('focus')
      audioFire.pause()
    } else{
      audioFire.play()
      audioFire.loop = true
      audioForrest.pause()
      audioRain.pause()
      audioCoffeHouse.pause()
      forrest.classList.remove('focus')
      rain.classList.remove('focus')
      coffeHouse.classList.remove('focus')
      fire.classList.add('focus')
    }
}
forrest.addEventListener('click', function(){
  focusForrest()
})
rain.addEventListener('click', function(){
  focusRain()
})
coffeHouse.addEventListener('click', function(){
  focusCoffeHouse()
})
fire.addEventListener('click', function(){
  focusFire()
})

