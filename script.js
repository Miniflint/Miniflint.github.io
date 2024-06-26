function toggleMenu(index) {
    const bars = document.querySelectorAll('.bar');
    const menu = bars[index].querySelector('.menu');
    const isVisible = menu.style.display === 'block';
    barswidth = bars[index].clientWidth;

    if (isVisible) {
        bars.forEach(bar => {
            const menu = bar.querySelector('.menu');
            menu.style.display = 'none';
            bar.classList.remove('expanded');
        });
    }
    // Open the selected menu if it was not already visible
    if (!isVisible) {
        // Close all menus and reset transformations
        menu.style.display = 'block';
        bars[index].classList.add('expanded');
        width = document.body.offsetWidth;
        document.documentElement.style.setProperty('--translate-x', (width - (bars.length * barswidth)) + "px"); // Adjust the width of the menu here
    }
}
