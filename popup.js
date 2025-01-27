
const button=document.querySelector(".button")

const circle=document.querySelector(".circle")

let buttonOn=false;
button.addEventListener("click",()=>{
    if(!buttonOn){
        buttonOn=true;
        circle.style.animation="moveCircleToRight 1s forwards";
        button.style.animation="transformToYellow";
        chrome.tabs.executeScript({
            file:"appOn.js"
        })
    }
    else{
        buttonOn=false;
        circle.style.animation="moveCircleToLeft 1s forwards";
        button.style.animation="transformToBlue";
        chrome.tabs.executeScript({
            file:"appOff.js"
        })

    }
})