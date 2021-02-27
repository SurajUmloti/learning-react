import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
.map(ig => <li key={ig}>
            <span style={{textTransform: 'capitalize'}}>{ig}</span> : {props.ingredients[ig]}
            </li>)
    ;
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Below are the ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to checkout ?</p>
            <Button type="Danger" clicked={props.cancelled}>Cancel</Button>
            <Button type="Success" clicked={props.continue}>Continue</Button>
        </Aux>
    );
};


export default orderSummary;