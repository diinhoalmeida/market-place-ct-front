<h1 align="center">Coffe and Tea Doc</h1>
<p align="center"><i>
Coffe and Tea documentação de versionamento</i></p>

## ****💻 Sobre****
O site Coffee and Tea é uma aplicação de compra de chás e cafés, podendo também realizar compras por assinatura obtendo desconto em seus produtos. É possível realizar cadastro e também login para acessar as assinaturas e também altera-las.

## 🚀 Tecnologias
<p display="inline-block">
  <img width="48" src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="react-logo"/>
  <img width="48" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" alt="typescript-logo"/>
  <img width="48" src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind-logo"/>
   <img width="48" src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="vite-logo"/>
   <img width="48" src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original-wordmark.svg" alt="html-logo"/>
  <img width="48" src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original-wordmark.svg" alt="css-logo"/>
   <img width="48" src="https://avatars.githubusercontent.com/u/75042455?s=280&v=4" alt="radix-logo"/>
</p>
                                                                                                  
### Development Tools

<p display="inline-block">
  <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode-logo"/>

## 👨‍💻 Rodando a Aplicação

- Clonando o projeto:
```
$git clone https://github.com/diinhoalmeida/market-place-ct-front.git
```

- Checando pastas no diretório em questão: 
```
$ls
```

- Entrando na pasta do projeto:
```
$cd market-place-ct-front
```

- Istalando depêndencias:
```
$npm i
```

- Iniciando o projeto:
```
$npm run dev
```

## ****✨ Features****

Algumas features que valem a pena destacar:

✔ Cadastro e login de usuário;<br />
✔ Upload de Assinaturas clicando no ícone em forma de estrela após logar acessando o “Meu Perfil”;<br />
✔ Filtro de produtos, escolha apenas café, apenas chá, ou os dois;<br />
✔ Visualizar o carrinho de compras clicando no ícone de carrinho;<br />
✔ Dados salvos em storage, atualize sua página sem perder seus estados;<br />
✔ Navegação simples, site intuitivo;<br />

## Estrutura de Componentes da Aplicação

- pages
    - **BagPage**
        - `<Header />`
        - `<CardBagPage />`
        - `<ButtonConfirm />`
        - `<Footer />`
    - **CheckoutPage**
        - `<Header />`
        - `<InputForm />`
        - `<ButtonConfirm />`
        - `<Footer />`
    - HomePage
        - `<Header />`
        - `<CardProduct />`
        - `<Footer />`
    - MarketPage
        - `<Header />`
        - `<CardProduct />`
        - `<Footer />`
    - ProductPage
        - `<Header />`
        - `<Assinaturas />`
        - `<CardProduct />`
        - `<Footer />`
    - ProfilePage
        - `<Header />`
        - `<CardSignature />`
        - `<Footer />`
        - `<ModalUpdateSignature />`
        
