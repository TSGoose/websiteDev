let flag = 0;

function clickMenu(){
    if (!flag) {
        document.getElementById("nav-bar-right").classList.add('opened');
        flag = 1;
    }
    else {
        document.getElementById("nav-bar-right").classList.remove('opened');
        flag = 0;
    }
}