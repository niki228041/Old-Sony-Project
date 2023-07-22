


var prof = true;


function ClickNavButtonHeader()
{
    var nav_bar = document.getElementById("must-be-bigger-at-click");
    // transform: translate(0px,100px);


    if(prof)
    {
        prof = false;
        nav_bar.style.display = "block";
        // nav_bar.style.transform = "translate(0px,100px)";
    }
    else{
        prof = true;
        // nav_bar.style.transform = "translate(0px,0px)";
        nav_bar.style.display = "none";
    }
    console.log(prof);
    // nav_bar.style.height = "100px";
}

class backgroundClass{
    constructor(back,logo,title,text)
    {
        this.back = back;
        this.logo = logo;
        this.title = title;
        this.text = text;
    }
}
var arrBackgrounds = [
    new backgroundClass("Photo/lastofusback.png","Photo/last-of-us-left-behind.png","After all we've been through. Everything that I've done. It can't be for nothing.","In 2013, an outbreak of a mutant Cordyceps fungus ravages the United States, transforming its human hosts into aggressive creatures known as the Infected."),
    new backgroundClass("Photo/horizon-forbidden-west-hero-banner-desktop-01-en-07may21.webp","Photo/Horizon_Forbidden_West_logo.svg.png","There's nothing I wouldn't do to save this world; no depth I won't explore, no secret I won't unlock, no barrier I won't cross.","Horizon Zero Dawn was praised by critics for its open world, story, visuals, combat, characterization, and the performance of voice actress Ashly Burch; however, the dialogue, melee combat, and character models received some criticism. "),
    new backgroundClass("Photo/madden-23-all-madden-edition-hero-banner-desktop-01-en-24may22.webp","Photo/original.png","Spiele dich in Madden NFL 23 in die Geschichtsbücher! Kontrolliere deinen Spieleinfluss, mit jeder Entscheidung auf´s Neue."," Gib mit Free Agency und Verbesserungen an der Verhandlungslogik den nächsten Zug"),
    new backgroundClass("Photo/rollerdrome-hero-banner-desktop-01-ps4-ps5-en-19may22.webp","Photo/RD_D2C_LogoStacked.png","Rollerdrome makes roller skating exciting by adding guns","For the first few seconds of the reveal trailer for Rollerdrome, I was confident Shedworks' Sable was being announced for PlayStation. But what we actually got was a surprise reveal from Roll7, the studio behind the recently released OlliOlli World."),
    new backgroundClass("Photo/the-callisto-protocol-hero-banner-desktop-01-ps4-ps5-en-27may22.webp","Photo/The_Callisto_Protocol_Logo.webp.png","Striking Distance Studios kündigte den neuen Survival-Horror-Titel The Callisto Protocol bei den Game Awards an.","Die unzensierte Langfassung des Trailers ist erschienen und fesselt seine Zuschauer mit verstörend makabren Szenen.")
];


var index = 0; 


function changeIndex(newIndex)
{
    index = newIndex;

    var background = document.getElementById("main-background");
    var logo = document.getElementById("main-logo");
    var title = document.getElementById("main-text-title");
    var text = document.getElementById("main-text");

    

    background.style.backgroundImage = `url( ${arrBackgrounds[index].back})`;
    logo.src = arrBackgrounds[index].logo;
    title.innerHTML = arrBackgrounds[index].title;
    text.innerHTML = arrBackgrounds[index].text;
}