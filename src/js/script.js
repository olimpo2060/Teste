// 1. Vetor de dados (Array de produtos da vitrine)
const produtos = [
  { id: 1, nome: "Notebook Gamer", preco: "R$ 4.500,00" },
  { id: 2, nome: "Smartphone Pro", preco: "R$ 3.200,00" },
  { id: 3, nome: "Headset Wireless", preco: "R$ 450,00" },
  { id: 4, nome: "Teclado Mecânico", preco: "R$ 300,00" },
  { id: 5, nome: "Monitor 144Hz", preco: "R$ 1.200,00" },
  { id: 6, nome: "Mouse Óptico", preco: "R$ 150,00" }
];

// 2. Mapeamento de elementos do DOM
const containerVitrine = document.getElementById("container-vitrine");
const elementoContador = document.getElementById("contador");
const elementoMensagem = document.getElementById("mensagem");

// Variável para acumular a contagem
let totalCliques = 0;

// 3. Renderização dinâmica com laço de repetição (forEach)
produtos.forEach((produto) => {
  // Criação dinâmica do card
  const card = document.createElement("div");
  card.classList.add("card-item");

  card.innerHTML = `
    <h3>${produto.nome}</h3>
    <p>${produto.preco}</p>
  `;

  // Evento de passar o mouse (mouseover)
  card.addEventListener("mouseover", () => {
    elementoMensagem.innerText = `Você está analisando: ${produto.nome}`;
  });

  // Evento de tirar o mouse (mouseout)
  card.addEventListener("mouseout", () => {
    elementoMensagem.innerText = "Passe o mouse sobre os produtos ou clique para interagir.";
  });

  // Evento de clique
  card.addEventListener("click", () => {
    totalCliques++;
    elementoContador.innerText = totalCliques;

    // Mensagem personalizada de acordo com o volume de interações
    if (totalCliques === 1) {
      elementoMensagem.innerText = `Você deu seu primeiro clique em: ${produto.nome}!`;
    } else if (totalCliques <= 5) {
      elementoMensagem.innerText = `Você clicou no item ${produto.nome}. Total de ${totalCliques} interações.`;
    } else {
      elementoMensagem.innerText = `Usuário bastante ativo! ${totalCliques} cliques registrados.`;
    }
  });

  // Injeção do elemento gerado dentro da estrutura da página
  containerVitrine.appendChild(card);
});