// ✅ Fixed all bugs

const para = document.querySelector('#message'); // Fixed id
const textButton = document.getElementById('textButton'); // Fixed method
textButton.addEventListener('click', () => { // Fixed method name
    para.textContent = 'New Message'; // Fixed property
});

const box = document.getElementById('box');
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
    box.style.backgroundColor = 'blue'; // Fixed typo
});