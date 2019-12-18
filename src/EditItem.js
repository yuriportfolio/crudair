import React from "react";

class EditItem extends React.Component {
  // handle edit name of item by id
  handleEditItem = event => {
    // prevent submit default
    event.preventDefault();

    console.log(event);
    // const { id } = this.props.item;
    // const { name } = this.state;

    // this.props.getValue(id, name);
  };

  render() {
    const { id, name, price, image, Attachments } = this.props.item;

    return (
      <>
        <h5 className="text-center">Edit product</h5>
        <form onSubmit={this.handleEditItem}>
          <input type="hidden" name="idTxt" defaultValue={id} required />
          <input type="hidden" name="idImg" defaultValue={image} required />
          <input
            type="hidden"
            name="idCat"
            defaultValue={Attachments}
            required
          />
          <div className="form-group">
            <label htmlFor="name">Name (*):</label>
            <input
              className="form-control"
              type="text"
              name="nameTxt"
              defaultValue={name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">price (*):</label>
            <input
              className="form-control"
              type="number"
              name="priceTxt"
              defaultValue={price}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Edit
          </button>
        </form>
      </>
    );
  }
}

export default EditItem;
