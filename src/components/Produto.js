// Carlos Eduardo Pereira (2024002532)
import React from 'react';

const Produto = ({ produto, adicionarProdutoCarrinho }) => {
  return (
    <div className="produto-container">
      <table className="produto-tabela">
        <tbody>
          <tr>
            <td className="produto-info">
              {/* Exibe o nome e o preço do produto */}
              <span>{produto.nome}</span>
              <span> R$ {produto.preco}</span>
            </td>
            <td className="produto-botao">
              {/* Botão para adicionar o produto ao carrinho */}
              <button className="Botoes-Dos-Produtos" onClick={() => adicionarProdutoCarrinho(produto)}>
                Adicionar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Produto;
