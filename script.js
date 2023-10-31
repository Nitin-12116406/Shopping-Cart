let shop = document.getElementById("shop");
let shopItemData = [
  {
    id: "item-1",
    name: "Casual Shirts",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "./images/img-1.jpg",
  },
  {
    id: "item-2",
    name: "T Shirts",
    price: 55,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "./images/img-2.jpg",
  },
  {
    id: "item-3",
    name: "Shirts",
    price: 105,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "./images/img-3.jpg",
  },
  {
    id: "item-4",
    name: "Formal Shirts",
    price: 455,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "./images/img-4.jpg",
  },
];
let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
      let { id, name, price, desc, img } = x; //destructured
      return `  <div class="item" id=${id}>
    <img src="${img}" alt="image1" />
    <div  class="details">
      <h2>${name}</h2>
      <p>${desc}</p>
      <div class="price-quantity">
        <h2>$ ${price}</h2>
        <i onclick="increament()" class="bi bi-plus-lg"></i>
        <div id=${x.id} class="quantity">0</div>
        <i onclick="decreament()" class="bi bi-dash-lg"></i>
      </div>
    </div>
  </div> `;
    })
    .join(" "));
};
generateShop();
let increament=()=>{ console.log("increament")};
let decreament=()=>{console.log("decreament")};
let update=()=>{};
