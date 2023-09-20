import React, { useState, useEffect } from 'react';

function GreenLightRedLight({ user }) {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let timer;

    const getRandomTime = () => {
      return Math.random() * (2000 - 1000) + 1000; // Random time between 1s and 2s
    };

    const changeColor = () => {
      const greenLight = Math.random() < 0.5; // Randomly set the light to green or red
      if (greenLight) {
        setScore((prevScore) => prevScore + 1);
      } else {
        setGameOver(true);
      }
      timer = setTimeout(changeColor, getRandomTime());
    };

    timer = setTimeout(changeColor, getRandomTime());

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (score >= getWinningScore(user.difficulty)) {
      setGameOver(true);
    }
  }, [score, user]);

  const getWinningScore = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 10;
      case 'Medium':
        return 15;
      case 'Hard':
        return 25;
      default:
        return 10;
    }
  };

  return (
    <div>
      <h2>Green Light Red Light Game</h2>
      {gameOver ? (
        <div>
          {score >= getWinningScore(user.difficulty) ? (
            <p>You win!</p>
          ) : (
            <p>Game Over!</p>
          )}
        </div>
      ) : (
        <div>
          <p>Score: {score}</p>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: score % 2 === 0 ? 'green' : 'red',
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default GreenLightRedLight;




