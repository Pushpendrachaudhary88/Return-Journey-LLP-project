import React, { useState } from 'react';

function UserRegistration({ onStartGame }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleStartGame = () => {
    if (name && email && mobile) {
      onStartGame({ name, email, mobile, difficulty });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Mobile No.:</label>
      <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <br />
      <label>Difficulty Level:</label>
      <select className="select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <br />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default UserRegistration;
