const slider = document.getElementById("slider-input");
const pageViewEl = document.getElementById("pageView");
const priceValueEl = document.getElementById("priceValue");
const sliderShadow = document.getElementById("slider-shadow");
const discountEl = document.getElementById("discount-check");
const discountLabel = document.getElementById("label-update");
const discountSec = document.querySelector("#discount-btn-sec label");
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
    sliderAriaControl();
}
slider.addEventListener("input", function(){
    updatePrice(parseInt(this.value));
});
discountEl.addEventListener("input", function(){
    updatePrice(parseInt(slider.value));
});

// For Slider Accessibility
function sliderAriaControl(){
    slider.setAttribute("aria-valuenow", priceValueEl.textContent);
    slider.setAttribute("aria-valuetext", `${pageViewEl.textContent} pageview for ${priceValueEl.textContent} usd per month`);
    function sliderAttr(minValue, maxValue){
        slider.setAttribute("aria-valuemin", minValue);
        slider.setAttribute("aria-valuemax", maxValue);
    }
    if (discountEl.checked){
        sliderAttr("6", "27");
        discountLabel.textContent = "Yearly billing selected";
    } else {
        sliderAttr("8", "36");
        discountLabel.textContent = "Monthly billing selected";
    }
}
discountSec.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        if(discountEl.checked){
            discountEl.checked = false;
            updatePrice(parseInt(slider.value));
        } else {
            discountEl.checked = true;
            updatePrice(parseInt(slider.value));
        }
    }
});