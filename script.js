let produtos = JSON.parse(localStorage.getItem("produtos")) || [

{nome:"Camiseta Streetwear",categoria:"camisas",tamanho:"P M G GG",preco:"79.90"},
{nome:"Camiseta Oversized",categoria:"camisas",tamanho:"P M G GG",preco:"89.90"},
{nome:"Bermuda Street",categoria:"bermudas",tamanho:"38 40 42 44",preco:"99.90"},
{nome:"Boné Snapback",categoria:"bones",tamanho:"Único",preco:"69.90"}

];

function mostrarProdutos(){

let container = document.getElementById("produtos");
container.innerHTML="";

let categorias = {};

produtos.forEach(p=>{
  if(!categorias[p.categoria]) categorias[p.categoria] = [];
  categorias[p.categoria].push(p);
});

for(let cat in categorias){

container.innerHTML += `<h2 id="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</h2><div class="produtos">`;

categorias[cat].forEach(p=>{
container.innerHTML+=`
<div class="produto">
<h3>${p.nome}</h3>
<p>Tamanho: ${p.tamanho}</p>
<p>Preço: R$${p.preco}</p>
<button onclick="comprar()">Comprar</button>
</div>
`;
});

container.innerHTML += "</div>";

}

}

function comprar(){
window.open("https://wa.me/5599999999999");
}

mostrarProdutos();