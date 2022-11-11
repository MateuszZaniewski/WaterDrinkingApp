const cupVolumes = document.querySelectorAll('.CupVol')
const progressBar = document.querySelector('.bar')
const currentVolume = document.querySelector('#currentVolume')
let progressValue = document.querySelector('progress')
console.log(progressValue.value)
cupVolumes.forEach((el) => {
    el.addEventListener('click', FillProgressBar)
})

function FillProgressBar() {
    let progress = Number(this.innerText.slice(0,-3))
    console.log(progress)
    progressValue.value += progress
    currentVolume.innerText = `${progressValue.value} ml`
}




//console.log(el.innerText.slice(0,-3))