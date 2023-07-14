![buscador-de-paises-_online-video-cutter com_](https://github.com/danibenfica/Api-Buscador-de-Paises-DNC/assets/103818625/f80e1d14-7d19-446e-a13b-b8fe7c741268)


# API de Buscador de Países

[Link da API aqui!](https://restcountries.com/)

[Link do projeto online aqui!](https://api-buscador-de-paises.vercel.app/)

**Lembrando que para encontrar o país, você precisa escrever o nome em inglês, como está no input!**

Este é um projeto de exercício desenvolvido durante o módulo de JavaScript, que tem como objetivo demonstrar como consumir uma API de países e realizar a busca por informações sobre eles. O projeto utiliza HTML, CSS e JavaScript para criar uma interface simples de pesquisa de países.

## Como baixar o projeto:

Para baoxar o projeto, siga as etapas abaixo:

1. Abra o terminal (cmd ou um de sua preferência).

2. Navegue até a pasta onde deseja clonar o projeto.

3. Execute o seguinte comando para clonar o repositório:

   ```
   git clone https://github.com/danibenfica/api-buscador-de-paises.git
   ```

4. Aguarde até que o processo de clonagem seja concluído.


## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML: Linguagem de marcação para estruturar a página web.
- CSS: Folhas de estilo para estilizar e personalizar a aparência da página.
- JavaScript: Linguagem de programação utilizada para interações e manipulações dos elementos na página, bem como para consumir a API de países.

## Descrição do Projeto

O projeto consiste em uma página web onde os usuários podem pesquisar informações sobre países. Ao inserir o nome de um país (em inglês) na caixa de pesquisa e clicar no botão "Pesquisar", o sistema consome uma API de países e exibe informações relevantes sobre o país pesquisado.

A página é composta por um formulário simples de pesquisa, onde o usuário pode inserir o nome do país desejado. Após a pesquisa, os seguintes detalhes são exibidos em um cartão:

- Nome do país
- Capital
- Continente
- População

Além disso, uma bandeira do país é exibida no cartão.

## Funções Principais

### 1. `Procurar()`

Essa função é chamada quando o usuário clica no botão "Pesquisar" e realiza a busca de informações sobre o país inserido na caixa de pesquisa. Aqui está um resumo das principais etapas realizadas pela função:

1. Obtém o valor do país inserido na caixa de pesquisa.
2. Constrói a URL da API com o nome do país.
3. Faz uma requisição fetch para a API usando a URL construída.
4. Recebe a resposta da API e converte-a em formato JSON.
5. Extrai as informações relevantes do país da resposta recebida.
6. Atualiza o conteúdo do cartão na página com as informações do país encontrado.

Exemplo:

```javascript
function Procurar() {
    document.getElementById('card').style.setProperty('display', 'block', 'important');
    let pais = document.getElementById('pais').value;
    let finalUrl = `https://restcountries.com/v3.1/name/${pais}?fullText=true`;
    fetch(finalUrl)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data[0]);
            let bandeira = document.getElementById('bandeira');
            let nome = document.getElementById('nome');
            let capital = document.getElementById('capital');
            let populacao = document.getElementById('pop');
            let continente = document.getElementById('cont');

            nome.innerHTML = pais;
            capital.innerHTML = data[0].capital[0];
            continente.innerHTML = data[0].continents[0];
            populacao.innerHTML = data[0].population;
            bandeira.src = data[0].flags.svg;
        });
}
```

Nesse exemplo, a função `Procurar()` é responsável por atualizar o cartão na página com as informações do país pesquisado. Ela utiliza a função `fetch()` para fazer uma requisição à API de países e recebe a resposta em formato JSON. Em seguida, os dados são extraídos da resposta e inseridos nos elementos HTML correspondentes para exibição na página.

## Conclusão

O projeto de pesquisa de países demonstra a integração de JavaScript com uma API de países para fornecer informações relevantes aos usuários. Ele apresenta um exemplo prático de como consumir dados de uma API, processá-los e exibi-los em uma página da web.

Qualquer dúvida ou sugestão, pode me contatar! :heart: