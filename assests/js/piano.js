var len = document.querySelectorAll(".piano").length;

for(var i =0;i<len;i++)
{
    document.querySelectorAll(".piano")[i].addEventListener("click",function (){
        var but = this.innerHTML;
        makesound(but);
        animate(but);
    });
}

function makesound(key)
{
    switch(key)
    {
        case 'z':var audio = new Audio("assests/sounds/C.wav");break;
        case 's':var audio = new Audio("assests/sounds/CS.wav");break;
        case 'x':var audio = new Audio("assests/sounds/D.wav");break;
        case 'd':var audio = new Audio("assests/sounds/DS.wav");break;
        case 'c':var audio = new Audio("assests/sounds/E.wav");break;
        case 'v':var audio = new Audio("assests/sounds/F.wav");break;
        case 'g':var audio = new Audio("assests/sounds/FS.wav");break;
        case 'b':var audio = new Audio("assests/sounds/G.wav");break;
        case 'h':var audio = new Audio("assests/sounds/GS.wav");break;
        case 'n':var audio = new Audio("assests/sounds/A.wav");break;
        case 'j':var audio = new Audio("assests/sounds/AS.wav");break;
        case 'm':var audio = new Audio("assests/sounds/B.wav");break;
    }
    audio.play();
}

document.addEventListener("keypress",function(eve){
    makesound(eve.key);
    animate(eve.key);
});

function animate(key)
{
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function (){document.querySelector("."+key).classList.remove("pressed");}, 100);
}