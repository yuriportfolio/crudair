import React from "react";

const InfoItem = props => {
  const { name, price } = props.item;

  return (
    <>
      <h4 className="card-title">{name}</h4>
      <h5 className="card-price">$ {price}</h5>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <hr />
      <div className="btn-group">
        <button onClick={props.isEditForm} className="btn btn-info">
          Edit
        </button>
        <button onClick={props.handleDeleteItem} className="btn btn-danger">
          Delete
        </button>
      </div>
    </>
  );
};

export default InfoItem;
