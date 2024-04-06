// script.js
document.addEventListener('DOMContentLoaded', function () {
    var slider = document.getElementById('slider');
    var isDown = false;
    var startX;
    var scrollLeft;

    slider.addEventListener('mousedown', function (e) {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', function () {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', function () {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', function (e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - slider.offsetLeft;
        var walk = (x - startX) * 2; // Multiply for faster scrolling
        slider.scrollLeft = scrollLeft - walk;
    });
});
