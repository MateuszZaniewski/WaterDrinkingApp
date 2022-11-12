const cupVolumes = document.querySelectorAll('.CupVol')
const progressBar = document.querySelector('.bar')
const currentVolume = document.querySelector('#currentVolume')
const congratsText = document.querySelector('.missionCompleteText')
const maxVolume = document.querySelector('#maxVolume')

const cups = document.querySelectorAll('.cupDiv__image')  // zmienić by klikało się w cupsa
cups.forEach((el) => {
    el.addEventListener('click', FillProgressBarByClickingCupImage)
})

let progressValue = document.querySelector('progress')

function FillProgressBarByClickingCupImage() {
    let progress = Number(this.dataset.size)
    progressValue.value += progress
    currentVolume.innerText = `${progressValue.value} ml`
    showSaveMaggase()
}


function setNameForGreetingAndUserCupSize() {
    const userName = document.querySelector('.username')
    if(localStorage.getItem('name') == null){
        userName.innerText = 'Stranger'
    } else {
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
    }
    else{
        maxVolume.innerText = `${localStorage.getItem('weight')*35} ml`
    }
}


function showSaveMaggase() {
    if(maxVolume.innerText == currentVolume.value){
        missionCompleteText.style.display = 'block'
    }
}

setNameForGreetingAndUserCupSize()
calculateMaxWaterPerDayForUser()
