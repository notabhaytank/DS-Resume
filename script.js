window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
}
