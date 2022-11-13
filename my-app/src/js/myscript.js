const btn_out = document.querySelector(".btn-out");
const btn_input = document.querySelector('.btn_input');

btn_out.addEventListener('click',function(){
  fetch(" http://localhost:3001/product",{
    method:"GET"
  }).then((response)=>response.json())
  .then((data)=>{
    const containerUl = document.createElement('ul');
    const section = document.querySelector('.product_display');
    data.forEach((item)=>{
      const productLi = document.createElement('li');
      const productImg = document.createElement('img');
      const productName = document.createElement('strong');
      productName.className = "productName"
      const productPrice = document.createElement('p');
      const productStock = document.createElement('p');
      const productDate = document.createElement('p');
      const btnEditDel = document.createElement('button');
      btnEditDel.textContent = '수정 및 삭제하기'
      btnEditDel.addEventListener('click',productEditDelete)
     productName.textContent = item.productName;
     productPrice.textContent = "가격 : " +item.price +"원";
     productStock.textContent = "재고 : " +item.stockCount+"개";
     productDate.textContent = "등록날짜 : "+item.pubDate
     productLi.append(productName,productPrice,productStock,productDate,btnEditDel);
     containerUl.appendChild(productLi)
     section.appendChild(containerUl);
    })
    
  })
})
btn_input.addEventListener('click',function(event){
  const productContainer = document.querySelector('.product');
  const nameValue = productContainer.querySelector('.inp-name')
  const priceValue = productContainer.querySelector('.inp-price')
  const dateValue =  productContainer.querySelector('.inp-date')
  const stockValue =  productContainer.querySelector('.inp-stock')
  const data = {
    "productName": nameValue.value,
    "price": priceValue.value,
    "stockCount": stockValue.value,
    "pubDate": dateValue.value,
  };
  fetch("http://localhost:3001/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("성공:", data);
  })
  .catch((error) => {
    console.error("실패:", error);
  });
})
//삭제및수정 모달
function productEditDelete(event){
  const Modal = document.querySelector('.editModal');
  const btnDel = document.querySelector('btn_delete')
 // btnDel('click',)
  const target = event.target.parentElement;
  const targetName = target.querySelector('.productName').textContent;
  Modal.classList.toggle('hide');
  fetch('http://localhost:3001/product',{
    method:"GET",
  }).then((response)=>response.json())
  .then((data)=>{
    data.forEach((item)=>{
      if(item.productName === targetName){
       productEdit(item)
       productDelete(item)
     
      }
    })
  })
  .then((data)=>{
     console.log("수정삭제모달 정상 작동")
  }).catch((error)=>alert(error))
  }
  const btnEdit = document.querySelector('.btn_edit')
  //수정 PATCH
  function productEdit(item){
    btnEdit.addEventListener('click',function(){
      const Modal = document.querySelector('.editModal');
      const nameValue =  Modal.querySelector('.inp-name')
      const priceValue =  Modal.querySelector('.inp-price')
      const dateValue =  Modal.querySelector('.inp-date')
      const stockValue =  Modal.querySelector('.inp-stock')
      const btnEdit = document.querySelector('.btn_edit');
      const data = {
        "productName": nameValue.value ? nameValue.value : item.productName ,
        "price": priceValue.value ? priceValue.value : item.price,
        "stockCount": stockValue.value ? stockValue.value : item.stockCount,
        "pubDate": dateValue.value ? dateValue.value :item.pubDate,
      };
      fetch(`http://localhost:3001/product/${item.id}`,{
        method:"PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((response)=>console.log('성공'))
      .catch((error)=>alert(error))
    });
   
  }
function productDelete(item){
  const btnDel = document.querySelector(".editModal .btn_delete");
  btnDel.addEventListener('click',function(event){
   fetch(`http://localhost:3001/product/${item.id}`,{
     method:"DELETE" 
   }).then((response)=>console.log("성공"))
   .catch((error)=>{alert(error)})
  })
}
