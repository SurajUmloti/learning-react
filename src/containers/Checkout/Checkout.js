import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            cheese: 1,
            salad:  1,
            bacon: 1,
            meat: 1
        }
    }

    continueCheckout = () => {
        alert('Checked out');
    }

    cancelCheckout = () => {
        this.props.history.goBack();
    }

    render () {

        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    gobBck={this.cancelCheckout}
                    goOn = {this.continueCheckout}
                />
            </div>
        )
    }
}


export default Checkout;