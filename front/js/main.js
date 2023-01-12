
const playBtn = document.querySelector('.sam__main-wheel-btn'),
      playBtnText = document.querySelector('.sam__main-wheel-btn span'),
      wheel = document.querySelector('.sam__main-wheel-reel'),
      tries = document.querySelector('.try-number'),
      //triesFull = document.querySelector('.sam__main-left-try'),
      overlay = document.querySelector('.sam__overlay'),
      popupFirst = document.querySelector('.sam__firstWin'),
      popupFirstBtn = document.querySelector('.sam__firstWin-btn'),
      popupSecond = document.querySelector('.sam__secondWin'),
      //popupSecondRules = document.querySelector('.sam__secondWin-rules'),
      rules = document.querySelector('.sam__rules'),
      footerRulesBtn = document.querySelector('.sam__footer-rules'),
      overflow = document.querySelector('body'),
      popupClose = document.querySelector('.sam__rules-close'),
      wrapper = document.querySelector('.sam'),
      totalTriesCounter = 2,
      imageTitle1 = document.querySelector('.sam__main-left-try_img1'),
      imageTitle2 = document.querySelector('.sam__main-left-try_img2'),
      presentWheel = document.querySelector('.sam__main-wheel_present'),
      mainSam = document.querySelector('.sam__main'),
      footerSam = document.querySelector('.sam__footer')



let triesCounter = 0

function blurAdd(){
    mainSam.classList.add('_blur');
    footerSam.classList.add('_blur');
}

function blurRemove(){
    mainSam.classList.remove('_blur');
    footerSam.classList.remove('_blur');
}

footerRulesBtn.addEventListener('click', () => {
    blurAdd()
    overlay.classList.remove('opacity-overlay')
    rules.classList.remove('hide')
    overlay.classList.add('_overflow')
})


popupClose.addEventListener('click', () => {
    blurRemove()
    overlay.classList.add('opacity-overlay')
    rules.classList.add('hide')
    overflow.style.overflow = 'unset'
    overlay.classList.remove('_overflow')
})

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()

    } else {
        runSecondRotation()
    }
})

function updTriesCounter() {
    const cnt = totalTriesCounter - triesCounter
    if (cnt === 2) {
        tries.innerText = "В тебе 2 спроби"
    } else if (cnt === 1) {
        tries.innerText = "В тебе 1 спроба"
    } else {
        tries.innerText = "В тебе 0 спроб"
    }
}

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    playBtn.classList.remove('pulse-btn')
    playBtnText.classList.add('hide')
    playBtn.style.transform = 'scale(0.7)'
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
    updTriesCounter()
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(992deg)'
    wheel.classList.remove('reel-rotation-first')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    blurAdd()
    setTimeout(() => {

        playBtn.classList.add('pulse-btn')
        playBtnText.classList.remove('hide')
        playBtn.style.transform = 'scale(1)'
        playBtn.style.cursor = 'pointer'
    }, 1200)
    setTimeout(() => {
        imageTitle1.style.display = 'none'
        imageTitle2.style.display = 'block'
        presentWheel.style.display = 'block'
    }, 500)

}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    playBtn.classList.remove('pulse-btn')
    playBtnText.classList.add('hide')
    playBtn.style.transform = 'scale(0.7)'
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterSecondRotation()
        blurAdd()
    }, 6000)
    triesCounter++
    updTriesCounter()
}

function doAfterSecondRotation() {
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
}

popupFirstBtn.addEventListener('click', () => {
    blurRemove()
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'

})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
}
