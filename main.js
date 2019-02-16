'use strict';

function handleHamburgerMenu() {
    $('#hamburger').on('click', function(event) {
        $(this).toggleClass('active');
        $('.overlay').toggleClass('open');
    });
}

function renderWorkPage() {
    $('#work').on('click', function(event) {
        $('.container').find('.js-portfolio').show();
        $('.container').find('.js-about-me').hide();
        $('.container').find('.js-contact').hide();
        console.log('work link');
    });
}

function loadPage() {
    handleHamburgerMenu();
}

$(loadPage);