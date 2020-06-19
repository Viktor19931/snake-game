import React, { FC } from "react";
import { FoodDot } from "../Wrapper";

type FoodProps = {
  foodCoordinates: number[];
};

const Food: FC<FoodProps> = ({ foodCoordinates }) => (
  <FoodDot left={foodCoordinates[0]} top={foodCoordinates[1]} />
);

export default Food;
