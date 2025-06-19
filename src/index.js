import React from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data.js';
import './index.css';

function App() {
  // Filter out sold-out pizzas
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className="container">
      <Header />
      <Menu pizzas={pizzas} />
      <Footer numPizzas={numPizzas} />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu({ pizzas }) {
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later ☺️.</p>
      )}
    </main>
  );
}

function Pizza({ name, photoName, price, ingredients, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
}

function Footer({ numPizzas }) {
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 & {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order Online</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
