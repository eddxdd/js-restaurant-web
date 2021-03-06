let carousels = document.getElementsByClassName('image-carousel');

[].forEach.call(carousels, function (c) {
    let next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        bubblesContainer = c.getElementsByClassName('bubbles')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = 100,
        bubbles = [];

    for (let i = 0; i < imgs.length; i++) {
        let b = document.createElement('span');
        b.classList.add('bubble');
        bubblesContainer.appendChild(b);
        bubbles.push(b);

        b.addEventListener('click', function () {
            currentImageIndex = i;
            switchImg();
        });
    }

    function switchImg () {
        inner.style.left = -width * currentImageIndex + 'vw';

        bubbles.forEach(function (b, i) {
            if (i === currentImageIndex) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    }

    function showNext() {
        currentImageIndex++;

        if (currentImageIndex >= imgs.length) {
            currentImageIndex = 0;
        }

        switchImg();
    }

    function showPrev() {
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = imgs.length - 1;
        }

        switchImg();
    }

    next.addEventListener('click', showNext);

    prev.addEventListener('click', showPrev);

    switchImg();

    setInterval(showNext, 5000);
});
