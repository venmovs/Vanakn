const sliders = (slides, dir, prev, next, points, desc, activeClass) => {
    let slideIndex = 1;
    const items = document.querySelectorAll(slides),
        potint = document.querySelectorAll(points),
        descriptions = document.querySelectorAll(desc);

    
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }
        try {
            items.forEach(item => {
                item.style.display = "none";

            });
            items[slideIndex - 1].style.display = 'block';

            potint.forEach(item => {
                item.classList.remove(activeClass);
            });
            potint[slideIndex - 1].classList.add(activeClass);




            descriptions.forEach(item => {
                item.style.display = "none";
            });
            descriptions[slideIndex - 1].style.display = 'block';
        } catch (e) {}
       
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
        });
    } catch (e) {

    }
};

export default sliders;