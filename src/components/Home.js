import React from 'react';

const Home = () => {
  return (
    <div className='fundo-home' >
      <h1 className='titulo'>Bem-vindo ao Meu Mercado!</h1>
      <p className='texto-projeto'>Bem-vindo ao Meu Mercado! Este projeto foi desenvolvido como parte da disciplina Desenvolvimento Web Optativa 2024 do curso de Engenharia de Computação da UNIFEI, sob orientação do professor Eduardo. O sistema simula uma loja virtual, permitindo aos usuários visualizar produtos, adicionar itens ao carrinho e realizar operações de adição e remoção. A aplicação foi construída utilizando React no front-end, garantindo uma interface interativa e dinâmica, e Express no back-end, que oferece uma API REST para gerenciar as interações com os dados. O banco de dados foi simulado com arquivos JSON, onde o arquivo produtos.json armazena informações sobre os produtos, como nome, preço e quantidade, e o arquivo carrinho.json guarda os itens adicionados ao carrinho de compras. O projeto é projetado para ser simples, mas funcional, permitindo aos usuários realizar compras em um ambiente simulado. A API REST foi desenvolvida com endpoints que possibilitam listar, adicionar e excluir produtos, bem como adicionar e remover itens do carrinho de compras. A comunicação entre o front-end e o back-end é realizada por meio de requisições HTTP, utilizando os métodos GET, POST e DELETE. Ao implementar esses endpoints, foi possível garantir que os dados dos produtos e do carrinho sejam manipulados adequadamente. O back-end gerencia a leitura e escrita desses dados em arquivos JSON, sem a necessidade de um banco de dados tradicional, o que facilita o processo de desenvolvimento e implementação. O sistema foi projetado para ser expandido com funcionalidades adicionais, como autenticação de usuários, integração com sistemas de pagamento e a implementação de mais métodos de manipulação de dados. Contudo, funcionalidades como a edição de produtos não foram implementadas, pois não se encaixavam bem no contexto do projeto, que focou em adicionar e remover itens da lista de produtos e do carrinho. A aplicação foi pensada para ser uma boa base para o aprendizado e aplicação de conceitos de desenvolvimento web, API REST e manipulação de dados, oferecendo uma estrutura simples, mas robusta, para um e-commerce básico.</p>
    </div>
  );
};

export default Home;
