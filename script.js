const panels = document.querySelectorAll('.panel')

panels.forEach((oValorQueEuQuiser) => {
    oValorQueEuQuiser.addEventListener('click', () => {
        removeActiveClass()
        oValorQueEuQuiser.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach((outroValor) => {
        outroValor.classList.remove('active')
    })
}