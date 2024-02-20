let seats=document.getElementsByClassName('seats');
let count=0;
let totalSeat=8;
let totalCoast=0;
let price=550;

// let seatCount= 0
for(let seat of seats) {
  seat.addEventListener("click",function(){
    console.log(seat);

    seat.style.backgroundColor="#1DD100";

    let totalSeatElement=document.getElementById('total-seat');

    let selectSeatElement=document.getElementById('selected-seat');

    if(count>3){
      seat.style. backgroundColor='';
      alert("There is no select option more than 4");

      return;
    }
    totalSeat=totalSeat-1;
    count=count+1;
    selectSeatElement.innerText=count;
    totalSeatElement.innerText=totalSeat;

    // price option 
    let totalAmount=document.getElementById('total-amount');
    let priceElement=document.getElementById('price');
   let priceElementText=priceElement.innerText;
   let price=parseInt(priceElementText);
   totalCoast+=price;
   totalAmount.innerText=totalCoast;

  //  grandTotal 
  let grandMoney=document.getElementById('grand');
  grandMoney.innerText=totalCoast;


  // create input div 
  let innerPara=document.getElementById('inner-para');
  let div=document.createElement('div');
  div.classList.add('flex','justify-between');
  let p1=document.createElement('p');
  let p2=document.createElement('p');
  let p3=document.createElement('p');

  p1.innerText=seat.innerText;
  p2.innerText="Economy";
  p3.innerText=price;

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  innerPara.appendChild(div);
  })
}

document.getElementById('apply-btn').addEventListener("click",function(){
 
 let label=document.getElementById('label') ;
 let grandMoney=document.getElementById('grand');
 let inputField=document.getElementById('input-field')
 let inputFieldValue=inputField.value;

 if(inputFieldValue == 'NEW15'){
  let discount=totalCoast*0.15;
  let pay=totalCoast-discount;
  grandMoney.innerText=pay;
label.classList.add('hidden');
 }

 else if(inputFieldValue == 'Couple20'){
  let discount=totalCoast*0.20;
  let pay=totalCoast-discount;
  grandMoney.innerText=pay;
  label.classList.add('hidden');

 }
 else{
  alert('please write a valid coupon')
 }

})






