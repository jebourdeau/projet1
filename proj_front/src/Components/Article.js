import React from 'react';

const Article = ({ article }) => {
  return (
    <tr>
      <td>{article.id}</td>
      <td>{article.name}</td>
      <td>{article.price}</td>
      <td>{article.quantity}</td>
    </tr>
  );
}

export default Article;
