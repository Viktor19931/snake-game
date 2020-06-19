import styled, { css } from "styled-components";

type DotProps = {
  top: number;
  left: number;
};

export const SnakeDot = styled.div<DotProps>`
  width: 2%;
  height: 2%;
  z-index: 2;
  position: absolute;
  border: 1px solid #fff;
  background-color: #000;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
`;

const getAngel = (direction: string) =>
  direction === "DOWN"
    ? 90
    : direction === "UP"
    ? 270
    : direction === "LEFT"
    ? 180
    : 0;

export const SnakeHead = styled(SnakeDot)<{ direction: string }>`
  background-color: violet;
  border-radius: 0 6px 6px 0;
  ${({ direction }) => css`
    transform: rotate(${getAngel(direction)}deg);
  `}
`;

export const SnakeTopEye = styled.div`
  height: 4px;
  width: 4px;
  position: absolute;
  top: 0.5px;
  right: 4px;
  background-color: #fff;
  border-radius: 50%;
  &:before {
    right: 0;
    top: 1px;
    width: 2px;
    content: "";
    height: 2px;
    border-radius: 50%;
    position: absolute;
    background-color: #000;
  }
`;

export const SnakeBottomEye = styled(SnakeTopEye)`
  top: unset;
  bottom: 0.5px;
`;

export const Tongue = styled.div`
  top: 4px;
  width: 7px;
  height: 2px;
  right: -7px;
  z-index: -1;
  position: absolute;
  background-color: red;
  &:before {
    content: "";
    width: 0;
    height: 0;
    right: 0px;
    position: absolute;
    border-style: solid;
    border-width: 1px 3px 1px 0;
    border-color: transparent #fff transparent transparent;
  }
`;

export const RWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px solid violet;
  box-sizing: border-box;
  border-radius: 0 6px 6px 0;
`;

export const GameArea = styled.div`
  width: 600px;
  height: 600px;
  overflow: hidden;
  margin: 50px auto;
  position: relative;
  border: 2px solid #000;
`;

export const FoodDot = styled.div<DotProps>`
  width: 2%;
  height: 2%;
  z-index: 1;
  position: absolute;
  background-color: red;
  border: 1px solid #fff;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
`;
