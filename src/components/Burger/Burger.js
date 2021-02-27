import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients).map(ing => {
        return [...Array(props.ingredients[ing])].map((_, id) => {
            return <BurgerIngredient key={ing + id} type={ing} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (!ingredients.length) {
        ingredients = <p>Please add ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
