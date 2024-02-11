$(document).ready(function () {
    $(".section__team-slider").slick({
        // dots: true,
        slidesToShow: 3,
        arrows: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});


new Swiper('.section__reviews-slider', {
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
loop: true,
});

// ==================form=========================



document.addEventListener('DOMContentLoaded', () => {
    const sectionForm = document.querySelector("#section__form");
    const openForm = document.querySelectorAll("#open-form");
    const clozeForm = document.querySelectorAll(".form-close");
    const formBtn = document.querySelector(".form-btn");
    const popup = document.querySelector("#section__popup");

    openForm.forEach(open => {
        open.addEventListener("click", () => {
            sectionForm.classList.add("form-activ");
        });
    });

    clozeForm.forEach(closes => {
        closes.addEventListener("click", () => {
            sectionForm.classList.remove("form-activ");
            popup.style.display = "none";
        });
    });

    formBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        popup.style.display = "block";
        sectionForm.classList.remove("form-activ");
    })
});
