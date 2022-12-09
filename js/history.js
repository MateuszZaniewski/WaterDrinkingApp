const history = {
    historyContainer : document.querySelector('.historySection__Container'),
    containerDay : document.querySelector('.container--day'),
    containerData : document.querySelector('.container--data'),
    dayList : document.querySelector('.container--day__list'),
    dataList : document.querySelector('.container--data__list'),
    dayListItem : document.querySelector('.day--list__item'),
    dataListItem : document.querySelector('.data--list__item'),
    wowImage : document.querySelector('.wowEmptyIMG'),
    username : document.querySelector('.username')
}

console.log(localStorage.getItem('name'))


function geeeting() {
    history.username.innerText = localStorage.getItem('name')
}

function populateDayListWithElements() {
    for (let i = 0 ; i < localStorage.length; i++){
        let item = localStorage.key([i])
        if(item.length > 8){
        let li = document.createElement("li");
        li.classList.add('day--list__item')
        let percent = Math.round(`${localStorage[item]}`/`${localStorage.getItem('weight')*35}`*100)
        li.innerText = `${localStorage[item]}ml / ${Math.floor(localStorage.getItem('weight')*35)}ml - ${percent}%`
        history.dayList.appendChild(li)

        let il = document.createElement('li')
        il.classList.add('day--list__item')
        il.innerText = `${item}`
        history.dataList.appendChild(il)
        }
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

populateDayListWithElements()
checkIfThereIsSomethingToDisplay()
geeeting()



