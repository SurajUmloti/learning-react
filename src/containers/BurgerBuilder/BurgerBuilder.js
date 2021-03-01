import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 1.3,
    meat: 0.7
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    componentDidMount() {
        axios.get('/ingredients.json').then(
            res => {
                this.setState({ingredients: res.data});
            }
        )
        .catch(error => console.log(error));
    }

    addIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = oldCount + 1;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice + PRICES[type]
        });
        this.updatePurchaseAble(updatedIngredients);
    };

    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = oldCount - 1;
        this.setState( (prevState) => ({
            ingredients: updatedIngredients,
            totalPrice: prevState.totalPrice - PRICES[type]
        }));
        this.updatePurchaseAble(updatedIngredients);
    };

    updatePurchaseAble = (updatedIngredients) => {
        const ingredients = {...updatedIngredients};
        const sum = Object.keys(ingredients).map(key => ingredients[key])
                    .reduce((total, ig) => {
                        return total + ig;
                    }, 0);
        this.setState({purchasable: sum > 0});
    }

    purchasableHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    continueHandler = () => {
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Test',
        //         address: {
        //             state: 'Karnataka'
        //         },
        //         email: 'test@test.com',
        //         delivery: 'fastest'
        //     }
        // }
        // axios.post('/orders.json', order).then(res => console.log(res)).catch(error => console.log(error))
        
        this.props.history.push('/checkout');
    }

    render() {
            const disabledInfo = {
                ...this.state.ingredients
            };

            for (const key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0;
            }
            
            let content = null;
            if (this.state.ingredients) {
                content = (
                    <Aux>
                    <Modal show={this.state.purchasing}
                        backdropClicked={this.purchaseCancelHandler}
                    >
                        <OrderSummary ingredients={this.state.ingredients} 
                        cancelled={this.purchaseCancelHandler}
                        continue={this.continueHandler}
                        price={this.state.totalPrice}
                        />
                    </Modal>
                    <Burger ingredients = {this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredients}
                        ingredientRemoved={this.removeIngredients}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchasableHandler}
                    />
                </Aux>
                )
            }
        return (  
            <Aux>
           {content}
           </Aux>          
        );
    }
}

export default BurgerBuilder; 