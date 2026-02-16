import * as css from "./style.css";
import { homeDiv } from "./pages/home-page.js";
import { menuDiv } from "./pages/menu-page.js";
import { contactDiv } from "./pages/contact-page.js";
const page = (() => {
    const contentDiv = document.querySelector("#content");
    const homeNavButton = document.querySelector(".nav-home");
    const menuNavButton = document.querySelector(".nav-menu");
    const contactNavButton = document.querySelector(".nav-contact");
    const loadPage = (page) => {
        let pageDiv;
        switch (page) {
            case "home":
                pageDiv = homeDiv;
                break;
            case "menu":
                pageDiv = menuDiv;
                break;
            case "contact":
                pageDiv = contactDiv;
                break;
            default: pageDiv = document.createElement("div");
        }
        contentDiv.innerHTML = "";
        contentDiv.appendChild(pageDiv);
    };
    homeNavButton.addEventListener("click", (e) => { e.preventDefault(); loadPage("home"); });
    menuNavButton.addEventListener("click", (e) => { e.preventDefault(); loadPage("menu"); });
    contactNavButton.addEventListener("click", (e) => { e.preventDefault(); loadPage("contact"); });
    // load homepage by default
    contentDiv.appendChild(homeDiv);
    return { loadPage };
})();
//# sourceMappingURL=index.js.map