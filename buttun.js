function toggleMenu () {
    const VmainNav = document.querySelector('.VmainNav')
    const burger = document.querySelector('.burger')
    burger.addEventListener('click', () => {
        VmainNav.toggleAttribute("data-visible"); 
    })
}
toggleMenu();
