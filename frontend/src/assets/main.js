const addToCartElements = document.querySelectorAll(".add-to-cart")
const addToCartButtons = document.querySelectorAll(".add-to-cart button")


for(let i = 0; i < addToCartElements.length; i++) {
    addToCartElements[i].addEventListener("mouseover", e => {
        const m = e.target
        console.dir(m)
        m.nextElementSibling.style.display = "block";
        // m.nextElementSibling.classList.add("showcase")
    })
}

for(let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("mouseout", e => {
        const m = e.target
        console.dir(m)
        m.style.display = "none";
        hoverOut()
    })
}

function hoverOut() {
    for(let i = 0; i < addToCartElements.length; i++) {
        addToCartElements[i].addEventListener("mouseout", e => {
            const m = e.target
            console.dir(m)
            m.nextElementSibling.style.display = "none";
        })
    }
}

