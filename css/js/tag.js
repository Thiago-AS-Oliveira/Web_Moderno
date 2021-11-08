const colors = {
    p: '#388e3c',
    div: '#1565c5',
    span: '#e53935',
    section: '#f76809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6582',
    body: '#25b6da',
    padrão: '#616161',
    get(tag) {
        // se existir a tag correspondente a cor, retorna a cor, se não, retorna a cor padrão
        return this[tag] ? this[tag] : this[padrão]
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)// chama o metodo get do objeto colors

    if(!elemento.classList.contains('nolabel')) { // se a classList não conter "nolabel"
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) //adiciona label antes do primeiro elemento da tag
    }
})