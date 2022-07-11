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
const wallpaper =  document.getElementById('wallpaper')
const mode = document.querySelector('.modulos')
const clear = document.querySelector('body')
const dia = document.querySelector('.dia')
const noite = document.querySelector('.dark')
const hide = document.querySelector('.hide')

function modelight(){
  clear.classList.add('light')
  dia.classList.add('hide')
  noite.classList.remove('hide')
}
function modeDark(){
  clear.classList.remove('light')
  dia.classList.remove('hide')
  noite.classList.add('hide')
}



function updateWallpaperForrest(){
  if(wallpaper.classList.contains('img-florest')){
    wallpaper.classList.remove('img-florest')
    wallpaper.classList.add('fundo')
  }else{
  wallpaper.classList.add('img-florest')
  wallpaper.classList.remove('img-coffe')
  wallpaper.classList.remove('img-fire')
  wallpaper.classList.remove('img-rain')
  wallpaper.classList.remove('fundo')
}}
function updateWallpaperFire(){
  if(wallpaper.classList.contains('img-fire')){
    wallpaper.classList.remove('img-fire')
    wallpaper.classList.add('fundo')
  }else{
  wallpaper.classList.remove('img-florest')
  wallpaper.classList.remove('img-coffe')
  wallpaper.classList.add('img-fire')
  wallpaper.classList.remove('img-rain')
  wallpaper.classList.remove('fundo')
}}
function updateWallpaperCoffe(){
  if(wallpaper.classList.contains('img-coffe')){
    wallpaper.classList.remove('img-coffe')
    wallpaper.classList.add('fundo')
  }else{
  wallpaper.classList.remove('img-florest')
  wallpaper.classList.add('img-coffe')
  wallpaper.classList.remove('img-fire')
  wallpaper.classList.remove('img-rain')
  wallpaper.classList.remove('fundo')
}}
function updateWallpaperrain(){
  if(wallpaper.classList.contains('img-rain')){
    wallpaper.classList.remove('img-rain')
    wallpaper.classList.add('fundo')
    
  }else{
  wallpaper.classList.remove('img-florest')
  wallpaper.classList.remove('img-coffe')
  wallpaper.classList.remove('img-fire')
  wallpaper.classList.add('img-rain')
  wallpaper.classList.remove('fundo')
}}

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

function volume(){
  update = setTimeout(function(){
    switch (forrest.classList.contains('focus')){
      case true:
        percentageForrest = document.querySelector('.volumeForest')
        audioForrest.volume = percentageForrest.value / 100
        break
      default:
        document.querySelector('.volumeForest').value = 50
        audioForrest.volume = 0.5
        break
    }
    switch (rain.classList.contains('focus')){
      case true:
      percentageRain = document.querySelector('.volumeRain')
      audioRain.volume = percentageRain.value / 100
      break
      default:
        document.querySelector('.volumeRain').value = 50
        audioRain.volume = 0.5
        break
    }
    switch (coffeHouse.classList.contains('focus')){
      case true:
      percentageCoffe = document.querySelector('.volumeCoffe')
      audioCoffeHouse.volume = percentageCoffe.value / 100
      break
      default:
        document.querySelector('.volumeCoffe').value = 50
        audioCoffeHouse.volume = 0.5
        break
    }
    switch (fire.classList.contains('focus')){
      case true:
      percentageFire = document.querySelector('.volumeFire')
      audioFire.volume = percentageFire.value / 100
      break
      default:
        document.querySelector('.volumeFire').value = 50
        audioFire.volume = 0.5
        break
    }
    volume()
  }, 1)
}

volume()


forrest.addEventListener('click', function(){
  focusForrest() 
  updateWallpaperForrest() 
})
rain.addEventListener('click', function(){
  focusRain() 
  updateWallpaperrain()
  
})
coffeHouse.addEventListener('click', function(){
  focusCoffeHouse()
  updateWallpaperCoffe()
})
fire.addEventListener('click', function(){
  focusFire()
  updateWallpaperFire()
})
dia.addEventListener('click', function(){
  modelight()
})
noite.addEventListener('click', function(){
  modeDark()
})
