import * as css from "./style.css";
import { homeDiv } from "./pages/home-page.js";

const page = (() => {
    const contentDiv = document.querySelector("#content") as HTMLDivElement;
    
    const homeNavButton = document.querySelector(".nav-home") as HTMLButtonElement;    
    const menuNavButton = document.querySelector(".nav-menu") as HTMLButtonElement;    
    const contactNavButton = document.querySelector(".nav-contact") as HTMLButtonElement;
    
    const loadPage = () => {
        contentDiv.appendChild(homeDiv);
    }

    return { loadPage }
})();

page.loadPage();