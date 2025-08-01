import React, { useState } from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Here are the available flights:</p>
      <ul>
        <li>✈️ Hyderabad → Delhi – ₹4000</li>
        <li>✈️ Mumbai → Bengaluru – ₹3200</li>
        <li>✈️ Chennai → Kolkata – ₹3900</li>
      </ul>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your flights:</p>
      <button>Book Hyderabad → Delhi</button><br />
      <button>Book Mumbai → Bengaluru</button><br />
      <button>Book Chennai → Kolkata</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Conditional rendering
  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage />;
  } else {
    pageContent = <GuestPage />;
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>✈️ Ticket Booking App</h1>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <hr />
      {pageContent}
    </div>
  );
}

export default App;
