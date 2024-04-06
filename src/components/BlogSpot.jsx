import React from 'react';

const BlogSpot = ({ title, links }) => {
  const renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}>
        <a href={link.url}>{link.text}</a>
      </li>
    ));
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <ul>{renderLinks()}</ul>
      </nav>
    </header>
  );
};

export default BlogSpot;