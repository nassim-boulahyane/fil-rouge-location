function toggleMenu () {
    const menuburger = document.querySelector('.menuburger')
    const burger = document.querySelector('.burger')
    burger.addEventListener('click', () => {
        menuburger.classList.toggle("visible");
    });
    
};

toggleMenu();
