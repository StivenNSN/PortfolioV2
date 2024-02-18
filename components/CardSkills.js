const d = document;
export default function generarCards() {
// Definir un objeto con los datos de las cards
const cardsData = [
    {
        imgSrc: "./assets/svg/aws.svg",
        imgAlt: "aws icon",
        title: "AWS<br>✅",
        class: "aws"
    },
    {
        imgSrc: "./assets/svg/azure.svg",
        imgAlt: "azure icon",
        title: "Azure<br>✅",
        class: "azure"
    },
    {
        imgSrc: "./assets/svg/backup.svg",
        imgAlt: "backup icon",
        title: "Backups<br>✅",
        class: "backup"
    },
    {
        imgSrc: "./assets/svg/owa.svg",
        imgAlt: "owa icon",
        title: "Office 365<br>✅",
        class: "Office 365"
    },
    {
        imgSrc: "./assets/svg/sharepoint.svg",
        imgAlt: "sharepoint icon",
        title: "sharepoint<br>✅",
        class: "sharepoint"
    },
    {
        imgSrc: "./assets/svg/windowsS.svg",
        imgAlt: "windowsS icon",
        title: "Windows Server<br>✅",
        class: "windowsS"
    },
    {
        imgSrc: "./assets/svg/file-type-html.svg",
        imgAlt: "HTML icon",
        title: "HTML<br>✅",
        class: "html"
    },
    {
        imgSrc: "./assets/svg/css-color.svg",
        imgAlt: "CSS icon",
        title: "CSS<br>✅",
        class: "css"
    },
    {
        imgSrc: "./assets/svg/javascript-fill.svg",
        imgAlt: "Javascript icon",
        title: "Javascript<br>✅",
        class: "javascript"
    },
    {
        imgSrc: "./assets/svg/angular.svg",
        imgAlt: "angular icon",
        title: "Angular<br>✅",
        class: "angular"
    },
    {
        imgSrc: "./assets/svg/npm-wordmark.svg",
        imgAlt: "Wordpress icon",
        title: "npm<br>✅",
        class: "npm"
    },
    {
        imgSrc: "./assets/svg/git.svg",
        imgAlt: "git icon",
        title: "Git<br>✅",
        class: "git"
    },
        
];

// Obtener el contenedor de las cards
const cardsContainer = d.querySelector('.skills__cajas');

// Crear las cards dinámicamente utilizando template strings
for (const data of cardsData) {
    const cardHTML = `
        <div class="skills__caja caja__dark">
            <div class="img">
                <img class="skills__icono skills__icono__dark
                ${data.class}"
                src="${data.imgSrc}"
                alt="${data.imgAlt}">
            </div>
            <div class="skills__texto">
                <p class="text head titulo__dark">
                    ${data.title}
                </p>
            </div>
        </div>
    `;

    // Agregar la card al contenedor
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
}
}


generarCards();