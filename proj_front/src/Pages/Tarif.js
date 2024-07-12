import React, { useState } from 'react';
import "./tarif.css";
import Article from '../Components/Article';

const Tarif = () => {
   
  const [articles, setArticles] = useState([
    { id: 1, name: 'Article 1', price: 10, quantity: 2 },
    { id: 2, name: 'Article 2', price: 15, quantity: 1 },
    { id: 3, name: 'Article 3', price: 20, quantity: 5 },
  ]);

  return (
    <div>
      <h2>Tableau des Articles</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <Article key={article.id} article={article} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tarif;