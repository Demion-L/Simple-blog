window.addEventListener("DOMContentLoaded", () => {
  //Dropdown menu

  const dropdownParent = document.querySelector(".header__nav-dropdown"),
    dropdownButton = document.querySelectorAll(".header__dropdown-btn"),
    dropdownContent = document.querySelectorAll(".dropdown__content");

  function hideDropdwnContent() {
    dropdownContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    dropdownButton.forEach((item) => {
      item.classList.remove("dropdown-content-active");
    });
  }

  function showDropdwnContent(i) {
    dropdownContent[i].classList.add("show", "fade");
    dropdownContent[i].classList.remove("hide");
    dropdownButton[i].classList.add("dropdown-content-active");
  }

  hideDropdwnContent();

  dropdownParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("header__dropdown-btn")) {
      dropdownButton.forEach((item, i) => {
        if (target == item) {
          hideDropdwnContent();
          showDropdwnContent(i);
        }
      });
    }
  });

  window.addEventListener("click", (event) => {
    const target = event.target;

    if (!target.classList.contains("header__dropdown-btn")) {
      hideDropdwnContent();
    }
  });

  //Slider
  const previous = document.querySelector('.previous'),
        next = document.querySelector('.next');

    previous.addEventListener('click', previousSlide);
    next.addEventListener('click', nextSlide);

  let slideIndex = 1;
  showSlides(slideIndex);

  function nextSlide() {
    showSlides(slideIndex += 1);
  }

  function previousSlide() {
    showSlides(slideIndex -= 1);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let slides = document.querySelectorAll('.blog__slide');

    if(n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let slide of slides) {
      slide.style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }
  
});
