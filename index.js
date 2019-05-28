import CQuant from 'cquant-web'
import WASM from "cQuantWASM"
let cquant = new CQuant(WASM, true)
cquant.palette("https://picsum.photos/id/482/1920/1080", 10).then((result) => {
    let container = document.querySelector(".block-container")
    for (let item of result) {
        let box = document.createElement('div')
        box.className = "box"
        box.style.backgroundColor = `rgb(${item.red},${item.green},${item.blue})`
        container.appendChild(box)

    }
})