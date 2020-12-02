const btn = document.querySelector('button')

btn.addEventListener('click',() => {
    let number = Math.floor((Math.random() *6)+1)
    document.getElementById('img').src = `./images/dice${number}.png`;
})