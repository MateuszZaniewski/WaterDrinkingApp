const cupVolumes = document.querySelectorAll('.CupVol')
const progressBar = document.querySelector('.bar')
const currentVolume = document.querySelector('#currentVolume')
const congratsText = document.querySelector('.missionCompleteText')
const maxVolume = document.querySelector('#maxVolume')
const resetProgressButton = document.querySelector('.resetYourDayButton')
const welcomeText = document.querySelector('#greet')
console.log(welcomeText.innerHTML)

const cups = document.querySelectorAll('.cupDiv__image')  // zmienić by klikało się w cupsa
cups.forEach((el) => {
    el.addEventListener('click', FillProgressBarByClickingCupImage)
})

resetProgressButton.addEventListener('click', resetProgressBar)

let progressValue = document.querySelector('progress')

function FillProgressBarByClickingCupImage() {
    let progress = Number(this.dataset.size)
    progressValue.value += progress
    localStorage.setItem('progress',`${progressValue.value}`)
    currentVolume.innerText = `${localStorage.getItem('progress')} ml`
    showSaveMaggase()
}


function setNameForGreetingAndUserCupSize() {
    const userName = document.querySelector('.username')
    if(localStorage.getItem('name') == null){
        userName.innerText = 'Stranger'
    } else {
        welcomeText.innerHTML = `Hello <span class=\"username\">${localStorage.getItem('name')}</span>!<br> Enjoy drinking some water.`
        userName.innerText = localStorage.getItem('name')
    }
   
    const userCupSize = document.querySelector('.favCupVol')
    if(localStorage.getItem('cupSize') == null){
        userCupSize.innerText = 'Your cup (ml)'
    } else {
        userCupSize.innerText = `${localStorage.getItem('cupSize')} ml`
        const yourCup = document.querySelector('.cupDiv__yourCup')
        yourCup.dataset.size = localStorage.getItem('cupSize')
    }
    
}

function calculateMaxWaterPerDayForUser() {
    if(localStorage.getItem('weight') == null){
        maxVolume.innerText = '1900 ml'
        progressBar.max = 1900
        currentVolume.innerText = `${localStorage.getItem('progress')} ml`
    }
    else{
        maxVolume.innerText = `${Math.floor(localStorage.getItem('weight')*35)} ml`
        progressBar.max = `${Math.floor(localStorage.getItem('weight')*35)}`
    }
}


function showSaveMaggase() {
    if(localStorage.getItem('progress') == progressBar.max){
        congratsText.style.display = 'block'
        resetProgressButton.style.display = 'flex'
    }
}

function resetProgressBar() {
    progressValue.value = 0
    congratsText.style.display = 'none'
    resetProgressButton.style.display = 'none'
    currentVolume.innerText = `${progressValue.value} ml`
    localStorage.setItem('progress', `0`);
}

function loadCurrentVolumeFromLocalStorage() {
    currentVolume.innerText = `${localStorage.getItem('progress')} ml`
    progressBar.attributes[1].nodeValue = localStorage.getItem('progress')
}

function checkForComplete() { 
    if(localStorage.getItem('progress') == progressBar.max){
        congratsText.style.display = 'block'
        resetProgressButton.style.display = 'flex'
    }
}

function checkForCurrentProgressIsNull() {
    if(localStorage.getItem('progress') == null){
        localStorage.setItem('progress', `0`);
    }
}

setNameForGreetingAndUserCupSize()
calculateMaxWaterPerDayForUser()
loadCurrentVolumeFromLocalStorage()
checkForComplete()
checkForCurrentProgressIsNull()

if(localStorage.getItem('progressValue') == null){
    console.log(localStorage.getItem('progressValue'))
} 