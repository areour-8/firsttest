// script.js
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'کلیک کن!';
    button.addEventListener('click', function() {
        alert('سلام دنیا! 👋');
    });
    document.querySelector('.container').appendChild(button);
});
