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
        title: "AZURE<br>✅",
        class: "azure"
    },
    {
        imgSrc: "./assets/svg/backup.svg",
        imgAlt: "backup icon",
        title: "BACKUPS<br>✅",
        class: "backup"
    },
    {
        imgSrc: "./assets/svg/owa.svg",
        imgAlt: "owa icon",
        title: "OFFICE 365<br>✅",
        class: "Office 365"
    },
        {
        imgSrc: "./assets/svg/qualys.svg",
        imgAlt: "Qualys icon",
        title: "Qualys<br>✅",
        class: "Qualys"
    },
    {
        imgSrc: "./assets/svg/sharepoint.svg",
        imgAlt: "sharepoint icon",
        title: "SHAREPOINT<br>✅",
        class: "sharepoint"
    },
    {
        imgSrc: "./assets/svg/Vmware-Icon.svg",
        imgAlt: "VMware icon",
        title: "VMWARE<br>✅",
        class: "VMware"
    },
    {
        imgSrc: "./assets/svg/windowsS.svg",
        imgAlt: "windowsS icon",
        title: "WINDOWS SERVER<br>✅",
        class: "windowsS"
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