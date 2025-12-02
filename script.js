

<!-- =================== script.js =================== -->
<script>
let products = [
{ id: 1, name: "Premium Wheat", category: "Grains", price: 1200, gate: "G-12", broker: "+91-9876543210" },
{ id: 2, name: "Basmati Rice", category: "Grains", price: 2500, gate: "G-03", broker: "+91-9123456780" },
{ id: 3, name: "Fresh Apples", category: "Fruits", price: 90, gate: "F-07", broker: "+91-9012345678" },
{ id: 4, name: "Organic Potatoes", category: "Vegetables", price: 40, gate: "V-21", broker: "+91-9988776655" },
{ id: 5, name: "Cold-pressed Oil", category: "Oils", price: 450, gate: "O-11", broker: "+91-9191919191" }
];


let user = JSON.parse(localStorage.getItem("user")) || null;


document.getElementById("user-info").innerHTML = user ?
`Welcome, <b>${user.name}</b>` : "Please Sign Up";


if (user) document.getElementById("signup-box").style.display = "none";


function signup() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;


if (!name || !email || !pass) {
document.getElementById("signup-error").innerText = "Sab fields bharna zaroori hai";
return;
}


let userData = { name, email };
localStorage.setItem("user", JSON.stringify(userData));
location.reload();
}


function loadProducts(list) {
let box = document.getElementById("product-list");
box.innerHTML = "";


list.forEach(p => {
box.innerHTML += `
<div class='product-card' onclick='openProduct(${p.id})'>
<h3>${p.name}</h3>
<p>${p.category}</p>
<p><b>₹${p.price}</b></p>
</div>`;
});
}


loadProducts(products);


function filterProducts() {
let q = document.getElementById("search").value.toLowerCase();
let c = document.getElementById("category").value;


let filtered = products.filter(p =>
p.name.toLowerCase().includes(q) && (c === "All" || p.category === c)
);


loadProducts(filtered);
}


function openProduct(id) {
let p = products.find(x => x.id === id);


document.getElementById("p-name").innerText = p.name;
document.getElementById("p-category").innerText = "Category: " + p.category;
document.getElementById("p-price").innerText = "Price: ₹" + p.price;
document.getElementById("p-gate").innerText = p.gate;


if (!user) {
document.getElementById("broker-box").innerHTML = `
<p class='error'>Broker number dekhne ke liye signup karein</p>`;
} else {
document.getElementById("broker-box").innerHTML = `
<p><strong>Broker Number:</strong> ${p.broker}</p>
<button onclick="navigator.clipboard.writeText('${p.broker}')">Copy</button>
<a href="tel:${p.broker}"><button>Call</button></a>`;
}


document.getElementById("popup").classList.remove("hide");
}


function closePopup() {
document.getElementById("popup").classList.add("hide");
}
</script>
