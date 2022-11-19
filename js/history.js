const calendar = {
    monday : document.querySelector('.monday'),
    mondaySpan : document.querySelector('.monday--span'),
    dataSpan : document.querySelectorAll('.calendar__ml--span'),
}

const data = new Date()

calendar.monday.style.height = `${localStorage.getItem('progress')/10}px`
calendar.mondaySpan.innerText = `${localStorage.getItem('progress')}ml`


function setValuesForChartInMl () {
    let value1 = document.querySelector('.dataValue1')
    let value2 = document.querySelector('.dataValue2')
    let value3 = document.querySelector('.dataValue3')
    let value4 = document.querySelector('.dataValue4')
    let value5 = document.querySelector('.dataValue5')
    let value6 = document.querySelector('.dataValue6')
    if(localStorage.getItem('weight') == null){
        value1.innerText = `${2400/6}`
        value2.innerText = `${2400/6*2}`
        value3.innerText = `${2400/6*3}`
        value4.innerText = `${2400/6*4}`
        value5.innerText = `${2400/6*5}`
        value6.innerText = `${2400}`
    } else {
        value1.innerText = `${Math.floor(localStorage.getItem('weight')*35/6)}`
        value2.innerText = `${Math.floor(localStorage.getItem('weight')*35/6*2)}`
        value3.innerText = `${Math.floor(localStorage.getItem('weight')*35/6*3)}`
        value4.innerText = `${Math.floor(localStorage.getItem('weight')*35/6*4)}`
        value5.innerText = `${Math.floor(localStorage.getItem('weight')*35/6*5)}`
        value6.innerText = `${Math.floor(localStorage.getItem('weight')*35)}`
    
    }
    
}

function setNameForGreeting() {
    const userName = document.querySelector('.username')
    userName.innerText = localStorage.getItem('name')
}











setValuesForChartInMl()
setNameForGreeting()


//https://www.codester.com/items/18487/water-drinking-reminder-android-app-template