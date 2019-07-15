'use strict';

var burger = $('.js-burger'),
    burgerMenu = $('.js-burger-menu');


burger.on('click', function(event) {
    event.preventDefault;

    burgerMenu.show();
});

burgerMenu.on('click', function(event) {
    event.preventDefault;
    this.hide();
});


