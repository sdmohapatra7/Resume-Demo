
//smooth scroll code...
var navMenyAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navMenyAnchorTags.length;i++){
    navMenyAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        // interval=setInterval(scroolVertically,20,targetSection);
        interval=setInterval(function(){
            scroolVertically(targetSection);
        },20);
    });
}
function scroolVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
}

//skill bars animation and scroll...

/*var progressBar=document.querySelectorAll('.skill-progress > div');
var skillContainer=document.getElementById('skills-container');
var animationDone=false;
window.addEventListener('scroll',checkScroll);
function initialiseBars(){
    for(let bar of progressBar){
        bar.style.width = 0 + '%';
    }
}
initialiseBars();
function fillBars(){
    for(let bar of progressBar){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth + '%';
        },5);
    }
}

function checkScroll(){
    var coordiantes=skillContainer.getBoundingClientRect();
    if(!animationDone && coordiantes.top < window.innerHeight){
        animationDone=true;
        console.log('skill Section Is visiable')
        fillBars();
    }else if(coordiantes.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}*/

//another skill bar method....

var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}

function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}

// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);