const btn = document.querySelector('button')

btn.addEventListener('click',() => {
    let number = Math.floor((Math.random() *6)+1)
    console.log(number)
})