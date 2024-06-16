import React, { useState } from 'react';

const Home = () => {
    // State to store the username input
    const [username, setUsername] = useState('');
    // State to track if the user is logged in or not
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login/logout button click 
    const handleLoginLogout = () => {
        if (isLoggedIn) {
            // If logged in, reset the username and set isLoggedin to false
            setUsername('');
            setIsLoggedIn(false);
        } else {
            // If not logged in, check if username is not empty, then log in
            if (username) {
                setIsLoggedIn(true);
            }
        }
    };

    return (
        <div>
            {!isLoggedIn ? (
                // If user is not logged in, display the input field and login button
                <>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <button onClick={handleLoginLogout}>Login</button>
                </>
            ) : (
                // If user is logged in, display the welcome message and logout button
                <>
                    <h1>Welcome, {username}</h1>
                    <button onClick={handleLoginLogout}>Logout</button>
                </>
            )}
        </div>
    );
};

export default Home;
