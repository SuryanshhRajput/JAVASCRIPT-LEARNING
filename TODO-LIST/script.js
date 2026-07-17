const inp = document.querySelector("input")
const btn = document.querySelector("#AddBTN")
const todoList = document.querySelector(".todoList")

btn.addEventListener('click', () => {
    const value = inp.value;
    console.log(value);

    todoList.innerHTML += `<div class="todoList">
            <p>${value}</p>
            <button>delete</button>
            <button>edit</button>
        </div>`;


})