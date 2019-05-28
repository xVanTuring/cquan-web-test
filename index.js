import CQuant from 'cquant-web'
import WASM from "cQuantWASM"
let cquant = new CQuant(WASM, true)
// make sure you add crossorigin="anonymous" to the img
let img = document.querySelector('.img')
cquant.palette(img, 5).then((result) => {
    let container = document.querySelector(".block-container")
    for (let item of result) {
        let box = document.createElement('div')
        box.className = "box"
        box.style.backgroundColor = `rgb(${item.red},${item.green},${item.blue})`
        container.appendChild(box)

    }
})