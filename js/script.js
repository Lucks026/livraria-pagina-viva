/* =========================================================================
   Livraria Página Viva - script do carrinho
   Aluno: Lucas Lemos Barbosa | Professor: Everton

   PAPEL DO JAVASCRIPT NESTE FLUXO (Etapa 5)
   Dos três arquivos, o JavaScript é o que roda dentro do navegador de quem
   acessa, depois que a página já carregou. O HTML entrega a estrutura e o CSS
   entrega a aparência, mas nenhum dos dois reage ao que a pessoa faz. Aqui ele
   fica ouvindo o clique no botão "Adicionar ao carrinho" e, a cada clique, cria
   um <li> novo e atualiza o contador direto no DOM. Como isso tudo acontece na
   memória do documento já aberto, a tela muda na hora, sem pedir nada de novo ao
   servidor e sem recarregar a página.
   ========================================================================= */

// Dados do livro exibido nesta página.
const TITULO_LIVRO = "O Jardim das Palavras Perdidas";

// Etapa 5.2: seleção pelo id. O argumento é o id puro, sem "#" e sem seletor CSS.
const botao = document.getElementById("btn-adicionar");
const carrinho = document.getElementById("carrinho");
const contador = document.getElementById("contador");

// Quantidade de itens já adicionados.
let totalItens = 0;

// Etapa 5.4: monta o item, insere na lista e atualiza o contador.
function adicionarAoCarrinho() {
    totalItens = totalItens + 1;

    const novoItem = document.createElement("li");
    novoItem.textContent = "1x " + TITULO_LIVRO;
    carrinho.appendChild(novoItem);

    // Etapa 5.5: contador atualizado também por textContent.
    contador.textContent = totalItens;
}

/* Etapa 5.3: passa-se a REFERÊNCIA da função, sem parênteses.
   Escrever adicionarAoCarrinho() executaria a função na hora do registro e
   entregaria o retorno dela (undefined) ao addEventListener. */
botao.addEventListener("click", adicionarAoCarrinho);
