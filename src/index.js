const Content = document.querySelector("#content");
const body = document.body;

const initialize = (function() {

    let header = `<header> Wellcome To Vitulis Place </header>`;
    let mainImg = `<div class="parallax" data-parallax="scroll" data-z-index="1" data-image-src="/src/centeralpic.jpg"></div>`;
    
    let descriptionHeader = `<h1> Vitulis Place - Alcohol & Fun ! </h1>`;
    let descriptionHolder = `<div class="subContainer"> ${descriptionHeader} </div>`;
    let sector2 = `<div id="sector2"> ${descriptionHolder} </div>`;

    
    Content.innerHTML = header +
                        mainImg + 
                        sector2;
})();