const cupVolumes = document.querySelectorAll('.CupVol')
const progressBar = document.querySelector('.bar')
const currentVolume = document.querySelector('#currentVolume')
let progressValue = document.querySelector('progress')
const subButton = document.querySelector('.submit')
cupVolumes.forEach((el) => {
    el.addEventListener('click', FillProgressBar)
})
subButton.addEventListener('click', grabValuesFromSettingsFormAndAddToLocalStorage)

function FillProgressBar() {
    let progress = Number(this.innerText.slice(0,-3))
    console.log(progress)
    progressValue.value += progress
    currentVolume.innerText = `${progressValue.value} ml`
}

function grabValuesFromSettingsFormAndAddToLocalStorage(){
    let name = document.querySelector('#name').value
    let weight = document.querySelector('#weight').value
    let gender = document.querySelector('#gender').value
    let cupSize = document.querySelector('#cupSize').value
    console.log(name, weight, gender, cupSize)
    localStorage.setItem('name', `${name}`);
    localStorage.setItem('weight', `${weight}`);
    localStorage.setItem('gender', `${gender}`);
    localStorage.setItem('cupSize', `${cupSize}`);
}

// const userName = document.querySelector('#userName')
// userName.innerHTML = localStorage.getItem("name");

//https://stackoverflow.com/questions/40598081/how-to-populate-an-html-input-field-from-html-localstorage