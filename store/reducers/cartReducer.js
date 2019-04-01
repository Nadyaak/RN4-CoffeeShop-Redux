import * as actionTypes from "../actions/types";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let item = action.payload;
      console.log("item add ", item);
      let fouditem = state.items.find(
        Item => Item.drink === item.drink && Item.option === item.option
      );
      if (fouditem) {
        fouditem.quantity++;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(item)
        };
      }
    case actionTypes.REMOVE_ITEM:
      let itemr = action.payload;
      let updateitem = state.items.filter(Itemr => Itemr !== itemr);
      console.log("item remove", itemr);
      //console.log(action.payload);
      return {
        ...state,
        items: updateitem
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
