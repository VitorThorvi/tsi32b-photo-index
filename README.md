# tsi32b-photo-index

- Nome da aplicação: photodex
- Identificação/Autor: Vitor Gregorio Wuchryn Martins

- Descrição do projeto: O projeto busca de forma simples resolver o problema de fotógrafos que ao fotogravar a serviço
de um cliente têm muito mais imagens do que o necessário ao final da sessão de fotografia. 
A aplicação *photodex* objetiva simplesmente mostrar aos clientes todas as imagens da sessão de fotografia, 
permitir a seleção por parte dos clientes e informar ao fotógrafo quais são as imagens escolhidas.
Integra remotamente com API da [lorem-picusm-api](https://publicapi.dev/lorem-picsum-api) e localmente com
API via json-server.

Estrutura do projeto:

O repositório inicia em tsi32b-photodex. O projeto, porém, 
tem sua raiz no diretório 'photodex'. 
Essa decisão foi tomada para tornar possível adicionar ao 
repositório projeto de logo fictícia que apesar de não estar relacionada
ao código, é relevante para o projeto.

```
photodex //raiz
    src // código fonte
        assets/
        css/
        js/
            pages/ \\ -> lógica específica relacionada a layout html
            service/ \\ -> outros códigos JS
        pages/ //html
        node_modules/ // dependencias instaladas via npm
        package.json 
        package-lock.json
```

- Prototipação no Figma: [figma prototype link](https://www.figma.com/design/lSxQBZqdWSeyPRiwx3xrzh/tsi32b---photodex?node-id=0-1&t=wLHccG77m77viV4l-1)
- Framework CSS: [Boostratp](https://getbootstrap.com/docs/5.3/getting-started/introduction/) 

---

## Endereço de Deploy - GitHub Pages

Não houve deploy no github pages.

---

## Protótipo
Prototype link: [figma prototype link](https://www.figma.com/design/lSxQBZqdWSeyPRiwx3xrzh/tsi32b---photodex?node-id=0-1&t=wLHccG77m77viV4l-1)
- [ ] Create sketch link; 
- [ ] Create browseable prototype from sketch;
---

## Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)
- [ ] import performance benchmarks list.

#### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.

- [ ] ID0 - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design como Figma, Quant UX ou Sketch.
- [ ] ID 01 - Implementa um layout responsivo de uma página web utilizando um Framework CSS, como Bootstrap ou Tailwind, que se adapta adequadamente a diferentes tamanhos de tela e dispositivos.
- [ ] ID 02 - Utiliza técnicas nativas de CSS, como Flexbox ou Grid Layout, para criar layouts responsivos e fluidos em diferentes resoluções de tela.
- [ ] ID 03 - Utiliza os componentes CSS e JavaScript oferecidos por um Framework CSS, como cards, modais ou carrosséis, aplicando estilos personalizados conforme o necessário.
- [ ] ID 04 - Implementa um layout fluido e responsivo utilizando unidades de viewport relativas (vw, vh) em vez de unidades fixas (px) para criar uma experiência de usuário consistente em diferentes dispositivos e tamanhos de tela.
- [ ] ID 05 - Implementa animações em elementos da página, como hover, fadeIn/fadeOut, slideIn/slideOut, utilizando CSS Animations ou bibliotecas de animação, como o Animate.css, para fornecer feedback visual ao usuário e criar uma experiência interativa.
- [ ] ID 06 - Cria transições personalizadas entre diferentes estados da página ou elementos, como mudanças de layout, alterações de cor ou exibição/hide de elementos, usando CSS Transitions ou CSS Animation, para melhorar a usabilidade e a aparência da aplicação.
- [ ] ID 07 - Aplica um Design System consistente, definindo diretrizes de estilo, cores, tipografia e padrões de componentes que são seguidos em toda a aplicação, garantindo uma experiência de usuário uniforme e atraente.
- [ ] ID 08 - Implementa pré-processadores CSS, como o Sass, em conjunto com um Framework CSS ou de forma isolada, para organizar e modularizar o código CSS, aplicando variáveis, mixins e funções para facilitar a manutenção e escalabilidade dos estilos.
- [ ] ID 09 - Aplica tipografia responsiva utilizando media queries ou a função clamp(), em conjunto com unidades relativas como rem, em ou vw, para ajustar o tamanho da fonte de acordo com diferentes tamanhos de tela.

#### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente, utilizando a API do HTML e expressões regulares (REGEX).

- [ ] ID 10 - Implementa tratamento de formulários no lado cliente com apresentação de mensagens de erro ou sucesso, utilizando os recursos da API do HTML, como validação de campos obrigatórios, tipo de entrada e limites de caracteres, garantindo que os dados inseridos sejam válidos antes de serem enviados para o servidor.
- [ ] ID 11 - Aplica expressões regulares (REGEX) de forma eficiente para realizar validações customizadas nos campos de formulários, como formatos específicos de e-mail, telefone, data ou outros padrões personalizados definidos pelos requisitos do projeto.
- [ ] ID 12 - Incorpora elementos de listagem, como checkbox, radio ou select, de maneira eficiente em formulários web, possibilitando a seleção e coleta precisa de dados pelos usuários.
- [ ] ID 13 - Realiza a escrita e leitura de dados no Web Storage, permitindo a persistência de informações entre sessões de usuário e fornecendo uma maneira eficaz de armazenar dados localmente no navegador.

#### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web, incluindo Node.js, NPM e linters para garantir a qualidade do código, juntamento com boas práticas de versionamento e organização de projetos.

- [ ] ID 14 - Configura adequadamente um ambiente de desenvolvimento usando Node.js e NPM para gerenciar pacotes e dependências do projeto, facilitando a instalação e o uso de bibliotecas e ferramentas de terceiros.
- [ ] ID 15 - Utiliza linters, como ESLint ou Stylelint, para analisar e corrigir automaticamente problemas de código, incluindo erros de sintaxe, estilo e boas práticas, garantindo a qualidade e consistência do código do projeto.
- [ ] ID 16 - Adota boas práticas de versionamento utilizando sistemas como Git, criando e gerenciando repositórios com branches adequados.
- [ ] ID 17 - Utiliza técnicas de minificação e otimização de recursos, como minificação de CSS e JavaScript e otimização de imagens, para melhorar o desempenho e o tempo de carregamento do site ou aplicação.
- [ ] ID 18 - Organiza os arquivos do projeto em uma estrutura coerente, lógica e modular, facilitando a localização, manutenção e escalabilidade.
- [ ] ID 19 - Utiliza as metodologias BEM (Block Element Modifier) ou SMACSS (Scalable and Modular Architecture for CSS) para organizar e estruturar os estilos CSS de forma eficiente, garantindo a reutilização de estilos, a legibilidade do código e a manutenção sustentável do projeto.

#### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web.

- [ ] ID 20 - Utiliza a biblioteca jQuery para manipular o DOM e aprimorar a interatividade das páginas web, implementando funcionalidades como eventos, animações e manipulação de elementos HTML de forma eficiente.
- [ ] ID 21 - Seleciona e integra com sucesso um plugin jQuery, como o jQuery Mask Plugin ou outro plugin relevante para o projeto, a fim de melhorar a funcionalidade ou a aparência de elementos específicos em uma página web.
- [ ] ID 22 - Utiliza bibliotecas de web components, como Lit, para criar componentes reutilizáveis e encapsulados, melhorando a modularidade e a manutenibilidade das páginas web.
- [ ] ID 23 - Utiliza uma biblioteca de componentes prontos, como Material Web Components ou outra de escolha, ou então, algum componente independente (standalone) a fim de oferecer funcionalidades específicas sem a necessidade de estar integrado a uma biblioteca completa.

#### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo a obtenção e manipulação de dados dinamicamente.

- [ ] ID 24 - Realiza requisições assíncronas para APIs públicas, utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para obter dados dinâmicos e realizar a manipulação e exibição dos resultados na página web.
- [ ] ID 25 - Realiza requisições assíncronas para uma API fake utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para manipular dados e exibição dos resultados na página web.
- [ ] ID 26 - Realiza requisições assíncronas para uma API fake utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para exibição dos dados na página web.

## Manual de execução


### Execução da API local:

Para facilitar a disponibilidade da ferramenta 
'json-server' utilizada para o desenvolvimento, recomenda-se
instalar globalmente com npm o pacote 'json-server'.
Para isso, execute:

```bash
npm install -g json-server@0.17.4
```
Com o pacote instalado desta forma o script `npm run db:dev`
executará normalmente e a API local estará disponível no endpoint http://localhost:3000/customer


