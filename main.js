
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".menu-button");
    const close = document.querySelector(".menu-close");
    const menu = document.querySelector(".mobile-menu");
    const links = document.querySelectorAll(".mobile-nav a");

    if (!burger || !close || !menu) {
        console.error("Элементы бургер-меню не найдены!");
        return;
    }

    function openMenu() {
        menu.classList.add("is-open");
        burger.classList.add("is-active");
        burger.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        menu.classList.remove("is-open");
        burger.classList.remove("is-active");
        burger.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
    }

    burger.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);

    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    document.addEventListener("click", event => {
        if (
            menu.classList.contains("is-open") &&
            !menu.contains(event.target) &&
            !burger.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
});
