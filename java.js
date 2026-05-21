const products = [
  {
    id: 1,
    name: "Majica",
    category: "majice",
    price: 20,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    desc: "Kvalitetna pamučna majica",
    sizes: ["S","M","L","XL"]
  },
  {
    id: 2,
    name: "Hlače",
    category: "hlače",
    price: 40,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    desc: "Udobne hlače",
    sizes: ["S","M","L","XL"]
  },
  {
    id: 3,
    name: "Tenisice",
    category: "dodaci",
    price: 60,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    desc: "Tenisice",
    sizes: [38,39,40,41,42,43]
  },
  {
    id: 4,
    name: "Jakna",
    category: "jakne",
    price: 80,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a",
    desc: "Topla jakna",
    sizes: ["S","M","L","XL"]
  },
  {
    id: 5,
    name: "Čarape",
    category: "dodaci",
    price: 5,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
    desc: "Čarape",
    sizes: ["35-38","39-42","43-46"]
  },
  {
    id: 6,
    name: "Košulja",
    category: "majice",
    price: 35,
    image: "https://thecore.hr/258589-large_default/kosulja.jpg",
    desc: "Košulja",
    sizes: ["S","M","L","XL"]
  },
  {
    id: 7,
    name: "Traperice",
    category: "hlače",
    price: 50,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    desc: "Traperice",
    sizes: ["30","32","34","36"]
  },
  {
    id: 8,
    name: "Džemper",
    category: "majice",
    price: 45,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2",
    desc: "Džemper",
    sizes: ["S","M","L","XL"]
  },
  {
    id: 9,
    name: "Naočale",
    category: "dodaci",
    price: 25,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    desc: "Naočale",
    sizes: ["Univerzalno"]
  },
  {
    id: 10,
    name: "Trenerka",
    category: "majice",
    price: 55,
    image: "https://sporty1.hr/cdn/shop/files/MAA060-01_1024x1024.jpg?v=1746889291",
    desc: "Trenerka",
    sizes: ["S","M","L","XL"]
  },
  {
    id: 11,
    name: "Šilterica",
    category: "dodaci",
    price: 15,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    desc: "Kapa",
    sizes: ["Univerzalno"]
  },
  {
    id: 12,
    name: "Ruksak",
    category: "dodaci",
    price: 35,
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
    desc: "Ruksak",
    sizes: ["Univerzalno"]
  },
{
  id: 13,
  name: "Sportska majica",
  category: "majice",
  price: 25,
  image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/d1d5a2acfa2848af96d4089dfd7e95b3_9366/IK9725_01_laydown.jpg",
  desc: "Lagana sportska majica",
  sizes: ["S","M","L","XL"]
},
{
  id: 14,
  name: "Kratke hlače",
  category: "hlače",
  price: 30,
  image: "https://www.myprotein.hr/images?url=https://static.thcdn.com/productimg/original/15791985-1705232813804843.jpg&format=webp&auto=avif&crop=1100,1200,smart",
  desc: "Ljetne kratke hlače",
  sizes: ["S","M","L","XL"]
},
{
  id: 15,
  name: "Zimska jakna",
  category: "jakne",
  price: 120,
  image: "https://ozonee.hr/hpeciai/bf46fa87e74f68096afce8a2d59829d8/scr_pl_Zenska-Zimska-Jakna-Crna-OZONEE-JS-16M9062-392Z-54981_1.jpg",
  desc: " zimska jakna",
  sizes: ["S","M","L","XL"]
},
{
  id: 16,
  name: "Remen",
  category: "dodaci",
  price: 18,
  image: "https://pelgolo.hr/wp-content/uploads/2024/03/DSC_1572-scaled.jpg",
  desc: "Kožni remen",
  sizes: ["Univerzalno"]
},
{
  id: 17,
  name: "Pulover",
  category: "majice",
  price: 50,
  image: "https://w2.kibuba.com/productpics/20043_46171_muski-pulover-s-okruglim-izrezom-pinewood-varnamo_1600x1200-md.jpeg",
  desc: "Topli pulover",
  sizes: ["S","M","L","XL"]
},
{
  id: 18,
  name: "Trenirke donji dio",
  category: "hlače",
  price: 45,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprX_TUgVxgo8qsoUJnS-VgSrtyii1WnsD4w&s",
  desc: "Udobne trenirke",
  sizes: ["S","M","L","XL"]
},
{
  id: 19,
  name: "Kišna jakna",
  category: "jakne",
  price: 70,
  image: "https://www.zavas.hr/slike/124469/big.1.jpg",
  desc: "Vodootporna jakna",
  sizes: ["S","M","L","XL"]
},
{
  id: 20,
  name: "Sat",
  category: "dodaci",
  price: 90,
  image: "https://www.irisimo.sk/files/product/39507/TISSOT-SEASTAR-1000-CHRONOGRAPH-T120.417.11.091.00.jpg",
  desc: "Elegantni ručni sat",
  sizes: ["Univerzalno"]
},

{
  id: 22,
  name: "Traper jakna",
  category: "jakne",
  price: 85,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9NNcdpI_TnU4-b4h3N0qItWjGhliMLnxlQ&s",
  desc: "Moderna traper jakna",
  sizes: ["S","M","L","XL"]
}
];



let cart = JSON.parse(localStorage.getItem("cart")) || [];

// PROIZVODI
function displayProducts(list = products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {

    const sizeOptions = p.sizes.map(s => `<option value="${s}">${s}</option>`).join("");

    container.innerHTML += `
      <div class="bg-white p-4 rounded-xl shadow">

        <img src="${p.image}" class="w-full aspect-square object-cover rounded">

        <h2 class="font-bold mt-2">${p.name}</h2>
        <p class="text-sm text-gray-600">${p.desc}</p>
        <p class="font-bold">${p.price} €</p>

        <select id="size-${p.id}" class="w-full border mt-2 p-1 rounded">
          ${sizeOptions}
        </select>

        <button onclick="addToCart(${p.id})"
          class="bg-blue-500 text-white w-full mt-2 py-1 rounded">
          Dodaj
        </button>
      </div>
    `;
  });
}

// KOŠARICA
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const size = document.getElementById(`size-${id}`).value;

  const item = cart.find(p => p.id === id && p.size === size);

  if (item) item.quantity++;
  else cart.push({ ...product, size, quantity: 1 });

  save();
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById("cart");
  const totalEl = document.getElementById("total");

  cartEl.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price * item.quantity;

    cartEl.innerHTML += `
      <li class="flex justify-between border-b py-1">
        ${item.name} (${item.size}) x${item.quantity}

        <div>
          <button onclick="changeQty(${i}, -1)" class="px-2 bg-gray-300">-</button>
          <button onclick="changeQty(${i}, 1)" class="px-2 bg-gray-300">+</button>
          <button onclick="removeItem(${i})" class="px-2 bg-red-500 text-white">X</button>
        </div>
      </li>
    `;
  });

  totalEl.textContent = total;
}

function changeQty(i, amount) {
  cart[i].quantity += amount;

  if (cart[i].quantity <= 0) cart.splice(i, 1);

  save();
  renderCart();
}

function removeItem(i) {
  cart.splice(i, 1);
  save();
  renderCart();
}

function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// CHECKOUT NAVIGACIJA
function goCheckout() {
  console.log("Checkout kliknut");
  window.location.href = "./potvrda.html";
}

displayProducts();
renderCart();
function filterProducts(cat) {
  if (cat === "sve") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === cat);
    displayProducts(filtered);
  }
}