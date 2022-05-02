import { TableList } from "../components/common/Table/Table";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../services/product.service";

export const Test = () => {
  const initialValues = {
    image: "",
    text: "",
    title: "",
  };
  const headCells: any = [
    {
      id: "image",
      disablePadding: true,
      image: true,
      label: "Category Image",
      props: { align: "left" },
      tableCell: true,
      inputProps: {
        initialValue: "",
        name: "image",
        label: "Category Image",
        type: "image",
        required: true,
      },
    },
    {
      id: "title",
      text: true,
      disablePadding: true,
      label: "Category Name",
      props: {
        align: "left",
      },
      tableCell: true,
      bodyData: true,
      inputType: "text",
      type: "input",
      inputProps: {
        initialValue: "",
        name: "title",
        label: "Title",
        type: "text",
        required: true,
        columnSize: 6,
      },
    },
    {
      id: "text",
      text: true,
      disablePadding: true,
      label: "Text",
      props: {
        align: "left",
      },
      tableCell: true,
      bodyData: true,
      inputType: "text",
      type: "input",
      inputProps: {
        initialValue: "",
        name: "text",
        label: "Text",
        type: "text",
        required: true,
        columnSize: 6,
      },
    },
    {
      id: "createdAt",
      date: true,
      disablePadding: true,
      label: "Date",
      props: {
        align: "left",
      },
    },
  ];
  return (
    <div>
      <TableList
        headCells={headCells}
        uniqueField="_id"
        fetch={getCategories}
        deleteFunction={deleteCategory}
        onAdd={createCategory}
        updateFunction={updateCategory}
        searchable={true}
        tableTitle="Categories"
        _initialValues={initialValues}
      />
    </div>
  );
};
