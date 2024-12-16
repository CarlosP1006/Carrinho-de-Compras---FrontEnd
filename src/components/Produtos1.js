// Carlos Eduardo Pereira (2024002532)
import React from 'react';
import Produto from './Produto';

const Produtos1 = ({ adicionarAoCarrinho }) => {
  // Lista de produtos disponíveis na loja
  const produtos = [
    { id: 1, nome: 'Feijão', preco: 8.50 },
    { id: 2, nome: 'Arroz', preco: 6.50 },
    { id: 3, nome: 'Açúcar', preco: 4.00 },
    { id: 4, nome: 'Sal', preco: 1.50 },
    { id: 5, nome: 'Macarrão', preco: 4.50 },
    { id: 6, nome: 'Ovos', preco: 12.50 },
    { id: 7, nome: 'Café', preco: 15.00 },
    { id: 8, nome: 'Leite', preco: 5.00 },
    { id: 9, nome: 'Óleo', preco: 6.50 },
    { id: 10, nome: 'Carne', preco: 32.50 },
    { id: 11, nome: 'Pão', preco: 3.50 },
    { id: 12, nome: 'Queijo', preco: 22.00 },
    { id: 13, nome: 'Presunto', preco: 10.00 },
    { id: 14, nome: 'Tomate', preco: 5.00 },
    { id: 15, nome: 'Alface', preco: 3.00 },
    { id: 16, nome: 'Cebola', preco: 4.00 },
    { id: 17, nome: 'Batata', preco: 4.80 },
    { id: 18, nome: 'Frango', preco: 18.00 },
    { id: 19, nome: 'Sardinha', preco: 7.00 },
    { id: 20, nome: 'Maçã', preco: 6.00 },
    { id: 21, nome: 'Banana', preco: 4.00 },
    { id: 22, nome: 'Laranja', preco: 4.50 },
    { id: 23, nome: 'Iogurte', preco: 5.50 },
    { id: 24, nome: 'Sorvete', preco: 12.00 },
    { id: 25, nome: 'Alho', preco: 2.50 },
    { id: 26, nome: 'Papel', preco: 10.00 },
    { id: 27, nome: 'Detergente', preco: 3.20 },
    { id: 28, nome: 'Shampoo', preco: 8.00 },
    { id: 30, nome: 'Sabonete', preco: 2.00 },
    { id: 31, nome: 'Paiero', preco: 20.00 },
  ];

  return (
    <div className="produto-container">
      {/* Mapeia a lista de produtos e renderiza um componente Produto para cada item */}
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          adicionarProdutoCarrinho={adicionarAoCarrinho}
        />
      ))}
    </div>
  );
};

export default Produtos1;
