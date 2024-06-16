import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Card, Button, Row, Col } from 'react-bootstrap';
import TotalPrice from '../components/TotalPrice';

// Array of product objects
const products = [
    { id: 1, title: '100% LINEN BLAZER', description: 'Dress to impress blazer', price: 300, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/fe61/9205/90514d1f981a/ba2ae1d668ce/04307408800-e1/04307408800-e1.jpg?ts=1711010667946&w=750' },
    { id: 2, title: '100% LINEN SUIT BLAZER', description: 'Straight fit blazer for any occasion', price: 400, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/1400/97f5/e4f44bf59479/8bda661ce4df/04307443052-e1/04307443052-e1.jpg?ts=1704970206800&w=750' },
    { id: 3, title: 'SUIT BLAZER', description: 'Slim fit blazer with notched lapel collar', price: 700, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/d117/3313/2ecb45af963b/d547afc7a3ab/04307408505-e1/04307408505-e1.jpg?ts=1705504324665&w=750' },
    { id: 4, title: 'DOUBLE BREASTED SLIM FIT BLAZER', description: 'Regular fit blazer made of linen', price: 800, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/2a62/745f/5acb4bd6b484/336ec7a2ac55/06861465500-e1/06861465500-e1.jpg?ts=1714657860683&w=750' },
    { id: 5, title: 'DOUBLE BREASTED BESPOKE BLAZER', description: 'Notched lapel collar blazer', price: 500, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/aef2/f180/db08478a83bc/699e521d1d02/04885774401-e1/04885774401-e1.jpg?ts=1715854199736&w=750' },
    { id: 6, title: 'WOOL BLAZER', description: 'Straight fit blazer made of linen', price: 600, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/7c50/8003/e936499f8dd6/be6781e40a0e/05566310064-e1/05566310064-e1.jpg?ts=1714477441081&w=750' },
    { id: 7, title: 'LINEN SUIT BLAZER', description: 'Double-breasted linen blazer', price: 200, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/9058/e9a2/47804249b652/da86d956e224/04307408700-e1/04307408700-e1.jpg?ts=1709831440642&w=750' },
    { id: 8, title: 'TEXTURED SUIT BLAZER', description: 'Straight fit blazer made of a wool and blend', price: 800, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/9058/e9a2/47804249b652/da86d956e224/04307408700-e1/04307408700-e1.jpg?ts=1709831440642&w=750' },
    { id: 9, title: '100% LINEN BLAZER', description: 'Regular fit blazer made of linen and wool', price: 700, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/6fb9/8da2/998949e7befc/70bc5efffad7/04307408431-e1/04307408431-e1.jpg?ts=1704970220624&w=750' },
    { id: 10, title: 'PREMIUM BLAZER', description: 'Straight fit blazer made of linen', price: 2000, colors: ['Red', 'Blue', 'Green'], image: 'https://static.zara.net/assets/public/6fb9/8da2/998949e7befc/70bc5efffad7/04307408431-e1/04307408431-e1.jpg?ts=1704970220624&w=750' }
];

const Products = () => {
    // State to keep track of the total price of purchased products
    const [totalPrice, setTotalPrice] = useState(0);
    // State to keep track of purchased products (optional, for more complex logic)
    const [purchasedProducts, setPurchasedProducts] = useState([]);
    // State to keep track of selected colors for each product
    const [selectedColors, setSelectedColors] = useState({});

    // Function to handle buying a product
    const handleBuy = (price) => {
        setTotalPrice(totalPrice + price);
        setPurchasedProducts([...purchasedProducts, price]);
    };

    // Function to handle color selection for a product
    const handleColorSelect = (productId, color) => {
        setSelectedColors({ ...selectedColors, [productId]: color });
    };

    return (
        <div>
            {/* Display the total price component */}
            <TotalPrice totalPrice={totalPrice} />
            <Row>
                {/* Map over the products array to create a card for each product */}
                {products.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                {/* Dropdown for selecting product colour */}
                                <DropdownButton id="dropdown-basic-button" title={selectedColors[product.id] || 'Select Color'}>
                                    {product.colors.map((color, index) => (
                                        <Dropdown.Item key={index} onClick={() => handleColorSelect(product.id, color)}>
                                            {color}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                {/* Buy button */}
                                <Button variant="primary" className="mt-2" onClick={() => handleBuy(product.price)}>Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Products;
