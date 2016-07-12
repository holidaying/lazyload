// 图片延迟
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    function loadImage(imgEl) {
        const src = imgEl.getAttribute('data-src');
        setTimeout(function() {
            imgEl.style.opacity = "1";
            imgEl.style.transition = "opacity .4s ease";
            imgEl.src = src;
            imgEl.removeAttribute('data-src');
        }, 1000);

    }

    function isToLoad(imgEl) {
        const rect = imgEl.getBoundingClientRect(),
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        return (
            rect.left >= 0 &&
            (rect.top >= -viewportHeight - rect.height && rect.top <= viewportHeight * 2)
        );
    }

    function lazyLoad() {
        const images = document.querySelectorAll('img[data-src]');
        [].forEach.call(images, image => {
            if (isToLoad(image)) {
                image.style.opacity = "0.2";
                image.style.transition = "opacity .6s ease";
                loadImage(image);
            }
        });
    }
    lazyLoad();
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('touchmove', lazyLoad);
});
