$(document).ready(function () {
    $(".section__team-slider").slick({
        // dots: true,
        slidesToShow: 3,
        arrows: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1285,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 925,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
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
    slidesPerView: 1, 

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


    function hideNameError() {
        document.querySelector("#form__input-name").classList.remove("form-error");
    };

    function hidePhoneError() {
        document.querySelector(".input__error-tel").style.display = "none";
        document.querySelector("#form__input-tel").classList.remove("form-error");
    };

    document.getElementsByName("name")[0].addEventListener('input', hideNameError);
    document.getElementsByName("tel")[0].addEventListener('input', hidePhoneError);

    openPopupBtn.addEventListener('click', function (e) {
        e.preventDefault();

        let nameInput = document.getElementsByName("name")[0].value;
        if (nameInput.trim() === "") {
            document.querySelector("#form__input-name").classList.add("form-error");
            return;
        } else {
            hideNameError();
            };

        let phoneInput = document.getElementsByName("tel")[0].value;
        let phoneValid = /^\d+$/;

        if (phoneInput.trim() === "") {
            document.querySelector("#form__input-tel").classList.add("form-error");
            return;
        } else if (!phoneValid.test(phoneInput)) {
            document.querySelector("#form__input-tel").classList.add("form-error");
            document.querySelector(".input__error-tel").style.display = "block";
            
            return;
        } else {
            hidePhoneError(); 
            };

        popup.style.display = "block";
        sectionForm.classList.remove("form-activ");

        document.querySelector(".form").reset();
    });

    const dropMenu = document.querySelector(".header__nav-dropmenu")
    const dropMenuOpen = document.querySelector(".header__burger-menu").addEventListener("click", () => {
        dropMenu.style.display = "block";
    });
    const dropMenuCloze = document.querySelector(".dropmenu-btn").addEventListener("click", () => {
        dropMenu.style.display = "none";
    });
    
});

