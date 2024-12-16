// Carlos Eduardo Pereira (2024002532)
import React from 'react';

const Carrinho = ({ carrinho, calcularTotal, removerDoCarrinho }) => {
  return (
    <div className="carrinho-container">
      <h2 className='Infos-Fora-Da-Tabela'>Seu Carrinho</h2>
      <table className="carrinho-tabela">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia cada item no carrinho e exibe os detalhes do produto */}
          {carrinho.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>R${item.preco}</td>
              <td>{item.quantidade}</td>
              <td>
                {/* Chama a função para remover o item do carrinho */}
                <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Exibe o total do carrinho calculado pela função calcularTotal */}
      <h3 className='Infos-Fora-Da-Tabela'>Total: R${calcularTotal()}</h3>
    </div>
  );
};

export default Carrinho;
