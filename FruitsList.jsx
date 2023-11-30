import React from 'react';

const FruitsList = () => {
  const fruits = ["apple", "banana", "cherry", "bat"];

  // Filter out "bat" from the fruits array
  const filteredFruits = fruits.filter(fruit => fruit !== "bat");

  return (
    <div>
      <h1>Slip 8</h1>
      <h2>Fruits List</h2>
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;
