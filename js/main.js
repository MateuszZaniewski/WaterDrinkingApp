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
    registered : document.querySelector('.registeredUsersOnly')
}

const unregisteredElements = {
    inputName : document.querySelector('#name'),
    inputWeight : document.querySelector('#weight'),
    inputCupSize : document.querySelector('#cupSize'),
    submitButon : document.querySelector('.submit')
}

//////////////////////////////////////////// Event listeners ///////////////////////////////////////////////////////
elements.cups.forEach((el) => {
    el.addEventListener('click', FillProgressBarByClickingCupImage)
})
elements.resetProgressButton.addEventListener('click', resetProgressBar)
unregisteredElements.submitButon.addEventListener('click', grabValuesFromSettingsFormAndAddToLocalStorage)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayWelcomeIntroOrActualSite () {
    if(localStorage.getItem('name') == null){
        elements.unregistered.style.display = 'block'
        elements.registered.style.display = 'none'
    }
    else {
        elements.registered.style.display = 'block'
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

let clicks = 0
const data = new Date()
let day = data.getDay()


function FillProgressBarByClickingCupImage() {
    if(localStorage.getItem(`day${day}Progress`) < Math.floor(localStorage.getItem('weight')*35)){
        clicks++
        localStorage.setItem('cups', `${clicks}`)

    } 
    else if(localStorage.getItem(`day${day}Progress`) <= Math.floor(localStorage.getItem('weight')*35)){
        clicks = clicks
    }
    let progress = Number(this.dataset.size)
    elements.progressValue.value += progress
    localStorage.setItem(`day${day}Progress`,`${elements.progressValue.value}`)
    elements.currentVolume.innerText = `${localStorage.getItem(`day${day}Progress`)} ml`
    showSaveMaggase()
    console.log(localStorage.getItem(`day${day}Progress`))
    console.log(Math.floor(localStorage.getItem('weight')*35))
}


function setNameForGreetingAndUserCupSize() {
    if(localStorage.getItem('name') == null){
        elements.userName.innerText = 'Stranger'
    } else {
        elements.welcomeText.innerHTML = `Hello <span class=\"username\">${localStorage.getItem('name')}</span>!<br> Enjoy drinking some water.`
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
    if(localStorage.getItem('weight') == null){
        elements.maxVolume.innerText = '1900 ml'
        elements.progressBar.max = 1900
        elements.currentVolume.innerText = `${localStorage.getItem(`day${day}Progress`)} ml`
    }
    else{
        elements.maxVolume.innerText = `${Math.floor(localStorage.getItem('weight')*35)} ml`
        elements.progressBar.max = `${Math.floor(localStorage.getItem('weight')*35)}`
    }
}


function showSaveMaggase() {
    if(localStorage.getItem(`day${day}Progress`) == elements.progressBar.max){
        elements.congratsText.style.display = 'block'
        elements.resetProgressButton.style.display = 'flex'
    }
}

function resetProgressBar() {
    elements.progressValue.value = 0
    elements.congratsText.style.display = 'none'
    elements.resetProgressButton.style.display = 'none'
    elements.currentVolume.innerText = `${elements.progressValue.value} ml`
    localStorage.setItem(`day${day}Progress`, `0`);
    clicks = 0
    localStorage.setItem('cups', `0`)
}

function loadCurrentVolumeFromLocalStorage() {
    elements.currentVolume.innerText = `${localStorage.getItem(`day${day}Progress`)} ml`
    elements.progressBar.attributes[1].nodeValue = localStorage.getItem(`day${day}Progress`)
}

function checkForComplete() { 
    if(localStorage.getItem(`day${day}Progress`) == elements.progressBar.max){
        elements.congratsText.style.display = 'block'
        elements.resetProgressButton.style.display = 'block'
    } 
}

function checkForCurrentProgressIsNull() {
    if(localStorage.getItem(`day${day}Progress`) == null){
        localStorage.setItem(`day${day}Progress`, `0`);
    }
        for(let i = 0; i < 7; i++){
            if(localStorage.getItem(`day${i}Progress`) == null){
                localStorage.setItem(`day${i}Progress`, 0)
            }
        }
}




displayWelcomeIntroOrActualSite()  // works
setNameForGreetingAndUserCupSize() // works


calculateMaxWaterPerDayForUser() // works
loadCurrentVolumeFromLocalStorage() // works


checkForComplete() // works
checkForCurrentProgressIsNull()

if(localStorage.getItem('progressValue') == null){
   (localStorage.getItem('progressValue'))
} 

console.log(clicks)