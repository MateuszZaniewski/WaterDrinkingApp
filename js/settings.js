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
window.addEventListener('load', checkForUserToRegister)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkForUserToRegister() {
    console.log('Load sucessfully')
    if(localStorage.getItem('name') == null){
        window.location.href = '/'
        location.reload()
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
    setNameForGreeting()
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
    if (confirm('Are You sure, You want to clear your data and progress?')) {
        // Save it!
        localStorage.clear()
        console.log('Progress cleared');
      } else {
        // Do nothing!
        console.log('Your safe');
      }
    
}

populateHTMLFormsWithLocalStorageData()
setNameForGreeting()