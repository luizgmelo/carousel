const app = document.querySelector("#root")

const images = {
  "1": "assets/img/pexels-aviv-perets-19308036.jpg",
  "2": "assets/img/pexels-hatice-baran-19055796.jpg",
  "3": "assets/img/pexels-nina-hill-19020394.jpg",
  "4": "assets/img/pexels-polina-semernina-16519636.jpg",
  "5": "assets/img/pexels-saso-ucitelj-19416038.jpg",
  "6": "assets/img/pexels-stayhereforu-12753391.jpg",
  "7": "assets/img/pexels-tubanur-dogan-19481069.jpg ",
  "8": "assets/img/pexels-tubanur-dogan-19481175.jpg",
}

// DOM  

const title = document.createElement("h1")
title.textContent = "Carousel"
title.className = "title"

const container = document.createElement("div")
container.className = "container"

const image = document.createElement("img");
image.className = "image"
image.setAttribute("src", images[1])

const divButtons = document.createElement("div")
divButtons.className = "buttons"

const btPrev = document.createElement("button")
btPrev.textContent = " < "
btPrev.setAttribute("id", "btPrev")
btPrev.setAttribute("type", "button")
btPrev.className = "btn"

const btNext = document.createElement("button")
btNext.textContent = " > "
btNext.setAttribute("id", "btNext")
btNext.setAttribute("type", "button")
btNext.className = "btn"

divButtons.appendChild(btPrev)
divButtons.appendChild(btNext)

container.appendChild(image)
container.appendChild(divButtons)

app.appendChild(title)
app.appendChild(container)


// functions 
let index = 1

function showNextImage() {
  if (index >= 8) {
    index = 0
  }
  image.src = `${images[++index]}`
}

const next = document.querySelector("#btNext");
next.addEventListener("click", showNextImage);


function showPrevImage() {
  if (index <= 1) {
    index = 9
  }
  image.src = `${images[--index]}`
}

const prev = document.querySelector("#btPrev");
prev.addEventListener("click", showPrevImage);
