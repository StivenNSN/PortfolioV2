export default function CardsPortafolio(){
    const portafolioData = [
        {
            imgSrc: "../assets/img/PortfolioImg/portfolio-5.jpg",
            titulo: "New Portfolio",
            skills: [],
            descripcion: "Portfolio Personal",
            demoURL: "https://bssanchezf31.netlify.app",
            repoURL: "https://github.com/StivenNSN/PortfolioV2"
        },
        {
            imgSrc: "../assets/img/PortfolioImg/portfolio-4.jpg",
            titulo: "Mundo Libros - World Books",
            skills: [],
            descripcion: "Mis libros leidos favoritos",
            demoURL: "https://librosv2html.netlify.app/",
            repoURL: "https://github.com/StivenNSN/LibrosHTMLV2"
        },
        {
            imgSrc: "../assets/img/PortfolioImg/portfolio-1.jpg",
            titulo: "Mis Lecturas - My Readings",
            skills: [],
            descripcion: "Proyecto personal de mis lecturas",
            demoURL: "https://sslibros.netlify.app/",
            repoURL: "https://github.com/StivenNSN/MundoLibros"
        },        
        {
            imgSrc: "../assets/img/PortfolioImg/portfolio-2.jpg",
            titulo: "Portfolio anterior",
            skills: [],
            descripcion: "Portfolio",
            demoURL: "https://bssanchezf.netlify.app/",
            repoURL: "https://github.com/StivenNSN/bssanchezf"
        },
        {
            imgSrc: "../assets/img/PortfolioImg/portfolio-3.jpg",
            titulo: "Calculadora App",
            skills: [],
            descripcion: "Proyecto de Practica",
            demoURL: "https://calculadorappss.netlify.app",
            repoURL: "https://github.com/StivenNSN/CalculadoraApp"
        },

    ];
    
    const skillIcons = {
        React: '<i class="fa-brands fa-react fa-beat-fade" style="color: #6beeff;"></i>',
        JavaScript: '<i class="fa-brands fa-square-js fa-beat-fade" style="color: #ffdb29; font-size: 2rem;"></i>',
        Sass: '<i class="fa-brands fa-sass fa-beat-fade" style="color: #ff00ea;font-size: 2rem;"></i>',
        styledComponents: '<iconify-icon icon="skill-icons:styledcomponents" width="26"></iconify-icon>'
    };
    
    const portafolioContainer = document.querySelector('[data-card]');
    
    for (const data of portafolioData) {
        const cardHTML = `
        
            <div class="portafolio__tarjeta">
            
                <div class="portafolio__cara faceA card__content caja__dark__portafolio ">
                
                    <div class="img__container">
                        <img class="portafolio__img" 
                            src="${data.imgSrc}" alt="${data.title}">
                    </div>
                    <div class="container__info">
                        <h3 class="portafolio__subtitulo titulo__dark">${data.titulo}</h3>
                        <div class="skills__used">
                            ${data.skills.map(skill => `
                                <div class="tecnology">
                                    ${skillIcons[skill] || ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="portafolio__cara faceB  caja__dark__portafolio">
                    <p class="portafolio__descripcion titulo__dark">${data.descripcion}</p>
                    <div class="portafolio__botobnes">
                        <a class="portafolio__btn boton titulo__dark" href="${data.demoURL}"target="_blank" rel="nofollow noreferrer noopener">
                                <span data-section="portafolio" data-value="demo">Ver Pagina</span>
                        </a>
                        <a class="portafolio__btn boton titulo__dark" href="${data.repoURL}"target="_blank" rel="nofollow noreferrer noopener">
                                <span data-section="portafolio" data-value="repo">Ver Git</span>
                        </a>
                    </div>
                </div>
            </div>
            
        `;
    
        portafolioContainer.insertAdjacentHTML('beforeend', cardHTML);
    }
    
}
