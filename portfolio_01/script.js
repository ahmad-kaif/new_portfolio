// code for changing text on hero page
const text = document.querySelector('#changeText');
let arr = ['Coder', 'Developer', 'Problem Solver', 'Part time Rapper'];
let index = 0;
let charIndex = 0;
let currentWord = arr[index];
let isDeleting = false;

const typeEffect = function() {
    if (charIndex < currentWord.length && !isDeleting) {
        text.innerHTML += currentWord[charIndex];
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        text.innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);  // Pause before deleting
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % arr.length;
        currentWord = arr[index];
    }

    setTimeout(typeEffect, isDeleting ? 50 : 150);
};
typeEffect();

// code for dark mode and light mode

