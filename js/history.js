const calendar = {
    dataSpan : document.querySelectorAll('.calendar__ml--span'),
    scale : document.querySelector('.calendar__scale'),
    ml : document.querySelector('.calendar__ml'),
    averagePerDay : document.querySelector('.averagePerDay'),
    averagePerGlass : document.querySelector('.averagePerGlass'),
    averageSuccessRate : document.querySelector('.averageSuccessRate'),
    values : {
        value1 : document.querySelector('.dataValue1'),
        value2 : document.querySelector('.dataValue2'),
        value3 : document.querySelector('.dataValue3'),
        value4 : document.querySelector('.dataValue4'),
        value5 : document.querySelector('.dataValue5'),
        value6 : document.querySelector('.dataValue6'),
    },
    days : [document.querySelector('.sunday'),
            document.querySelector('.monday'), 
            document.querySelector('.thuesday'),
            document.querySelector('.wednesday'),
            document.querySelector('.thursday'),
            document.querySelector('.friday'),
            document.querySelector('.saturnday'),
    ],}

function setLocalStorageValuesForDaysOfWeek(){
    for(let i = 0; i < 7; i++){
        if(localStorage.getItem(`day${i}`) == null){
            localStorage.setItem(`day${i}`, 0)
        }}}


function findAndSetValuesForToday () {
    const data = new Date()
    for(let i = 0; i < 7; i++){
        if(data.getDay() == i){
            localStorage.setItem(`day${i}`, `${localStorage.getItem('progress')}`)
            calendar.days[i].style.height = `${(localStorage.getItem(`day${i}`)/Math.floor(localStorage.getItem('weight')*35))*100}%`
        }}}

function setValuesForSpecificDayOfWeek() {
    for(let i = 0; i < 7; i++){
        calendar.days[i].style.height = `${(localStorage.getItem(`day${i}`)/Math.floor(localStorage.getItem('weight')*35))*100}%`
    }
}

function setValuesForChartInMl () {
    if(localStorage.getItem('weight') == null){
        calendar.values.value1.innerText = `${2400/6}`
        calendar.values.value2.innerText = `${2400/6*2}`
        calendar.values.value3.innerText = `${2400/6*3}`
        calendar.values.value4.innerText = `${2400/6*4}`
        calendar.values.value5.innerText = `${2400/6*5}`
        calendar.values.value6.innerText = `${2400}`
    } else {
        calendar.values.value1.innerText = `${Math.floor(localStorage.getItem('weight')*35/6)}`
        calendar.values.value2.innerText = `${Math.floor(localStorage.getItem('weight')*35/6*2)}`
        calendar.values.value3.innerText = `${Math.floor(localStorage.getItem('weight')*35/6*3)}`
        calendar.values.value4.innerText = `${Math.floor(localStorage.getItem('weight')*35/6*4)}`
        calendar.values.value5.innerText = `${Math.floor(localStorage.getItem('weight')*35/6*5)}`
        calendar.values.value6.innerText = `${Math.floor(localStorage.getItem('weight')*35)}`
     }}

function setNameForGreeting() {
    const userName = document.querySelector('.username')
    userName.innerText = localStorage.getItem('name')
}

function calculateAverageMlPerDay() {
    let average = 0
    for(let i = 0; i < 7; i++){
        average += Number(`${localStorage.getItem(`day${i}`)}`)
    }
    console.log(average)
    calendar.averagePerDay.innerText = `Average ml per day : ${Math.floor(average/7)} ml`
}

function calculateAverageMlPerGlass() {
    localStorage.getItem('cups')
    let average = 0
    for(let i = 0; i < 7; i++){
        average += Number(`${localStorage.getItem(`day${i}`)}`)
    }
    console.log(average)
    calendar.averagePerGlass.innerText = `Average ml per glass : ${Math.floor(average/localStorage.getItem('cups'))} ml`
}

function calculateAverageSuccessRate() {

}

const data = new Date()
console.log(data.getDay())









setLocalStorageValuesForDaysOfWeek()
setValuesForChartInMl()
setNameForGreeting()
findAndSetValuesForToday()
calculateAverageMlPerDay()
calculateAverageMlPerGlass()
setValuesForSpecificDayOfWeek()

//https://www.codester.com/items/18487/water-drinking-reminder-android-app-template