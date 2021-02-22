import React from "react";
import classes from "./PizzaImage.css";
import pizzaImg from "../../assets/img/pizza.jpg";

const PizzaImage = (props) => (
  <div className={classes.PizzaImage}>
    <img src={pizzaImg} className={classes.PizzaImg} alt="Pizza" />
  </div>
);

export default PizzaImage;
