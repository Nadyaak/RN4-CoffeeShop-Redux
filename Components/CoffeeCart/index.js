import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreater from "../../store/actions/cartAction";
// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  handelPress = () => {
    this.props.checkout();
  };
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem
          item={item}
          key={index}
          handelPressremov={this.props.removeItem}
        />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.handelPress}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});
const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(actionCreater.removeItemFromCart(item)),
  checkout: () => dispatch(actionCreater.checkoutCart())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
