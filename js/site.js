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
    "img/c1.JPG",
    "img/c2.JPG",
    "img/c3.JPG",
    "img/c4.JPG",
    "img/c5.JPG"
    
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


//pokemon functionality

const pokeDiv = document.getElementById('randPoke')
const imgContain = document.getElementById('imgContain')
const pokeName = document.getElementById('pokeName')
const pokeBtn = document.getElementById('newRandom')

const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 1025) + 1);
    const result = await fetch(url);
    const data = await result.json();
    
    return {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default
    }
};


const renderPokemon = async () => {
    const pokemon = await getRandomPokemon()
    const img = document.createElement('img')
    img.id = "pokeImg" 
    img.src = pokemon.sprite
    img.alt = pokemon.name
    imgContain.append(img)

    pokeName.textContent = '#' + pokemon.id + ' ' +pokemon.name
}
renderPokemon()

const changePokemon = async () =>{
    const img = document.getElementById('pokeImg')
    const pokemon = await getRandomPokemon()
    img.src = pokemon.sprite
    img.alt = pokemon.name
    pokeName.textContent = '#' + pokemon.id + ' ' +pokemon.name
}

pokeBtn.addEventListener("click", () => {
    changePokemon()
});