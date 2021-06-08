// import main scss file
import './src/scss/main.scss'
import 'bootstrap/scss/bootstrap.scss'


const line_bar = document.getElementById('hamburger');
line_bar.addEventListener('click', function(e) {
    const nav_item = document.querySelector('.nav_item');
    nav_item.classList.toggle('menu-slide');
    line_bar.classList.toggle('cross');
});

