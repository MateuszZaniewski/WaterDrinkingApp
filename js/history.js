const history = {
    historyContainer : document.querySelector('.historySection__Container'),
    containerDay : document.querySelector('.container--day'),
    containerData : document.querySelector('.container--data'),
    dayList : document.querySelector('.container--day__list'),
    dataList : document.querySelector('.container--data__list'),
    dayListItem : document.querySelector('.day--list__item'),
    dataListItem : document.querySelector('.data--list__item'),
    wowImage : document.querySelector('.wowEmptyIMG'),
    username : document.querySelector('.username'),
    total : document.querySelector('#total'),
    amount : document.querySelector('#amount'),
    success : document.querySelector('#success'),
    historyButtons : document.querySelectorAll('.activeButtons'),
    ttl : document.querySelector('.ttl'),
    amt : document.querySelector('.amt'),
    scs : document.querySelector('.scs')
}


//////////////////////////////// Event Listeners ///////////////////////////////////////////////////////////////////
window.addEventListener('load', checkForUserToRegister)
history.historyButtons.forEach((el) => {
    el.addEventListener('click', toggleDiffrentStats)
})

//////////////////////////////// Event Listeners ///////////////////////////////////////////////////////////////////

function checkForUserToRegister() {
    populateDayListWithElements()
    checkIfThereIsSomethingToDisplay()
    geeeting()
    calculateTotalConsumptionOfWaterAndPerDay()
}

function geeeting() {
    history.username.innerText = localStorage.getItem('name')
}

function calculateTotalConsumptionOfWaterAndPerDay() {
    let full = 0
    let days = 0
    let succes = 0
    for (let i = 0 ; i < localStorage.length; i++){
        let item = localStorage.key([i])
        if(item.length > 8){
        let percent = Math.round(`${localStorage[item]}`/`${localStorage.getItem('weight')*35}`*100)
        full += Number(localStorage[item])
        days++
            if(percent == 100){
                succes++
            }
        }
    }
    localStorage.setItem('total', full)
    history.total.innerText = `Water consumption in total : ${localStorage.getItem('total')} ml`
    history.amount.innerText = `Amount of water per day : ${Math.ceil(localStorage.getItem('total')/days)} ml`
    history.success.innerText = `Days completed : ${succes}`
}



function populateDayListWithElements() {
    for (let i = 0 ; i < localStorage.length; i++){
        let item = localStorage.key([i])
        if(item.length > 8){
        let li = document.createElement("li");
        li.classList.add('day--list__item')
        let percent = Math.round(`${localStorage[item]}`/`${localStorage.getItem('weight')*35}`*100)
        li.innerText = `${localStorage[item]}ml - ${percent}%`
        history.dayList.appendChild(li)

        let il = document.createElement('li')
        il.classList.add('day--list__item')
        il.innerText = `${item}`
        history.dataList.appendChild(il)
        }
    }
}

function toggleDiffrentStats() {
    if(this.classList.contains('ttl')){
        history.total.style.display = 'block'
        history.amount.style.display = 'none'
        history.success.style.display = 'none'
        history.ttl.classList.add('activeButton')
        history.amt.classList.remove('activeButton')
        history.scs.classList.remove('activeButton')
        
    }
    else if(this.classList.contains('amt')){
        history.total.style.display = 'none'
        history.amount.style.display = 'block'
        history.success.style.display = 'none'
        history.amt.classList.add('activeButton')
        history.ttl.classList.remove('activeButton')
        history.scs.classList.remove('activeButton')
    }
    else {
        history.total.style.display = 'none'
        history.amount.style.display = 'none'
        history.success.style.display = 'block'
        history.scs.classList.add('activeButton')
        history.amt.classList.remove('activeButton')
        history.ttl.classList.remove('activeButton')
    }
}


function checkIfThereIsSomethingToDisplay () {
    if(history.dataList.childNodes.length <= 1){
        history.containerDay.style.display = 'none'
        history.containerData.style.display = 'none'
        history.wowImage.style.display = 'block'
    }
    else {
        history.containerDay.style.display = 'block'
        history.containerData.style.display = 'block'
        history.wowImage.style.display = 'none'
    }
}





