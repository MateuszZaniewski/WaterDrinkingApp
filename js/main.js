const cupVolumes = document.querySelectorAll('.CupVol')
const progressBar = document.querySelector('.bar')
const currentVolume = document.querySelector('#currentVolume')

const cups = document.querySelectorAll('.cupDiv__image')  // zmienić by klikało się w cupsa
cups.forEach((el) => {
    el.addEventListener('click', FillProgressBarByClickingCupImage)
})

let progressValue = document.querySelector('progress')

function FillProgressBarByClickingCupImage() {
    let progress = Number(this.dataset.size)
    progressValue.value += progress
    currentVolume.innerText = `${progressValue.value} ml`
}


function setNameForGreeting() {
    const userName = document.querySelector('.username')
    userName.innerText = localStorage.getItem('name')
}

setNameForGreeting()
