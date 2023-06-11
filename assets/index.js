
$(document).ready(function () {
    var main_slider = $('.main-slider')
    if (main_slider) {
        main_slider.not('.slick-initialized').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: 'linear'
        });
    }

    var filed_slider = $('.filed-slider')
    if (filed_slider) {
        filed_slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }


    const project_item_inner = document.querySelectorAll('.project-item .inner')
    const project_item = document.querySelectorAll('.project-item')

    project_item_inner.forEach((e) => {
        e.onmouseover = function () {
            var parent = e.parentElement
            if (!parent.classList.contains('hover')) {
                project_item.forEach((e) => {
                    e.classList.remove('hover')
                })
                parent.classList.add('hover')
            }
        }
    })

    // scroll




})

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    let currentSectionIndex = 0;
    let isThrottled = false;

    const changeSection = (index) => {
        sections[currentSectionIndex].classList.remove('active');
        sections[index].classList.add('active');
        currentSectionIndex = index;
    };

    const scrollToSection = (index) => {
        if (index < 0 || index >= sections.length) return;
        changeSection(index);
        const targetPosition = sections[index].offsetTop;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    scrollToSection(0); // scroll lần đầu khi load page

    window.addEventListener('wheel', (event) => {
        if (isThrottled) return;
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
        }, 1000);

        const direction = event.deltaY > 0 ? 1 : -1;

        if (direction === 1 && currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        } else if (direction === -1 && currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    });

    changeSection(currentSectionIndex);
});