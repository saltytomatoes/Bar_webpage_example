import {getContactDiv} from './Contact.module.js';

const Content = document.querySelector("#content");
const body = document.body;

const initialize = (function() {

    let header = `<header> Wellcome To Vitulis Place </header>`;
    let mainImg = `<div class="parallax" data-parallax="scroll" data-z-index="1" data-image-src="/src/pics/centeralpic.jpg"></div>`;
    

    // sector 2 related
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


    //sector 3 related

    let btn1 = `<div class="button">Contact<div class="lightBulb"></div></div>`;
    let btn2 = `<div class="button">Menu<div class="lightBulb"></div></div>`;
    let btn3 = `<div class="button">Magic!<div class="lightBulb"></div></div>`;

    let tabHolder = `<div id="tabHolder">
                      ${btn1}
                      ${btn2}
                      ${btn3}
                    </div>`;

    let tabContent = `<div id="tabContent">
                        ${getContactDiv()}
                      </div>`;

    let sector3 = `<div id="sector3">
                    ${tabHolder}
                    ${tabContent}
                  </div>`;

    
    Content.innerHTML = header +
                        mainImg + 
                        sector2 +
                        mainImg2 +
                        sector3;
})();





const tabSetup = (function() {
    
    class Tab {
        constructor(tabDiv){
            this.divRef = tabDiv;
            this.lightIsOn = false;
            this.configEventListeners();
        }

        getDivRef () {
            return this.divRef;
        }


        // when a tab is clicked and its light is toggled, this method shuts down other lights
        toggleOtherLights (skipCurrent) {
            for(let i = 0; i < tabs.length; i++) {
                if(skipCurrent == tabs[i])
                    continue;
                
                if(tabs[i].lightIsOn) {
                    tabs[i].toggleLight(false);
                    tabs[i].lightIsOn = false;
                }
            }
        }


        toggleLight (clickFlag = true) {
            let lightBulb = this.getDivRef().firstElementChild;
            lightBulb.classList.toggle("on");
            this.lightIsOn = !this.lightIsOn;

            if(clickFlag)
                this.toggleOtherLights(this);
        }


        configEventListeners() {
            this.getDivRef().addEventListener("click",this.toggleLight.bind(this));
        }
    }

    let tabs = Array.from(document.querySelectorAll(".button"));
    tabs = tabs.map(tab => new Tab(tab));
})();

