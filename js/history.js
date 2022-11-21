const calendar = {
    dataSpan : document.querySelectorAll('.calendar__ml--span'),
    scale : document.querySelector('.calendar__scale'),
    ml : document.querySelector('.calendar__ml'),
    averagePerDay : document.querySelector('.averagePerDay'),
    averagePerGlass : document.querySelector('.averagePerGlass'),
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
    ],
    valuesSpans : [document.querySelector('.sunday--span'),
                   document.querySelector('.monday--span'),
                   document.querySelector('.thuesday--span'),
                   document.querySelector('.wednesday--span'),
                   document.querySelector('.thursday--span'),
                   document.querySelector('.friday--span'),
                   document.querySelector('.saturnday--span'),],
}

    const data = new Date()
    let day = data.getDay()

    console.log(calendar.valuesSpans)

function setLocalStorageValuesForDaysOfWeek(){
        if(localStorage.getItem(`day${day}`) == null)
            localStorage.setItem(`day${day}`, 0)
        }

function findAndSetValuesForToday () {
                localStorage.setItem(`day${day}`, `${localStorage.getItem(`day${day}Progress`)}`)
        }

function setValuesForSpecificDayOfWeek() {
    for(let i = 0; i < 7; i++){
        calendar.days[i].style.height = `${(localStorage.getItem(`day${i}Progress`)/Math.floor(localStorage.getItem('weight')*35))*100}%`
    }
}

function loadCurrentVolumeFromLocalStorageIntoColumnSpans() {
    for(let i = 0; i < 7; i++){
            calendar.valuesSpans[i].innerText = localStorage.getItem(`day${i}Progress`)
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
        average += Number(`${localStorage.getItem(`day${day}`)}`)
    }
    calendar.averagePerDay.innerText = `Average ml per day : ${Math.floor(average/7)} ml`
}

function calculateAverageMlPerGlass() {
    localStorage.getItem('cups')
    let average = 0
    for(let i = 0; i < 7; i++){
        average += Number(`${localStorage.getItem(`day${day}`)}`)
    }
    calendar.averagePerGlass.innerText = `Average ml per glass : ${Math.floor(average/localStorage.getItem('cups'))} ml`
}

function initiateProgressValuesIfTheyNotExist() {
    for(let i = 0; i < 7; i++){
        if(localStorage.getItem(`day${i}Progress`) == null){
            localStorage.setItem(`day${i}Progress`, 0)
        }
    }
}


setLocalStorageValuesForDaysOfWeek()
setValuesForChartInMl()
setNameForGreeting()
findAndSetValuesForToday()
calculateAverageMlPerDay()
calculateAverageMlPerGlass()
setValuesForSpecificDayOfWeek()
loadCurrentVolumeFromLocalStorageIntoColumnSpans()
initiateProgressValuesIfTheyNotExist()