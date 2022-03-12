const generateColorBtn = document.querySelector('.generate-color');
const display = document.querySelector('.display p');

generateColorBtn.addEventListener('click',generateColor);

function getRandomNumFromZeroToFifteen() {
    return Math.floor(Math.random()*16);
}

function generateColor() {
    let color="#";
    for(let i=0;i<6;i++) {
        let res = getRandomNumFromZeroToFifteen();
        if(res < 10) {
            color+=res;
        } else if(res === 10) {
            color+='a';
        } else if(res === 11) {
            color+='b';
        } else if(res === 12) {
            color+='c';
        } else if(res === 13) {
            color+='d';
        } else if(res === 14) {
            color+='e';
        } else if(res === 15) {
            color+='f';
        } 
    }
    display.textContent = color;
    document.body.style.backgroundColor = color;
}