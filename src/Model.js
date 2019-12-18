import Airtable from "airtable";

const base = new Airtable({ apiKey: "keygHjUbs1JGkegAg" }).base(
  "appYZc6eNSCCS1Tpj"
);

const table = base("Content");

const getProducts = () => {
  return table.select().firstPage();
};

const handleDeleteProduct = id => {
  return table.destroy(id);
};

const handleEditProduct = (id, name) => {
  return table.update(id, {
    name: name
  });
};

export { getProducts, handleDeleteProduct, handleEditProduct };
