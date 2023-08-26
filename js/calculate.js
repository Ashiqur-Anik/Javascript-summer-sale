let total = 0;
let makebtn = document.getElementById("make-btn");
makebtn.disabled = true;
let applybtn = document.getElementById("apply-btn");
applybtn.disabled = true;

function ClickCard(target) {
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const selectItemContiner = document.getElementById('select-item');
    const count = selectItemContiner.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = count + 1 + ". " + itemName;
    selectItemContiner.appendChild(p);

    const Price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(Price);
    document.getElementById("total-price").innerText = total;
    makebtn.disabled = false;

   if(total < 200){
    applybtn.disabled = true;
   }
   else{
    applybtn.disabled = false;
   }

}

applybtn.addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputFieldValueString = inputField.value;
    if(inputFieldValueString === "SELL200"){
        const disabled = (total * 20)/100;
        document.getElementById('discount-price').innerText =disabled;
        const totalTaka = (total - disabled);
        document.getElementById('total').innerText = totalTaka;
    }
    else{
        alert ("Promo Code wrong"); 
    }
})



