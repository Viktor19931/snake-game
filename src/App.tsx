import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import { GameArea } from "./Wrapper";
import Snake from "./components/Snake";
import Food from "./components/Food";
import getRandomCoordinates from "./helpers/getRandomCoordinates";

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<any>();
  const savedId = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    savedId.current = setInterval(tick, delay);
    return () => clearInterval(savedId.current);
  }, [delay]);
};

const initSnakeCoordinates = [
  [0, 0],
  [2, 0],
  [4, 0],
];

const initialDirection = "RIGHT";

const App: FC = () => {
  const [snakeCoordinates, setSnakeCoordinates] = useState(
    initSnakeCoordinates
  );
  const [foodCoordinates, setFoodCoordinates] = useState(
    getRandomCoordinates()
  );
  const [direction, setDirection] = useState(initialDirection);
  const [speed, setSpeed] = useState(500);
  const [score, setScore] = useState(0);

  const isAllowedDirection = (prev: string, next: string) =>
    !(
      (prev === "LEFT" && next === "RIGHT") ||
      (prev === "RIGHT" && next === "LEFT") ||
      (prev === "UP" && next === "DOWN") ||
      (prev === "DOWN" && next === "UP")
    );

  const directionMap: { [key: number]: string } = {
    37: "LEFT",
    38: "UP",
    39: "RIGHT",
    40: "DOWN",
  };

  const onKeyDown = useCallback(
    (event: any) => {
      isAllowedDirection(direction, directionMap[event.keyCode]) &&
        setDirection(directionMap[event.keyCode]);
    },
    [direction, directionMap]
  );

  const checkIfOutOfBorders = () => {
    const head = snakeCoordinates[snakeCoordinates.length - 1];
    if (head[0] > 99 || head[1] > 99 || head[0] < 0 || head[1] < 0) {
      const dots = [...snakeCoordinates];
      let head = dots[dots.length - 1];

      switch (direction) {
        case "RIGHT":
          head = [0, head[1]];
          break;
        case "LEFT":
          head = [98, head[1]];
          break;
        case "DOWN":
          head = [head[0], 0];
          break;
        case "UP":
          head = [head[0], 98];
          break;
      }

      dots.push(head);
      dots.shift();
      setTimeout(() => setSnakeCoordinates(dots), 0);
    }
  };

  const checkIfCollapsed = () => {
    const snake = [...snakeCoordinates];
    const head = snakeCoordinates[snakeCoordinates.length - 1];

    snake.pop();
    snake.forEach((dot) => {
      if (dot[0] === head[0] && dot[1] === head[1]) {
        onGameOver();
      }
    });
  };

  const checkIfEat = () => {
    let head = snakeCoordinates[snakeCoordinates.length - 1];
    if (head[0] === foodCoordinates[0] && head[1] === foodCoordinates[1]) {
      setFoodCoordinates(getRandomCoordinates());
      setScore((s) => s + 1);
      enlargeSnake();
      increaseSpeed();
    }
  };

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10);
    }
  };

  const enlargeSnake = () => {
    let newSnake = [...snakeCoordinates];
    newSnake.unshift(snakeCoordinates[0]);
    setSnakeCoordinates(newSnake);
  };

  useEffect(() => {
    checkIfEat();
    checkIfCollapsed();
    checkIfOutOfBorders();
  });

  const onGameOver = () => {
    setDirection(initialDirection);
    setSnakeCoordinates(initSnakeCoordinates);
    setScore(0);
    // alert(`Game over with score ${score}`);
  };

  const moveSnake = () => {
    const dots = [...snakeCoordinates];
    let head = dots[dots.length - 1];

    switch (direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
    }

    dots.push(head);
    dots.shift();
    console.log(dots);
    setSnakeCoordinates(dots);
  };

  useInterval(moveSnake, speed);

  useEffect(() => {
    document.onkeydown = onKeyDown;
  }, [onKeyDown]);

  return (
    <>
      <span>{`Your score is ${score} `}</span>
      <GameArea>
        <Snake {...{ snakeCoordinates, direction }} />
        <Food {...{ foodCoordinates }} />
      </GameArea>
    </>
  );
};

export default App;
