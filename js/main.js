const elements = {
    cupVolumes : document.querySelectorAll('.CupVol'),
    progressBar : document.querySelector('.bar'),
    currentVolume : document.querySelector('#currentVolume'),
    congratsText : document.querySelector('.missionCompleteText'),
    maxVolume : document.querySelector('#maxVolume'),
    resetProgressButton : document.querySelector('.resetYourDayButton'),
    welcomeText : document.querySelector('#greet'),
    progressValue : document.querySelector('progress'),//
    userName : document.querySelector('.username'),
    userCupSize : document.querySelector('.favCupVol'),
    yourCup : document.querySelector('.cupDiv__yourCup'),
    cups : document.querySelectorAll('.cupDiv__image'),
    unregistered : document.querySelector('.forNewUsersOnly'),
    registered : document.querySelector('.registeredUsersOnly'),
    substractON : document.querySelector('.ON'),
    substractOFF : document.querySelector('.OFF'),
}

const unregisteredElements = {
    inputName : document.querySelector('#name'),
    inputWeight : document.querySelector('#weight'),
    inputCupSize : document.querySelector('#cupSize'),
    submitButon : document.querySelector('.submit')
}

let substractMode = false;

//////////////////////////////////////////// Event listeners ///////////////////////////////////////////////////////
elements.cups.forEach((el) => {
    el.addEventListener('click', FillProgressBarByClickingCupImage)
})
elements.resetProgressButton.addEventListener('click', resetProgressBar)
unregisteredElements.submitButon.addEventListener('click', grabValuesFromSettingsFormAndAddToLocalStorage)
elements.substractON.addEventListener('click', toggleSubstractWaterON)
elements.substractOFF.addEventListener('click', toggleSubstractWaterOFF)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayWelcomeIntroOrActualSite () {
    if(localStorage.getItem('name') == null){
        elements.unregistered.style.display = 'flex'
        elements.registered.style.display = 'none'
    }
    else {
        elements.registered.style.display = 'flex'
        elements.unregistered.style.display = 'none'
    }
}

function grabValuesFromSettingsFormAndAddToLocalStorage(){
    let name = document.querySelector('#name').value
    let weight = document.querySelector('#weight').value
    let cupSize = document.querySelector('#cupSize').value
    console.log(name, weight, cupSize)
    localStorage.setItem('name', `${name}`);
    localStorage.setItem('weight', `${weight}`);
    localStorage.setItem('cupSize', `${cupSize}`);
    location.reload()
    

}
const options = {year: 'numeric', month: 'long', day: 'numeric' };
let clicks = 0
const newDate = new Date('2322-02-09')
const data = newDate.toLocaleDateString("en-US", options)

function FillProgressBarByClickingCupImage() {
    if(localStorage.getItem(data) < Math.floor(localStorage.getItem('weight')*35)){
        clicks++
        localStorage.setItem('cups', `${clicks}`)

    } 
    else if(localStorage.getItem(data) <= Math.floor(localStorage.getItem('weight')*35)){
        clicks = clicks
    }
    let progress = Number(this.dataset.size)
    let clickedImg = this

    if(substractMode == false){
        elements.progressValue.value += progress
        localStorage.setItem(data,`${elements.progressValue.value}`)
        elements.currentVolume.innerText = `${localStorage.getItem(data)} ml`
        clickedImg.classList.toggle('shake')
        function removeShake(){
            clickedImg.classList.toggle('shake')
        }
        setTimeout(removeShake, 1000)
        
    } else {
        if(localStorage.getItem(data) != elements.progressBar.max){
            elements.progressValue.value -= progress
            localStorage.setItem(data,`${elements.progressValue.value}`)
            elements.currentVolume.innerText = `${localStorage.getItem(data)} ml`
            clickedImg.classList.toggle('shake')
        function removeShake(){
            clickedImg.classList.toggle('shake')
        }
        setTimeout(removeShake, 1000)
        }
    }
    showSaveMaggase()
}

function toggleSubstractWaterON() {
    if(elements.substractOFF.style.background = '#b1d7f8'){
        elements.substractON.style.background = '#b1d7f8'
        elements.substractOFF.style.background = '#ffffff'
        substractMode = true
        return substractMode
    }
}

function toggleSubstractWaterOFF() {
    if(elements.substractON.style.background = '#b1d7f8'){
        elements.substractOFF.style.background = '#b1d7f8'
        elements.substractON.style.background = '#ffffff'
        substractMode = false
        return substractMode
    }
}

function setNameForGreetingAndUserCupSize() {
    if(localStorage.getItem('name') == null){
        elements.userName.innerText = 'Stranger'
    } else {
        elements.welcomeText.innerHTML = `Hello <span class=\"username\">${localStorage.getItem('name')}</span>!<br> Your daily goal is to drink ${Math.floor(localStorage.getItem('weight')*35)} ml of water.`
        elements.userName.innerText = localStorage.getItem('name')
    }
   
    if(localStorage.getItem('cupSize') == null){
        elements.userCupSize.innerText = 'Your cup (ml)'
    } else {
        elements.userCupSize.innerText = `${localStorage.getItem('cupSize')} ml`
        elements.yourCup.dataset.size = localStorage.getItem('cupSize')
    }
    
}

function calculateMaxWaterPerDayForUser() {
        elements.maxVolume.innerText = `${Math.floor(localStorage.getItem('weight')*35)} ml`
        elements.progressBar.max = `${Math.floor(localStorage.getItem('weight')*35)}`
}


function showSaveMaggase() {
    if(localStorage.getItem(data) == elements.progressBar.max){
        elements.congratsText.style.display = 'block'
        elements.resetProgressButton.style.display = 'flex'
    }
}

function resetProgressBar() {
    elements.progressValue.value = 0
    elements.congratsText.style.display = 'none'
    elements.resetProgressButton.style.display = 'none'
    elements.currentVolume.innerText = `${elements.progressValue.value} ml`
    localStorage.setItem(data, `0`);
    clicks = 0
    localStorage.setItem('cups', `0`)
}

function loadCurrentVolumeFromLocalStorage() {
    if(localStorage.getItem(data) == null){
        elements.currentVolume.innerText = '0 ml'
    }
    else {
        elements.currentVolume.innerText = `${localStorage.getItem(data)} ml`
        elements.progressBar.attributes[1].nodeValue = localStorage.getItem(data)
    }
    
}

function checkForComplete() { 
    if(localStorage.getItem(data) == elements.progressBar.max){
        elements.congratsText.style.display = 'block'
        elements.resetProgressButton.style.display = 'block'
    } 
}
loadCurrentVolumeFromLocalStorage() // works
displayWelcomeIntroOrActualSite()  // works
setNameForGreetingAndUserCupSize() // works
calculateMaxWaterPerDayForUser() // works
checkForComplete() // works