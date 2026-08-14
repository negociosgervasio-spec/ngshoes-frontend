# 🛒 Frontend - Loja Online

Este projeto é um **frontend em React** com suporte a **TypeScript**, **TailwindCSS**, **React Router DOM** e **Context API** para gerenciamento de estado global.  
Ele se conecta a um backend Node/Express com **MongoDB/Mongoose** para autenticação e persistência de dados.

---

## 🚀 Tecnologias utilizadas
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/) para navegação
- [TailwindCSS](https://tailwindcss.com/) para estilização
- Context API para gerenciamento do **carrinho de compras**
- Persistência no **localStorage**
- Autenticação JWT integrada com **MongoDB/Mongoose**

---

## 📦 Funcionalidades
- Cadastro e login de usuários com autenticação JWT
- Exibição de produtos por categoria
- Carrinho de compras com:
  - Adicionar, remover e atualizar quantidade
  - Persistência automática no `localStorage`
  - Cálculo de subtotal, frete e total
- Rotas protegidas (somente usuários autenticados acessam determinadas páginas)
- Layout responsivo com TailwindCSS

---

## ⚙️ Instalação e execução

### 1. Clonar o repositório
```bash
git clone https://github.com/seuusuario/frontend-loja.git
cd frontend-loja
