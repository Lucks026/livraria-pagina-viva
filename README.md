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

O servidor fica escutando requisições HTTP e devolve o recurso que o navegador pediu.
Quando alguém abre o endereço da página, o navegador manda um `GET /index.html` e
recebe de volta um código de status e o conteúdo do HTML.

Só depois de ler esse HTML é que o navegador descobre que ainda precisa do
`css/estilo.css`, do `js/script.js` e da `imagens/capa-livro.png`, e dispara uma
requisição nova para cada um. O servidor repete o mesmo trabalho: acha o arquivo e
devolve com o tipo de conteúdo certo.

Ele não monta a página nem roda o JavaScript desta atividade. Quem junta as peças,
aplica o CSS e executa o script é o navegador, na máquina de quem acessou.

### 2. Caminho relativo a partir de `paginas/sobre.html`

Dentro de `paginas/sobre.html` a imagem ficaria assim:

```html
<img src="../imagens/capa-livro.png" alt="Capa do livro O Jardim das Palavras Perdidas">
```

Caminho relativo parte sempre da pasta do arquivo que escreveu o caminho, e não da raiz
do projeto. Como o `sobre.html` está dentro de `paginas/`, se eu escrevesse
`imagens/capa-livro.png` o navegador iria procurar em `paginas/imagens/capa-livro.png`,
que não existe.

O `../` manda subir um nível na árvore de diretórios. Saindo de `paginas/` eu chego na
raiz do projeto, e daí `imagens/capa-livro.png` acha o arquivo certo.

### 3. Boas práticas de HTML que apliquei

Tags aninhadas e fechadas na ordem certa. Quando o aninhamento cruza, cada navegador
remonta a árvore do seu jeito, e aí o layout quebra em um e no outro não.

Nenhum `id` repetido. São 18 ids na página, todos únicos. Isso não é detalhe de estilo:
o `getElementById` devolve só a primeira ocorrência, então um id duplicado faria o
carrinho mexer no elemento errado, e o `for` do `<label>` apontaria para o campo errado.

Indentação de quatro espaços por nível, acompanhando a hierarquia. É o jeito mais rápido
de ver onde cada bloco começa e termina.

Tag semântica sempre que existe uma. Usei `header`, `nav`, `main`, `article`, `section`
e `footer` no lugar de `div`, com a justificativa de cada escolha em comentário no fim
do `index.html`. A página não tem nenhuma `div`.

`alt` descritivo na capa, dizendo o que a imagem mostra em vez de repetir o título do
livro.

Títulos em ordem: um `h1` para a marca, `h2` nas seções e `h3` nos blocos internos, sem
pular nível.

`label` ligado ao campo por `for`/`id` nos seis campos do formulário. Além da
acessibilidade, clicar no texto do rótulo já foca o campo.

`ul` nos destaques, porque a ordem dos itens não muda o sentido, e `table` no
comparativo de formatos, porque ali existe relação de linha e coluna de verdade.

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
