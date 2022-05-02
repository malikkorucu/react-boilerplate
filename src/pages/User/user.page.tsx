import React from "react";
import { TableList } from "../../components/common/Table/Table";
import { getUsers } from "../../services/auth.service";

const children = [
  {
    path: "/user-management",
    component: "",
  },
];

const headCells = [
  {
    id: "avatar",
    disablePadding: true,
    image: true,
    label: "Image",
    props: { align: "left" },
    tableCell: true,
    inputProps: {
      initialValue: "",
      name: "image",
      label: "User Image",
      type: "image",
      required: true,
    },
  },
  {
    id: "name",
    disablePadding: true,
    text: true,
    label: "Name",
    props: { align: "left" },
    tableCell: true,
    inputType: "text",
    type: "input",
    inputProps: {
      initialValue: "",
      name: "name",
      label: "User Name",
      type: "text",
      required: true,
      columnSize: 6,
    },
  },
  {
    id: "email",
    disablePadding: true,
    text: true,
    label: "E-Mail",
    props: { align: "left" },
    tableCell: true,
    inputType: "text",
    type: "input",
    inputProps: {
      initialValue: "",
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      columnSize: 6,
    },
  },
  {
    id: "createdAt",
    date: true,
    disablePadding: true,
    label: "CreatedAt",
    props: { align: "left" },
    tableCell: true,
  },
];

export const UserPage = () => {
  const initialValues = {
    avatar: "",
    name: "",
    email: "",
    phone: "",
  };
  return (
    <div>
      <TableList
        headCells={headCells}
        uniqueField="_id"
        fetch={getUsers}
        // onDelete={deleteProducts}
        // onAdd={saveProduct}
        // onUpdate={updateProduct}
        searchable={true}
        tableTitle="User List"
        _initialValues={initialValues}
      />
    </div>
  );
};
