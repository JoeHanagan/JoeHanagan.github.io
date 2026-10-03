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


//local storage section
localStorage.setItem("It's a secret to everybody.","23 is number 1!")

//carousel
const urls = [
    'https://cdn.corenexis.com/f/aYi7eXh4jew.jpg',
    'https://cdn.corenexis.com/f/8Ul2QTSOH0u.jpg',
    'https://cdn.corenexis.com/f/h7qvQ00LBiY.jpg',
    'https://cdn.corenexis.com/f/zYUiMSeaBAp.jpg',
    'https://cdn.corenexis.com/f/F1UgBIFyWnq.jpg'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()


//button functionality
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

prev.addEventListener("click", () => {
   if(currentImage == 0){
    currentImage = 4
   }
   else{
    currentImage--
   }
   showImages()
});

next.addEventListener("click", () => {
   if(currentImage == 4){
    currentImage = 0
   }
   else{
    currentImage++
   }
   showImages()
});

//auto scroller
setInterval(() => {
    if(currentImage == 4){
    currentImage = 0
   }
   else{
    currentImage++
   }
   showImages()
}, 5000)