import * as css from "./style.css";
import { homeDiv } from "./pages/home-page.js";
const page = (() => {
    const contentDiv = document.querySelector("#content");
    const homeNavButton = document.querySelector(".nav-home");
    const menuNavButton = document.querySelector(".nav-menu");
    const contactNavButton = document.querySelector(".nav-contact");
    const loadPage = () => {
        contentDiv.appendChild(homeDiv);
    };
    return { loadPage };
})();
page.loadPage();
//# sourceMappingURL=index.js.map