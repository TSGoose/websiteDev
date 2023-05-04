prevNum = -1;

function clickElement(number){
    if (window.screen.width > 980) return;
    if (prevNum != -1) document.getElementById("content-" + prevNum).style.display = 'none';
    document.getElementById("content-" + number).style.display = 'block';
    prevNum = number;
}