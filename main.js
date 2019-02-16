'use strict';

function handleHamburgerMenu() {
    $('#hamburger').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.overlay').toggleClass('open');
    });
}

function handleHamburgerClose() {
    $('.menu-overlay').on('click', '.mob-nav-link', function(event) {
        $('#hamburger').toggleClass('active');
        $('.overlay').toggleClass('open');
    });
}

function loadPage() {
    handleHamburgerMenu();
    handleHamburgerClose();
}

$(loadPage);