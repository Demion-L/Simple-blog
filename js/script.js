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
});
