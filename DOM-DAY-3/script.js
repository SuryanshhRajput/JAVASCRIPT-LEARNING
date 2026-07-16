// const h3 = document.querySelector('#id1');

// let res = h3.getAttribute('class');

// h3.setAttribute("width", '200')

// h3.removeAttribute('class')

// console.log(h3.hasAttribute('class'))

// console.log(res)



const main = document.querySelector('main');

const box1 = document.createElement('div');
const box2 = document.createElement('div');
const box3 = document.createElement('div');

box1.classList.add('box');
box2.classList.add('box')
box3.classList.add('box')

main.append(box1, box3);

main.prepend(box2)

main.style.display = "flex"

box1.style.height="100%";
box1.style.width = "1000px";
box1.style.backgroundColor = "gray"

box2.style.height="100%";
box2.style.width = "1000px";
box2.style.backgroundColor = "beige"

box3.style.height="100%";
box3.style.width = "1000px";
box3.style.backgroundColor = "pink"

box2.before(box1)