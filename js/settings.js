const settings = {
    saveButton : document.querySelector('.submit'),
    saveMassage : document.querySelector('.saveMassage__text'),
    clearStorageButton : document.querySelector('.clearStorage'),
    userName : document.querySelector('#name'),
    userWeight : document.querySelector('#weight'),
    userCupSize : document.querySelector('#cupSize'),

}
//////////////////////////////// Event Listeners ///////////////////////////////////////////////////////////////////
settings.saveButton.addEventListener('click', grabValuesFromSettingsFormAndAddToLocalStorage)
settings.clearStorageButton.addEventListener('click', clearLocalStorage)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    localStorage.setItem('progress', `0`);
    settings.saveMassage.style.display = 'block'
    setTimeout(showSaveMaggase, 3000)
}

function showSaveMaggase(){
    settings.saveMassage.style.display = 'none'
}

function populateHTMLFormsWithLocalStorageData() {
    settings.userName.value = localStorage.getItem('name')
    settings.userWeight.value = localStorage.getItem('weight')
    settings.userCupSize.value = localStorage.getItem('cupSize')
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