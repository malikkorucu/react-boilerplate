import React, { useEffect, useRef, useState } from "react";
import { TableList } from "../../../components/common/Table/Table";
import { useApi } from "../../../hooks/useApi";
import { deleteProduct, getProducts } from "../../../services/product.service";
import { toast } from "react-toastify";
import { Modal } from "../../../components/common/Modal/Modal";
import { AddProductForm } from "../components/AddProductForm";

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
  const formRef = useRef() as any;
  const [show, setShow] = useState(false);

  const { request:_getProducts, loading:productLoader, data:products } = useApi(getProducts); // prettier-ignore

  useEffect(() => {
    _getProducts();
  }, []);

  const handleDelete = async (productId: Array<string>) => {
    const product_id = productId[0];
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
      <AddProductForm
        show={show}
        setShow={setShow}
        getProducts={_getProducts}
      />
    </div>
  );
};
