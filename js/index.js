// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = document.querySelectorAll('.product .price span');
  const quantity = document.querySelectorAll('.product .quantity input');  
  let totalPriceArray = [];
  for(let i=0; i < price.length; i++){
    totalPriceArray.push(price[i].innerText*quantity[i].value)
  }
    
  subTotal = document.querySelectorAll('.subtotal span')  
    for(let i=0; i < totalPriceArray.length; i++){    
    subTotal[i].innerText = totalPriceArray[i];
  }
  
};

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  totalValueField = document.querySelector('#total-value span')
  let totalAmount= 0;

  for(let i=0; i < subTotal.length; i++){
    totalAmount += parseInt(subTotal[i].innerText)
  }
  totalValueField.innerText = totalAmount

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
  return calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const productNode = document.querySelector('.product .quantity input');
  const CalculateBn = document.querySelector('#calculate')


  CalculateBn.addEventListener('click', (ev)  => {    
    calculateAll(); 
  })

  const removeBn = document.querySelectorAll('.btn-remove')
  const removeBnArray = [...removeBn]
  for(const element in removeBnArray){
    removeBnArray[element].addEventListener('click', removeProduct )
  }
  
});

//... your code goes here

