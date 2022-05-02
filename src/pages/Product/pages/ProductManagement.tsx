import { TableList } from "../../../components/common/Table/Table";
import {
  deleteProducts,
  getProducts,
  saveProduct,
  updateProduct,
} from "../../../services/product.service";
import { headCells } from "../helpers/product.table.helper";

const _initialValues = {
  image: "",
  other_images: [],
  title: "",
  price: "",
  price_with_discount: "",
  category: "",
  description: "",
};

export const ProductManagement = (props: any) => {
  return (
    <div>
      <TableList
        headCells={headCells}
        uniqueField="_id"
        fetch={getProducts}
        onDelete={deleteProducts}
        onAdd={saveProduct}
        onUpdate={updateProduct}
        searchable={true}
        tableTitle="Products"
        _initialValues={_initialValues}
      />
    </div>
  );
};
