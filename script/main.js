const slider = document.getElementById("slider-input");
const sliderShadow = document.getElementById("slider-shadow");
slider.addEventListener("input", function(){
    console.log(this.value);
    let shadowWidth = this.value + "%" + " - 20px";
    sliderShadow.style.setProperty("width", "calc(" + shadowWidth + ")");
});