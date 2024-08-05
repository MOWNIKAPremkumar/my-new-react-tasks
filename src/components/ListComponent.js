import React from 'react';

function ListComponent() {
  const gadgets = ['Mobilephone', 'Laptops', 'Tablet', 'computer', 'TV', 'Smart Watch'];

  return (
   <div>
   <h3> Gadgets </h3>
   <ul>
      {gadgets.map(function(gadgets, index) {
        return <li key={index}>{gadgets}</li>;
      })}
    </ul>
    </div>
  );
}

export default ListComponent;
