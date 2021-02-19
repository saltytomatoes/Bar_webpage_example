const Content = document.querySelector("#content");
const body = document.body;

const initialize = (function() {

    let header = `<header> Wellcome To Vitulis Place </header>`;
    let mainImg = `<div class="parallax" data-parallax="scroll" data-z-index="1" data-image-src="/src/pics/centeralpic.jpg"></div>`;
    
    let descriptionHeader = `<h1> Vitulis Place - Alcohol & Fun ! </h1>`;
    let description = `<p> <span>The Vitulis Place Dance Bar</span> - The vitulis place is the first and the only dance bar in beer sheva wich combines
                          new era, modern type of alcohol and music alongside with old fassioned, classic drinks and party spirit! in 2025 Our founder, Jack Vituli
                          decided to bring a unique experience to his fellows in the negev and merge the past and the future in to the present!</p>`;
    
    let thatsJack = `<div id="thatsJack"></div>`;

    let descriptionHolder = `<div class="subContainer"> 
                              ${descriptionHeader}
                              ${description}
                              ${thatsJack}
                             </div>`;

    let sector2 = `<div id="sector2">
                    ${descriptionHolder}
                   </div>`;

    let mainImg2 = `<div class="parallax" data-parallax="scroll" data-z-index="1" data-image-src="/src/pics/centralpic2.jpg"></div>`;

    let sector3 = `<div id="sector3"></div>`;

    
    Content.innerHTML = header +
                        mainImg + 
                        sector2 +
                        mainImg2 +
                        sector3;
})();