const main = document.querySelector('main');
const btn = document.querySelector('button');
const timer = document.querySelector('#timer')

const box = document.createElement("div");
box.classList.add("box");

let time = 0;
let interval;



const randomBox = () => {
    main.append(box);
    time += 1;
        timer.textContent = time;
        const rY = Math.random() * 100;
        const rX = Math.random() * 100;

        box.style.top = `${rY}%`;
        box.style.left = `${rX}%`;
    
}

btn.addEventListener('click', () => {
    randomBox();

    clearInterval(interval);
   
    interval = setInterval(() => {
        randomBox();
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        
    }, 10000);

})