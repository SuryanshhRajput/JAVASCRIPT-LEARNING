const createBtn = document.querySelector("#c");
const formDiv = document.querySelector(".form");
const cros = document.querySelector("#cros")
const form = document.querySelector("form");
const productDiv = document.querySelector('.product-card');



const productsArr = [];

let ui = () => {
    productDiv.innerHTML = "";
    productsArr.forEach((elem) => {


        productDiv.innerHTML += `
        <img src="${elem.image}" alt="">
            <h3>${elem.productName}</h3>
            <p>${elem.discription}</p>
            <div class="buttons">
                <button class="upadte">Update</button>
                <button class="delete">Delete</button>
            </div>`
    })
}

cros.addEventListener('click', () => {
    formDiv.style.display = "none";
})


createBtn.addEventListener("click", () => {
    formDiv.style.display = "flex";
})


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let productName = event.target[0].value;
    let discription = event.target[1].value;
    let image = event.target[2].value;

    let obj = {
        productName,
        discription,
        image,
    };

    productsArr.push(obj);
    ui();
    console.log(productsArr)

    form.reset();
    formDiv.style.display = "none";
})
