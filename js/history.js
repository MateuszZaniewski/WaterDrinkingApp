const calendar = {
    monday : document.querySelector('.monday'),
    mondaySpan : document.querySelector('.monday--span')
}

const data = new Date()

console.log(data.getDay())

calendar.monday.style.height = `${localStorage.getItem('progress')/10}px`
calendar.mondaySpan.innerText = `${localStorage.getItem('progress')}ml`



//https://www.codester.com/items/18487/water-drinking-reminder-android-app-template