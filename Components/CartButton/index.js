import React, { Component } from "react";
import { Icon, Button, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    let quantity = 0;
    this.props.items.forEach(item => (quantity += item.quantity));

    return (
      <Button transparent>
        <Text>
          {quantity}
          <Icon
            onPress={() => this.props.navigation.navigate("CoffeeCart")}
            name="shoppingcart"
            type="AntDesign"
          />
        </Text>
      </Button>
    );
  }
}
const mapStateToProps = state => ({
  items: state.cartReducer.items
});
// const mapStateToProps = state => ({
//   item: quantityCounter(state.cartReducer.items)
// });
export default withNavigation(connect(mapStateToProps)(CartButton));
