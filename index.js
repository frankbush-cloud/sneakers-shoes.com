const hambarger = document.getElementById("hambarger");
const navLinksCard = document.querySelector(".navlink-card")
const overlayContainer = document.querySelector(".overlay-container")
const shoeContainers = [...document.querySelectorAll(".shoe-container")];
const previewContainers = [...document.querySelectorAll(".shoe-container-overlay")];
const shoesOverly = [...document.querySelectorAll(".shoe-pic-overly")];
let overlayImg = document.querySelector(".overlay-image");
let amountValue = 0
let currentImg = 1;
let cartEmptyText = document.querySelector(".cart-empty-text-card");
let amount = document.querySelector(".cart-amount");
const nextBtn = [...document.querySelectorAll(".next-btn-box")];
const prevBtn = [...document.querySelectorAll(".prev-btn-box")];
const displayPic = document.querySelector(".display-pic");
const cartCheckOutCard = document.querySelector(".cart-check-out-container");
const cartDiv = document.querySelector(".cart-div");
const cartMinus = document.querySelector(".minus-cart");
const cartPlus = document.querySelector(".plus-cart");
const indicator = document.querySelector("#indicator")
const cartImage = document.querySelector(".cart-img");
const cartPrdctPrices = document.querySelector("#selected-products-prices");
const cartNotNullCard = document.querySelector(".cart-not-null");
const cartAmountContainer = document.querySelector(".cart-amount-container");
const deleteBin = document.querySelector(".delete-bin");
console.log(shoesOverly.length)

function changeHamburger(){
   //toggling the nav-link
   if(navLinksCard.style.display === "block"){
    navLinksCard.style.display = "none"
    hambarger.src=src="./images/icon-menu.svg";
   }else{
    navLinksCard.style.display ="block"
    hambarger.src="./images/icon-close.svg";
   }
   if(hambarger.style.display == "none"){
      navLinksCard.style.display = "inline-block"
   }
}


shoeContainers.forEach(shoe =>{
   shoe.onclick = ()=>{
      let name = shoe.getAttribute("data-name");
      previewContainers.forEach(preview =>{
         let target = preview.getAttribute("data-target");
         if(name== target){
            overlayContainer.style.visibility = "visible";
            let overlayImg = document.querySelector(".overlay-image");
            shoesOverly.forEach(shoe =>{
               shoe.onclick = () =>{
                  overlayImg.src = shoe.src
               }
            })
            
         }
      })   
      let cancleLightBox = document.querySelector(".cancel-overlay")
      cancleLightBox.onclick=()=>{
         overlayContainer.style.visibility = "hidden";
      }                        
   }
})

function nextImage(){

      let currentImgNo = shoesOverly.length;
      if(currentImg == currentImgNo){
         currentImg = 1
      }else{
         currentImg++;
      }
      let overlayImg = document.querySelector(".overlay-image");
      overlayImg.src = `./images/image-product-${currentImg}.jpg`
      displayPic.src = `./images/image-product-${currentImg}.jpg`
   }

function prevImage (){
   if(currentImg == 1){
      let currentImgNo = shoesOverly.length;
      currentImg = currentImgNo
   }else{
      currentImg--;
   }
   overlayImg.src =`./images/image-product-${currentImg}.jpg`;
   displayPic.src = `./images/image-product-${currentImg}.jpg`
}


      // add event listeners
hambarger.addEventListener("click", changeHamburger);
overlayImg.addEventListener("click", addtocart)
nextBtn.forEach(nbtn => {
   nbtn.addEventListener("click", nextImage)
})
prevBtn.forEach(pbtn =>{
   pbtn.addEventListener("click", prevImage)
})
cartMinus.addEventListener("click", handleMinus)
cartPlus.addEventListener("click", handlePlus)
cartDiv.addEventListener("click", addtocartcheckout)
cartImage.addEventListener("click", checkTheCart)
deleteBin.addEventListener("click", clearcart)
function addtocart(){
      amountValue++;
      let amount = document.querySelector(".cart-amount");
      amount.innerText = amountValue
   
}

function handleMinus(){
   if(amountValue > 0){
      
      amountValue--;
      amount.innerText = amountValue
   }
}

function handlePlus(){
   amountValue++;
   
   amount.innerText = amountValue
}

function addtocartcheckout (){
   if(amount.innerText == 0){
      indicator.innerText = 0;
      cartAmountContainer .classList.add("hidden");
      cartNotNullCard.style.display = "none";
      cartEmptyText.style.display = "inline-block";
   }else{
      indicator.innerText = amount.innerText
      cartAmountContainer.classList.remove("hidden");
      cartNotNullCard.style.display = "inline-block";
      //let cartEmptyText = document.querySelector(".cart-empty-text-card");
      cartEmptyText.style.display = "none"
   }
   let total = 125 * indicator.innerText;
   cartPrdctPrices.innerText = `$125.00 * ${indicator.innerText} $${total}` 
}

function checkTheCart(){
   cartCheckOutCard.classList.toggle("hidden");
   if(indicator.innerText == 0){
      cartNotNullCard.style.display = "none"
   }
}

function clearcart (){
   cartAmountContainer .classList.add("hidden");
   cartNotNullCard.style.display = "none";
   indicator.innerText = 0;
   amount.innerText = 0;
   cartEmptyText.style.display = "inline-block";
}