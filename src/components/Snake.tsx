import React, { FC } from "react";
import {
  SnakeDot,
  SnakeHead,
  RWrapper,
  SnakeTopEye,
  SnakeBottomEye,
  Tongue,
} from "../Wrapper";

type SnakeProps = {
  direction: string;
  snakeCoordinates: number[][];
};

const Snake: FC<SnakeProps> = ({ snakeCoordinates, direction }) => {
  return (
    <>
      <SnakeHead
        {...{ direction }}
        left={snakeCoordinates[snakeCoordinates.length - 1][0]}
        top={snakeCoordinates[snakeCoordinates.length - 1][1]}
      >
        <RWrapper>
          <SnakeTopEye />
          <SnakeBottomEye />
          <Tongue />
        </RWrapper>
      </SnakeHead>
      {snakeCoordinates.slice(0, -1).map((c) => (
        <SnakeDot key={`${c[0]}-${c[1]}`} left={c[0]} top={c[1]} />
      ))}
    </>
  );
};

export default Snake;
