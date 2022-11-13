const saveButton = document.querySelector('.submit')
saveButton.addEventListener('click', grabValuesFromSettingsFormAndAddToLocalStorage)
const saveMassage = document.querySelector('.saveMassage__text')
const clearStorageButton = document.querySelector('.clearStorage')
clearStorageButton.addEventListener('click', clearLocalStorage)

function grabValuesFromSettingsFormAndAddToLocalStorage(){
    let name = document.querySelector('#name').value
    let weight = document.querySelector('#weight').value
    let gender = document.querySelector('#gender').value
    let cupSize = document.querySelector('#cupSize').value
    let progressValue = document.querySelector('#currentVolume')
    console.log(name, weight, gender, cupSize)
    localStorage.setItem('name', `${name}`);
    localStorage.setItem('weight', `${weight}`);
    localStorage.setItem('gender', `${gender}`);
    localStorage.setItem('cupSize', `${cupSize}`);
    localStorage.setItem('progressValue', `0`);
    saveMassage.style.display = 'block'
    setTimeout(showSaveMaggase, 3000)
}

function showSaveMaggase(){
    saveMassage.style.display = 'none'
}

function populateHTMLFormsWithLocalStorageData() {
    const userName = document.querySelector('#name') // imie
    const userWeight = document.querySelector('#weight') // waga
    const userCupSize = document.querySelector('#cupSize') // wielkość kubka
    userName.value = localStorage.getItem('name')
    userWeight.value = localStorage.getItem('weight')
    userCupSize.value = localStorage.getItem('cupSize')
}

function setNameForGreeting() {
    const userName = document.querySelector('.username')
    userName.innerText = localStorage.getItem('name')
}

function clearLocalStorage() {
    localStorage.clear()
}


populateHTMLFormsWithLocalStorageData()
setNameForGreeting()