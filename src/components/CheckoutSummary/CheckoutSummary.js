import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Burger from '../Burger/Burger';
import classes from './CheckoutSummary.css';

const summary = (props) => {
    return (
        <div>
            <h3>You order :</h3>
            <Burger ingredients={props.ingredients}/>
            <div className={classes.Summary}>
                <div>
                <OrderSummary ingredients={props.ingredients}
                cancelled={props.gobBck}
                continue={props.goOn}
                />
                </div>
            </div>
        </div>
    );
};

export default summary;