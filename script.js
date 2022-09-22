const buttons = document.querySelectorAll('.rating-button');
const submitBtn = document.querySelector('.submit-button');
const ratingComponent = document.querySelector('.rating-component');
let selectedBtn;

const thankYouObject = (amount) => {
    return `<div class="thank-you-container">
    <div class="thank-you-illustration-box">
      <img src="./images/illustration-thank-you.svg" >
    </div>
    <span class="amount-description">You selected ${amount} out of 5</span>
    
    <h2 class="thank-you-header">Thank you!</h2>
    
    <span class="thank-you-description">We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</span>
    </div>`;
}

buttons.forEach((button) => {
    button.addEventListener("click", function(){

        if(selectedBtn !== undefined){
            selectedBtn.classList.remove("selected");
        }
        
        button.classList.add("selected");
        selectedBtn = button;
    })
})

submitBtn.addEventListener("click", function(){
    
    if (selectedBtn === undefined){
        alert('error');
    } else{
        ratingComponent.innerHTML = thankYouObject(selectedBtn.innerText);
    }

})

