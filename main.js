const input = document.getElementById('input-box')
const listContainer = document.getElementById('li-container')

function addTask() {
    if(input.value === '') {
        alert('Anda harus memasukkan sesuatu')
    } else {
        let li = document.createElement("li")
        li.textContent = input.value;

        listContainer.appendChild(li)
        let span = document.createElement('span')

        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    console.log(listContainer)
    input.value = '';
    saveData()
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showList();