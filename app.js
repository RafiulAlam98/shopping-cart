function updateProductNumber(product, price, isIncreasing){
  const productInput = document.getElementById(product+"-number");
  let productNumber = productInput.value
  if(isIncreasing == true){
    productNumber = parseInt(productInput.value)+1
    productNumber.toFixed(2)
  }
  else if(productNumber > 0){
    productNumber = parseInt(productInput.value)-1
     productNumber.toFixed(2)
  }
  productInput.value = productNumber

  // update total
  const productTotal = document.getElementById(product+"-total")
  const productUpdate = productTotal.innerText;
   
  productTotal.innerText = productNumber * price
  function calculate(){
    const phoneInput = document.getElementById("phone-number").value
    const caseInput = document.getElementById("case-number").value
    const phoneTotal = phoneInput * 1219
    const caseTotal = caseInput * 59
    const subTotal = phoneTotal + caseTotal;
    document.getElementById("sub-total").innerText = subTotal;
    const tax = subTotal * 0.1;
    document.getElementById("tax-total").innerText = tax;
    const total = subTotal + tax
    document.getElementById("total-price").innerText = total
  }

  
  calculate().toFixed(2);
}


// phone handle increase decrease
document.getElementById("phone-plus").addEventListener('click',function(){
  updateProductNumber('phone', 1219, true)
})
document.getElementById("phone-minus").addEventListener('click',function(){
  updateProductNumber('phone', 1219, false)
})


// case handle increase decrease....
document.getElementById("case-plus").addEventListener('click',function(){
  updateProductNumber('case', 59, true)
})
document.getElementById("case-minus").addEventListener('click',function(){
  updateProductNumber('case', 59, false)
})
