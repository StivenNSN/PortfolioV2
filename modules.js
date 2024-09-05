const d =document;
import playSound from "./controllers/electricSound.js";
import hamburgerMenu from "./controllers/hamburger.js";
import toggleDarkMode from "./controllers/darkTheme.js"
import {toTop} from "./controllers/toTop.js";
import inputs from  "./controllers/form.js";
import generarCards from "./components/CardSkills.js";
import CardsPortafolio from "./components/CardsPortafolio.js";
import { loadVideo } from "./controllers/latestYTVideos.js";




CardsPortafolio();

const languageToggle = document.getElementById('language-toggle');
const languageOptions = document.getElementById('language-options');

languageToggle.addEventListener('click', () => {
  languageOptions.classList.toggle('hidden');
});