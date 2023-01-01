var input = document.querySelector('input');
var button = document.querySelector('button');
var list = document.getElementById('list')
var ul = document.querySelector('ul')

button.addEventListener('click', ()=> {
    let task = input.value;

    if (task.length > 4) {
        input.style.color="black"
        let li = document.createElement('li')
        let icon = document.createElement('ion-icon')

        ul.appendChild(li)
        li.classList.add('task')
        li.innerHTML = task;

        li.appendChild(icon)
        icon.setAttribute('name', "close-circle-outline")

        input.value = ""
    } else {
        alert("Veuillez saisir au moins 5 caractères");
        input.value = ""
    }
})

list.addEventListener('click', (event)=> {
    if(event.target.tagName=="ION-ICON") {
        event.target.parentNode.remove()
    }

})