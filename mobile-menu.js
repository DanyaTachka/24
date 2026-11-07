document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menuClose = document.querySelector(".menu-close");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-nav a");

    if (!menuButton || !menuClose || !mobileMenu) {
        console.error("Не найдены элементы мобильного меню!");
        return;
    }

    function openMenu() {
        mobileMenu.classList.add("is-open");
        menuButton.classList.add("is-active");
        menuButton.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        mobileMenu.classList.remove("is-open");
        menuButton.classList.remove("is-active");
        menuButton.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
    }

    menuButton.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", event => {
        if (
            mobileMenu.classList.contains("is-open") &&
            !mobileMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) closeMenu();
    });
});