// Exemplo de callback no browser

// executamos uma função callback no evento "onclick" do browser
document.getElementsByTagName('body')[0].onclick = e => {
    console.log('O envento ocorreu')
}