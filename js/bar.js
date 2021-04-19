menu = document.querySelector('#menu-toggle');

x = document.querySelector('#x-toggle');

sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function (e) {
    sidebar.classList.add('show');
});

x.addEventListener('click', function (e) {
    sidebar.classList.remove('show');
});