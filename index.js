let listContainer = document.querySelector('.list-container');
let inputBox = document.querySelector("#inputbox");

let btn = document.querySelector(".btn")

btn.addEventListener('click', function(){
    if(inputBox.value === '') {
        alert('Enter new task')
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }
    inputBox.value = '';
    storeData() 
})

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        storeData() 
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        storeData() 
    }
});

function storeData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData()