document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;


function sliderLeft() {
    let polosa = document.getElementById('polosa');
    left -= 128;
    if (left < -512) {
        left = 0;
    }
    polosa.style.left = left +'px';

}