// Carlos Eduardo Pereira (2024002532)
import React from 'react';
import Carrinho from './Carrinho'; // Importando o componente Carrinho

const Project = ({ carrinho, setCarrinho }) => {
  // Lista de produtos disponíveis
  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 20 },
    { id: 2, nome: 'Produto 2', preco: 30 },
    { id: 3, nome: 'Produto 3', preco: 40 }
  ];

  // Função para adicionar um produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  // Função para remover um produto do carrinho
  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter(item => item.id !== id));
  };

  // Função para calcular o total do carrinho
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0);
  };

  return (
    <div>
      <h2>Produtos</h2>
      <div>
        {/* Exibe cada produto com o botão para adicionar ao carrinho */}
        {produtos.map(produto => (
          <div key={produto.id} style={{ marginBottom: '20px' }}>
            <span>{produto.nome} - R${produto.preco}</span>
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

      {/* Exibe o carrinho de compras com a função de cálculo e remoção */}
      <Carrinho 
        carrinho={carrinho} 
        calcularTotal={calcularTotal} 
        removerDoCarrinho={removerDoCarrinho} 
      />
    </div>
  );
};

export default Project;
