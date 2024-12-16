// Carlos Eduardo Pereira (2024002532)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importando Link
import Home from './components/Home';
import Produtos1 from './components/Produtos1';
import Carrinho from './components/Carrinho';
import './index.css'; // Certifique-se que o CSS está sendo carregado corretamente

const App = () => {
  const [carrinho, setCarrinho] = React.useState([]); // Estado para armazenar os itens do carrinho

  // Função para adicionar produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      const produtoExistente = prevCarrinho.find((item) => item.id === produto.id);
      if (produtoExistente) {
        return prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 } // Incrementa a quantidade do produto no carrinho
            : item
        );
      } else {
        return [...prevCarrinho, { ...produto, quantidade: 1 }]; // Adiciona um novo produto ao carrinho
      }
    });
  };

  // Função para remover produto do carrinho
  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 } // Decrementa a quantidade do produto no carrinho
            : item
        )
        .filter((item) => item.quantidade > 0) // Remove o produto quando a quantidade chega a zero
    );
  };

  // Função para calcular o total do carrinho
  const calcularTotal = () => {
    return carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade, // Calcula o total com base no preço e quantidade
      0
    ).toFixed(2); // Formata o total com duas casas decimais
  };

  return (
    <div className="app-container">
      <Router>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/carrinho">Carrinho</Link></li>
          </ul>
        </nav>

        {/* Definindo as rotas para as páginas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos1 adicionarAoCarrinho={adicionarAoCarrinho} />} />
          <Route path="/carrinho" element={<Carrinho carrinho={carrinho} calcularTotal={calcularTotal} removerDoCarrinho={removerDoCarrinho} />} />
        </Routes>
      </Router>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
