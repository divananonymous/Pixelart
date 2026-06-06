let field = document.querySelector(".field")
let current_color = ""

for (let i = 0; i < 500; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.addEventListener("click", ()=> {
        cell.style.background = current_color
    })
    field.appendChild(cell)
}

let colors = document.querySelectorAll(".color div")
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", (e)=>{
        let target = e.target
        let color = getComputedStyle(target)
        current_color = color.backgroundColor
    })
}

let cleared = document.querySelector(".clear")
cleared.addEventListener("click", ()=>{
    current_color = "black"
    let cells = document.querySelectorAll(".cell")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "black"
    }
})
