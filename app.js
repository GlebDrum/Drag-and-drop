const item = document.querySelector ('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart) // перетаскиваем
item.addEventListener('dragend', dragend) // закончили перетаскивать

for ( const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) // когда элемент который перетаскивается над placeholder
    placeholder.addEventListener('dragenter', dragenter) // когда элемент заходит на территорию placeholder
    placeholder.addEventListener('dragleave', dragleave) // когда элемент перетаскивали но вышли из области
    placeholder.addEventListener('drop', dragdrop) // когда элемент отпустили
}


function dragstart (event) {
    event.target.classList.add ('hold')
    const timeoutId = setTimeout(() =>  {
        event.target.classList.add ('hide');
        clearTimeout(timeoutId);
    }, 0);
}

function dragend (event) {
    event.target.classList.remove ('hold', 'hide')
}

function dragover (event) {
    event.preventDefault()
   
}

function dragenter (event) {
    event.target.classList.add('hovered')
    
}

function dragleave (event) {
    event.target.classList.remove('hovered')
    
}

function dragdrop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}

