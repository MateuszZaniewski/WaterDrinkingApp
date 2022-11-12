const cupVolumes = document.querySelectorAll('.CupVol')
const progressBar = document.querySelector('.bar')
const currentVolume = document.querySelector('#currentVolume')
const saveButton = document.querySelector('.submit')

const cups = document.querySelectorAll('.cupDiv__image')  // zmienić by klikało się w cupsa
cups.forEach((el) => {
    el.addEventListener('click', FillProgressBarByClickingCupImage)
})

let progressValue = document.querySelector('progress')

saveButton.addEventListener('click', grabValuesFromSettingsFormAndAddToLocalStorage)

function FillProgressBarByClickingCupImage() {
    let progress = Number(this.dataset.size)
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

function populateHTMLFormsWithLocalStorageData() {
    const userName = document.querySelector('#name') // imie
    const userWeight = document.querySelector('#weight') // waga
    const userCupSize = document.querySelector('#cupSize') // wielkość kubka
    userName.value = localStorage.getItem('name')
    userWeight.value = localStorage.getItem('weight')
    userCupSize.value = localStorage.getItem('cupSize')
//     userName.innerHTML = localStorage.getItem("name");
//     document.getElementById("empname").value = localStorage.getItem("ls-ename");
}

function setNameForGreeting() {
    const userName = document.querySelector('.username')
    userName.innerText = localStorage.getItem('name')
}

// Funkcje generowane przy odświeżeniu strony
populateHTMLFormsWithLocalStorageData()
setNameForGreeting()



