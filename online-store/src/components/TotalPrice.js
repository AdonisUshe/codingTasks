import React from 'react';

// TotalPrice component to display the total price of purchased products
const TotalPrice = ({ totalPrice }) => {
    // Don't display the component if the total price is 0
    if (totalPrice === 0) return null;

    return (
        <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
            <h2>Total price: ${totalPrice}</h2>
        </div>
    );
};

export default TotalPrice;
