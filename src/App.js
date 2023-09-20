import React, { useState } from 'react';
import UserRegistration from './Component/UserRegistration';
import GreenLightRedLight from './Component/GreenLightRedLight';

function App() {
  const [user, setUser] = useState(null);

  const handleStartGame = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      <p Carzy />
      {user ? (
        <GreenLightRedLight user={user} />
      ) : (
        <UserRegistration onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;

