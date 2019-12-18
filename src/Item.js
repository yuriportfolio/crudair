import React from "react";
import EditItem from "./EditItem";
import InfoItem from "./InfoItem";

/**
 * @description display a todo from todos
 */
class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditForm: false
    };
  }

  // show/hide edit form
  isEditForm = () => {
    this.setState({
      isEditForm: !this.state.isEditForm
    });
  };

  handleDeleteItem = () => {
    if (window.confirm("Would you like actually to delete this product?")) {
      this.props.handleDeleteItem(this.props.item.id);
    }
  };

  handleEditItem = event => {
    this.props.handleEditItem(event);
    this.isEditForm();
  };

  render() {
    const { item } = this.props;
    const checkEditForm = this.state.isEditForm;

    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            {checkEditForm ? (
              <EditItem handleEditItem={this.handleEditItem} item={item} />
            ) : (
              <InfoItem
                isEditForm={this.isEditForm}
                handleDeleteItem={this.handleDeleteItem}
                item={item}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
