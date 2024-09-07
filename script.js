function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#img-logo-codigoF")
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/logo CódigoF_light.png')
    } else {
        img.setAttribute('src', './assets/logo CódigoF_dark.png')
    }

}