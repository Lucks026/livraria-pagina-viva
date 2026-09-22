# Catálogo da Livraria Página Viva

Atividade prática de HTML, CSS e JavaScript.

Aluno: Lucas Lemos Barbosa
Professor: Everton
Entrega: 22/09/2026

Página de cadastro de um livro no catálogo da livraria fictícia "Página Viva", feita em
HTML, CSS e JavaScript puros. Sem framework e sem dependência externa.

O visual segue o tema de terminal que uso nos meus projetos: fundo escuro, fonte
monoespaçada, `$` antes dos títulos, `./` nos links do menu. É tudo CSS, não tem imagem
de interface nem biblioteca de ícones.

## Estrutura

```
livraria-pagina-viva/
├── index.html
├── README.md
├── css/
│   └── estilo.css
├── imagens/
│   └── capa-livro.png
└── js/
    └── script.js
```

Os caminhos declarados no `index.html` são todos relativos à raiz do projeto:
`css/estilo.css`, `imagens/capa-livro.png` e `js/script.js`.

## Como abrir

Abra o `index.html` no navegador. Não tem build nem instalação. Testei no Chrome e usei
o modo de dispositivo móvel do DevTools para conferir o corte em 600px.

## Respostas

### 1. O papel de um servidor Web ao carregar esta página

O servidor atende pedido e devolve arquivo. É basicamente isso.

Quando alguém abre o endereço, o navegador manda um `GET /index.html`. O servidor acha
o arquivo, responde com um código de status e manda o HTML junto. Aí o navegador lê esse
HTML e descobre que falta coisa: o `css/estilo.css`, o `js/script.js` e a
`imagens/capa-livro.png`. Cada um vira uma requisição nova, e o servidor faz o mesmo
trabalho de novo, mais três vezes.

O que ele não faz é montar a página. Não aplica o CSS, não roda o meu JavaScript, não
sabe que existe um carrinho. Isso tudo acontece na máquina de quem abriu o site.

Dá pra provar com esta atividade mesmo: ela funciona inteira abrindo o `index.html`
direto do disco, sem servidor nenhum no meio. O servidor só importa quando a página
precisa chegar em outra máquina.

### 2. Caminho relativo a partir de `paginas/sobre.html`

```html
<img src="../imagens/capa-livro.png" alt="Capa do livro O Jardim das Palavras Perdidas">
```

Caminho relativo não parte da raiz do projeto. Parte da pasta onde está o arquivo que
escreveu o caminho. Como o `sobre.html` moraria em `paginas/`, se eu escrevesse só
`imagens/capa-livro.png` o navegador iria caçar em `paginas/imagens/capa-livro.png` e
tomar 404.

O `../` é o "sobe um nível". De `paginas/` eu volto para a raiz, e de lá o
`imagens/capa-livro.png` existe. Se a página estivesse duas pastas para dentro, seriam
dois: `../../imagens/capa-livro.png`.

### 3. Boas práticas de HTML que apliquei

Comecei pelo óbvio, que é também o que mais quebra página: tag aberta dentro de um pai
tem que fechar dentro dele. Quando o aninhamento cruza, cada navegador remonta a árvore
do jeito dele e o layout quebra num e no outro não.

Nenhum `id` repetido, são 18 na página. Isso aqui não é capricho de padrão. O
`getElementById` devolve só o primeiro que encontrar, então id duplicado faria o carrinho
mexer no elemento errado, e o `for` de um `<label>` apontaria para o campo errado.

Indentação de quatro espaços por nível. Num arquivo de 230 linhas é o que me deixa ver
onde cada bloco começa e termina sem ficar contando tag na mão.

Tag semântica sempre que existe uma, e a página acabou sem nenhuma `div`. O lugar onde
quase usei uma foi o contêiner que segura os dados do livro ao lado da capa, que é puro
layout. Resolvi com `<section>` e expliquei o porquê no comentário do fim do arquivo.

O `alt` da capa descreve a imagem em vez de repetir o título do livro. Se o arquivo não
carregar, ou se a pessoa estiver de leitor de tela, o texto ainda diz o que era para
estar ali.

Títulos em ordem, um `h1` só, `h2` nas seções, `h3` dentro delas, sem pular nível. E
`label` ligado por `for`/`id` nos seis campos do formulário, o que de quebra faz clicar
no rótulo já focar o campo.

Por último, `ul` nos destaques e `table` nos formatos. Embaralhar os destaques não muda
nada, então é lista. A tabela cruza formato com preço e prazo, que é relação de linha e
coluna de verdade. Dava para deixar as duas coisas com a mesma aparência no CSS, mas o
sentido da marcação seria outro.

## Onde está cada etapa

| Etapa | Onde |
|---|---|
| 1. HTML semântico | `index.html`, com o comentário de justificativa no fim do arquivo |
| 2. Seletores, especificidade e cascata | `css/estilo.css`, blocos `[1]` a `[4]` e o bloco do experimento de especificidade |
| 3. Flexbox e Grid | `css/estilo.css`: `.menu-lista` e `.card-livro` em Flex, `.grade-formatos` em Grid, cada um com a justificativa em comentário |
| 4. Responsividade | `meta viewport` no `index.html` e a `@media (max-width: 600px)` no fim do `css/estilo.css` |
| 5. JavaScript e DOM | `js/script.js` |
| 6. Formulário de contato | `index.html`, dentro de `<section id="contato">` |
| 7. Organização e caminhos | a estrutura acima e as respostas 1 a 3 |
