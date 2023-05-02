const btn = document.querySelector('.circle-btn');
const list = document.querySelector('ul');
const input = document.querySelector('input');
const sort = document.querySelector('#sort');
let sorted = false;

btn.addEventListener('click', e =>{
    const info = input.value;
    const li = document.createElement('li');
    const span = document.createElement('span');
    const buttonrem = document.createElement('button');
    buttonrem.classList.add('buttonrem');
    buttonrem.addEventListener('click', e=>{
        e.target.parentElement.remove();
    })
    
    
    li.classList.add('li-clas');
    span.innerText = info;
    li.append(span, buttonrem);
    list.append(li);
    
});

sort.addEventListener('click', e=>{
    const arr = new Array();
    const items = document.querySelectorAll('li');
    items.forEach(li =>{
        arr.push(li.firstElementChild.innerText);
        });
        arr.sort();
        if(sorted){
            arr.reverse();
            sort.classList.add('g-high');
        }
        sorted =! sorted;
        list.innerHTML = '';
        arr.forEach(item =>{
            addListItem(item, list);
        });
});


