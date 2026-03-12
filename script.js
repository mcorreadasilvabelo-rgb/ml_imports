let produtos = [
  {nome:"Camiseta Streetwear", categoria:"camisas", tamanho:"P M G GG", preco:"79.90", img:"https://via.placeholder.com/220x220.png?text=Camiseta+1"},
  {nome:"Camiseta Oversized", categoria:"camisas", tamanho:"P M G GG", preco:"89.90", img:"https://via.placeholder.com/220x220.png?text=Camiseta+2"},
  {nome:"Bermuda Street", categoria:"bermudas", tamanho:"38 40 42 44", preco:"99.90", img:"https://via.placeholder.com/220x220.png?text=Bermuda"},
  {nome:"Boné Snapback", categoria:"bones", tamanho:"Único", preco:"69.90", img:"https://via.placeholder.com/220x220.png?text=Bone"}
];

function mostrarProdutos(){
  let container = document.getElementById('produtos');
  container.innerHTML = '';
  let categorias = {};
  produtos.forEach(p=>{ if(!categorias[p.categoria]) categorias[p.categoria]=[]; categorias[p.categoria].push(p); });
  for(let cat in categorias){
    container.innerHTML += `<h2 id='${cat}'>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>`;
    categorias[cat].forEach(p=>{
      container.innerHTML += `
      <div class='produto'>
        <img src='${p.img}' alt='${p.nome}'>
        <h3>${p.nome}</h3>
        <p>Tamanhos: ${p.tamanho}</p>
        <p>R$${p.preco}</p>
        <button onclick='comprar()'>Comprar</button>
      </div>
      `;
    });
  }
}

function comprar(){ window.open('https://wa.me/5599999999999'); }

mostrarProdutos();