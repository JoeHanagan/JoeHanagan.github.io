//alert("Welcome!!")

//Welcome div
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeDiv = document.getElementById('welcome')//Find the correct div
const welcomeMessage = document.createElement('p')// create variable paragraph thing

//solve for time
if (isMorning){
    welcomeMessage.textContent="Good Morning!"
}else if (isAfternoon) {
    welcomeMessage.textContent="Good Afternoon!"
} else {
    welcomeMessage.textContent="Good Evening!"
}

//append greeting
welcomeDiv.append(welcomeMessage)