const images = [
  "image1.gif",
  "image2.png",
  "image3.gif",
  "image4.png",
  "image5.gif",
  "image6.png",
  "image7.png",
  "image8.gif",
  "image9.png",
  "image10.gif",
  "image11.gif",
  "image12.gif",
  "image13.png",  
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")

  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 30 - 10) + "deg)"

  document.getElementById('laboratoire').appendChild(img)

  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

document.getElementById('laboratoire').addEventListener("click", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})
