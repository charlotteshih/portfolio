function handleHamburgerMenu() {
    $('.main-heading').on('click', '.hamburger', function(event) {
        console.log('hamburger menu');
    });
}

function loadPage() {
    handleHamburgerMenu();
}

$(loadPage);