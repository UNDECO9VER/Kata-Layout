const brandSwiper = new Swiper('.brand-slider', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 'auto',
    spaceBetween: 16,

    breakpoints: {
        768: {
            spaceBetween: 0
        }
    }


});
const techSwiper = new Swiper('.technique-slider', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 'auto',
    spaceBetween: 16,

    breakpoints: {
        768: {
            spaceBetween: 0,

        }
    }


});
const priceSwiper = new Swiper('.prices-slider', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 'auto',
    spaceBetween: 16,

    breakpoints: {
        768: {
            spaceBetween: 0
        }
    }


});

const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
    if (e.matches) {
        brandSwiper.disable();
        techSwiper.disable();
        priceSwiper.disable();
    } else {
        brandSwiper.enable();
        techSwiper.enable();
        priceSwiper.enable();
    }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

const container = document.querySelectorAll('.common-slider__list');
const btn = document.querySelectorAll('.more-btn');
const btnBefore = document.querySelectorAll('.more-btn::before');
console.log(btnBefore);

btn.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (btn[index].textContent === "Скрыть"){
            container[index].removeAttribute("style");
            btn[index].textContent = "Показать всё";
            btn[index].classList.remove('expanded-image');
        }else {
            console.log(btn[index].textContent);
            container[index].style.maxHeight = container[index].scrollHeight +'px';
            btn[index].textContent = "Скрыть";
            btn[index].classList.add('expanded-image');
        }


    })
})







