import React from "react";
import Availablemeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <Availablemeals />
    </React.Fragment>
  );
};

export default Meals;
