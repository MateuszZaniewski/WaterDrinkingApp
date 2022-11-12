const saveButton = document.querySelector('.submit')
saveButton.addEventListener('click', grabValuesFromSettingsFormAndAddToLocalStorage)


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
}

function setNameForGreeting() {
    const userName = document.querySelector('.username')
    userName.innerText = localStorage.getItem('name')
}


populateHTMLFormsWithLocalStorageData()
setNameForGreeting()