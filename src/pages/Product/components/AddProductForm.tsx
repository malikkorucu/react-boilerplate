import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Dropzone } from "../../../components/common/Dropzone/Dropzone";
import { Select } from "../../../components/common/Select/Select";
import { useApi } from "../../../hooks/useApi";
import {
  getCategories,
  saveProduct,
  updateProduct,
} from "../../../services/product.service";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Modal } from "../../../components/common/Modal/Modal";
import { convertFormData } from "../../../utils/convertFormData";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";

const _initialValues = {
  image: "",
  other_images: [],
  title: "",
  price: "",
  price_with_discount: "",
  category: "",
  description: "",
};

export const AddProductForm = (props: any) => {
  const { show, setShow, getProducts, updateObject, setUpdateObject } = props;

  const [initialValues, setInitialValues] = useState(_initialValues);

  const { request:_getCategories, loading:categoryLoader, data:categories } = useApi(getCategories); // prettier-ignore
  const { request:_saveProduct, loading:saveLoading } = useApi(saveProduct) as any // prettier-ignore
  const { request:_updateProduct, loading:updateLoading } = useApi(updateProduct) as any // prettier-ignore

  useEffect(() => {
    _getCategories();
  }, []);

  useEffect(() => {
    if (show) {
      if (updateObject) {
        setInitialValues(updateObject);
      }
    } else {
      setInitialValues(_initialValues);
      setUpdateObject(null);
    }
  }, [show]);

  const AddProductSchema = Yup.object().shape({
    image: Yup.mixed().required(
      "Image alanı zorunlu bir alan. Lütfen doldurunuz !"
    ),
    title: Yup.string().required(
      "Title alanı zorunlu bir alan. Lütfen doldurunuz !"
    ),
    description: Yup.string().required(
      "Description alanı zorunlu bir alan. Lütfen doldurunuz !"
    ),
    price: Yup.number().required(
      "Price alanı zorunlu bir alan. Lütfen doldurunuz !"
    ),
    price_with_discount: Yup.number().required(
      "Price with discount alanı zorunlu bir alan. Lütfen doldurunuz !"
    ),
    category: Yup.string().required(
      "Category with discount alanı zorunlu bir alan. Lütfen doldurunuz !"
    ),
  });

  const handleSubmit = async (values: any) => {
    const formData = convertFormData(values);
    let res;

    if (updateObject) {
      res = await _updateProduct(values._id, values);
    } else {
      res = await _saveProduct(formData);
    }

    if (res.status) {
      toast.success("Product saved successfully !");
      setShow(false);
      getProducts();
      setInitialValues(_initialValues);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AddProductSchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });

  return (
    <Modal
      title="Add Product"
      show={show}
      setShow={setShow}
      submitBtn={() => (
        <LoadingButton
          loading={updateObject ? updateLoading : saveLoading}
          type="submit"
          variant="contained"
          onClick={() => formik.handleSubmit()}
        >
          Save
        </LoadingButton>
      )}
    >
      <form className="h-100 d-flex flex-column" onSubmit={formik.handleSubmit}>
        <div>
          <Dropzone
            onChange={(files: any) => {
              formik.setFieldValue("image", files[0]);
              formik.setFieldValue("other_images", files.slice(1));
            }}
          />
          <div className="row mt-4">
            <div className="col-md-6">
              <TextField
                name="title"
                label="Title"
                type="text"
                variant="outlined"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="description"
                label="Description"
                type="text"
                variant="outlined"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </div>
            <div className="col-md-4 my-4">
              <Select
                title="Category"
                name="category"
                options={categories?.map((category: any) => ({
                  label: category?.title,
                  value: category?._id,
                }))}
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
              />
            </div>
            <div className="col-md-4 my-4">
              <TextField
                name="price"
                label="Price"
                type="number"
                variant="outlined"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </div>
            <div className="col-md-4 my-4">
              <TextField
                name="price_with_discount"
                label="Price With Discount"
                type="number"
                variant="outlined"
                value={formik.values.price_with_discount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.price_with_discount &&
                  Boolean(formik.errors.price_with_discount)
                }
                helperText={
                  formik.touched.price_with_discount &&
                  formik.errors.price_with_discount
                }
              />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};
