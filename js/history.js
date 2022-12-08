const history = {
    historyContainer : document.querySelector('.historySection__Container'),
    containerDay : document.querySelector('.container--day'),
    containerData : document.querySelector('.container--data'),
    dayList : document.querySelector('.container--day__list'),
    dataList : document.querySelector('.container--data__list'),
    dayListItem : document.querySelector('.day--list__item'),
    dataListItem : document.querySelector('.data--list__item')


}


function populateDayListWithElements() {
    for (let i = 0 ; i < localStorage.length; i++){
        let item = localStorage.key([i])
        if(item.length > 8){
        let li = document.createElement("li");
        li.classList.add('day--list__item')
        li.innerText = `${localStorage[item]}`
        history.dayList.appendChild(li)

        let il = document.createElement('li')
        il.classList.add('day--list__item')
        il.innerText = `${item}`
        history.dataList.appendChild(il)
        }
    }
}

populateDayListWithElements()



