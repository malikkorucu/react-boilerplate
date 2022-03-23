import React, { useEffect, useState } from "react";
import { TableList } from "../../../components/common/Table/Table";
import { useApi } from "../../../hooks/useApi";
import { deleteProduct, getProducts } from "../../../services/product.service";
import moment from "moment";
import { toast } from "react-toastify";
import { Modal } from "../../../components/common/Modal/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const headCells: any = [
  {
    id: "image",
    disablePadding: true,
    image: true,
    label: "Product Image",
    props: {
      align: "left",
    },
  },
  {
    id: "title",
    text: true,
    disablePadding: true,
    label: "Product Name",
    props: {
      align: "left",
    },
  },
  {
    id: "price",
    text: true,
    disablePadding: true,
    label: "Price",
    props: {
      align: "left",
    },
  },
  {
    id: "price_with_discount",
    text: true,
    disablePadding: true,
    label: "Discount Price",
    props: {
      align: "left",
    },
  },
  {
    id: "createdAt",
    text: false,
    disablePadding: true,
    date: true,
    label: "Created At",
    props: {
      align: "left",
    },
  },
];

export const Statistic1 = (props: any) => {
  const [show, setShow] = useState(false);

  const { request:_getProducts, loading:productLoader, data:products } = useApi(getProducts); // prettier-ignore

  useEffect(() => {
    _getProducts();
  }, []);

  const handleDelete = async (productId: Array<string>) => {
    const product_id = productId[0];
    console.log(product_id);
    const res = await deleteProduct(product_id);
    toast.success("You successfully deleted the product !");
    _getProducts();
  };

  return (
    <div>
      <TableList
        headCells={headCells}
        rows={products}
        uniqueField="_id"
        onDelete={handleDelete}
        onAdd={() => setShow(true)}
        loading={productLoader}
      />
      <Modal show={show} setShow={setShow}>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="Title"
              label="Title"
              type="text"
              variant="outlined"
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="Title"
              label="Title"
              type="text"
              variant="outlined"
            />
          </div>
          <div className="col-md-6 my-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Age"
                onChange={() => {}}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </Modal>
    </div>
  );
};
