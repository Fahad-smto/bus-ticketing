const sit = document.querySelectorAll('.sit');
console.log(sit);
let totalPrice =0;
 

for (let index = 0; index < sit.length; index++) {
    const sits = sit[index];
    // console.log(element);
sits.addEventListener('click',function(){
    // console.log('clicked');

    const title =sits.querySelector('button').innerText;
    // console.log(title.innerText);
  
  const price= parseInt(document.getElementById('ticket-price').innerText);
   console.log( price);
   console.log(title,price);

   const priceContainer = document.getElementById('price-container');
//    console.log(priceContainer);
   const p = document.createElement('p');
   p.innerText = title 
   priceContainer.appendChild(p);



//    calculate
totalPrice +=price;
console.log(totalPrice);
document.getElementById("totalPrice").innerText =totalPrice
   
})

}
 

const applyBtn = document.getElementById('applyButton');
applyBtn.addEventListener('click',function(){
    console.log('clicked');


    const couponElement =document.getElementById('input-fild').value
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    // console.log(couponCode);
    if (couponCode==='NEW15' || couponCode==='COUPLE20' ){
 
const discountElement = document.getElementById('discountPrice');
    const dicountAmount = totalPrice;
   if (discountElement === "NEW15"){
    dicountAmount = totalPrice  * 0.15;
   }else if(dicountAmount==='COUPLE20'){
    dicountAmount = totalPrice * 0.20;
   }
discountElement.innerText = dicountAmount
    }else{
        alert('invalid coupon code')
    }
    
});


function a1 (){
      
}

const changeBgcolor = document.getElementById


 
