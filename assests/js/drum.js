var len = document.querySelectorAll(".drum").length;

for(var i =0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var but = this.innerHTML;
        makesound(but);
        animate(but);
    });
}

function makesound(key)
{
    switch(key)
    {
        case 'w':var audio = new Audio("assests/sounds/crash.wav");break;
        case 'a':var audio = new Audio("assests/sounds/tom.wav");break;
        case 's':var audio = new Audio("assests/sounds/clap.wav");break;
        case 'd':var audio = new Audio("assests/sounds/snare2.wav");break;
        case 'j':var audio = new Audio("assests/sounds/kick.wav");break;
        case 'k':var audio = new Audio("assests/sounds/hat.wav");break;
        case 'l':var audio = new Audio("assests/sounds/snare1.wav");break;
        
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