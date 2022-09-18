const slider = document.getElementById("slider-input");
const pageViewEl = document.getElementById("pageView");
const priceValueEl = document.getElementById("priceValue");
const sliderShadow = document.getElementById("slider-shadow");
const discountEl = document.getElementById("discount-check");
const sliderData = [
    {
        assignedValue: 0,
        price: 8,
        pageViews: "10K",
        shadowWidth: "0% - 0px"
    },
    {
        assignedValue: 25,
        price: 12,
        pageViews: "50K",
        shadowWidth: "25% - 10px"
    },
    {
        assignedValue: 50,
        price: 16,
        pageViews: "100K",
        shadowWidth: "50% - 20px"
    },
    {
        assignedValue: 75,
        price: 24,
        pageViews: "500K",
        shadowWidth: "75% - 31px"
    },
    {
        assignedValue: 100,
        price: 36,
        pageViews: "1M",
        shadowWidth: "100% - 41px"
    }
];
function updatePrice(sliderValue){
    sliderData.forEach(function(value){
        if(sliderValue === value.assignedValue){
            pageViewEl.textContent = value.pageViews;
            if(discountEl.checked){
                priceValueEl.textContent = (value.price - (value.price * 25/100)).toFixed(2);
            } else {
                priceValueEl.textContent = value.price.toFixed(2);
            }
            sliderShadow.style.setProperty("width", "calc(" + value.shadowWidth + ")");
        }
    });
}
slider.addEventListener("input", function(){
    updatePrice(parseInt(this.value));
});
discountEl.addEventListener("input", function(){
    updatePrice(parseInt(slider.value));
});