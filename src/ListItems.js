import React from "react";
import { getProducts, handleDeleteProduct, handleEditProduct } from "./Model";
import Item from "./Item";

/**
 * @description Display and filter the data collection based on user input
 */
class ListItems extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  // Use lifecycle to get list items after render app
  componentDidMount() {
    // get list products from Model and set state for items
    getProducts().then(value => {
      let items = [];
      const { length } = value;

      for (let i = 0; i < length; i++) {
        const item = {
          id: value[i].getId(),
          name: value[i].get("Name"),
          text: value[i].get("lists"),
          image: value[i].get("picture"),
          catalogID: value[i].get("Category")
        };

        items = [...items, item];
      }

      // set list items on state
      this.setState({
        items
      });
    });
  }

  // handle delete item by id
  handleDeleteItem = id => {
    if (handleDeleteProduct(id)) {
      // set new listItems on state
      this.setState(prevState => ({
        ...prevState,
        items: prevState.items.filter(item => item.id !== id)
      }));
    }
  };

  handleEditItem = event => {
    // prevent submit default
    event.preventDefault();

    console.log(event);

    // if (handleEditProduct(id, name)) {
    //   this.setState(prevState => {
    //     const { items } = prevState;
    //     const itemIndex = items.findIndex(value => value.id === id);
    //     // check data exist to set name by id
    //     if (itemIndex !== -1) {
    //       items[itemIndex].name = name;
    //     }
    //     return prevState;
    //   });
    // }
  };

  render() {
    const { items } = this.state;

    return (
      <div className="row">
        {items.map(item => (
          <Item
            handleDeleteItem={this.handleDeleteItem}
            handleEditItem={this.handleEditItem}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default ListItems;
