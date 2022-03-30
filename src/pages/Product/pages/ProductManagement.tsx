import React, { useEffect, useRef, useState } from "react";
import { TableList } from "../../../components/common/Table/Table";
import { useApi } from "../../../hooks/useApi";
import { deleteProducts, getProducts } from "../../../services/product.service";
import { toast } from "react-toastify";
import { Modal } from "../../../components/common/Modal/Modal";
import { AddProductForm } from "../components/AddProductForm";
import { confirm } from "../../../utils/confirm";

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

export const ProductManagement = (props: any) => {
  const formRef = useRef() as any;
  const [show, setShow] = useState(false);
  const [updateObject, setUpdateObject] = useState(null);

  const { request:_getProducts, loading:productLoader, data:products } = useApi(getProducts); // prettier-ignore

  useEffect(() => {
    _getProducts();
  }, []);

  const handleDelete = async (productIds: Array<string>) => {
    const confirmation = await confirm(
      "Uyarı !",
      "Bu ürünü silmek istediğinizden emin misiniz ?"
    );

    if (confirmation) {
      const product_ids = productIds;
      const res = await deleteProducts(product_ids);
      toast.success("You successfully deleted the product !");
      _getProducts();
    }
  };

  const handleUpdate = async (product: any) => {
    console.log(product);
    setUpdateObject(product);
    setShow(true);
  };

  return (
    <div>
      <TableList
        headCells={headCells}
        rows={products}
        uniqueField="_id"
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        onAdd={() => setShow(true)}
        loading={productLoader}
        searchable={true}
      />
      <AddProductForm
        show={show}
        setShow={setShow}
        getProducts={_getProducts}
        updateObject={updateObject}
        setUpdateObject={setUpdateObject}
      />
    </div>
  );
};
