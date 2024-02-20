// add div 
// function createNewDiv(){
// const newDiv=document.createElement("div");
// newDiv.classList.add("flex", "justify-between");
// const paragraph=document.createElement("p");
// paragraph =cards;
// // paragraph.innerText="";
// newDiv.appendChild(paragraph);
// const para=document.createElement("p");
// para.textContent="Economy";
// newDiv.appendChild(para);
// const parah=document.createElement("p");
// parah.textContent="550";
// newDiv.appendChild(parah);
// document.getElementById('class').appendChild(newDiv);


// }
// createNewDiv();


const cards=document.querySelectorAll("#card");
// console.log(cards);

for(const card of cards){
    // console.log(ticket)
  card.addEventListener('click',function(event){
    // console.log('clicked');
    // get the name,class,price 
    const title=card.querySelector("h4");
    let value=title.innerText;
    // console.log(value);
  
  });


}





