import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Dropzone } from "../../../../components/common/Dropzone/Dropzone";
import { useApi } from "../../../../hooks/useApi";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Modal } from "../../../../components/common/Modal/Modal";
import { convertFormData } from "../../../../utils/convertFormData";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { FormSelect } from "./FormSelect";

export const EditModal = (props: any) => {
  const {
    show,
    setShow,
    initData,
    updateObject,
    setUpdateObject,
    headCells,
    onAdd,
    onUpdate,
    _initialValues,
  } = props;
  const [initialValues, setInitialValues] = useState(_initialValues);

  const { request:save, loading:saveLoading } = useApi(onAdd) as any // prettier-ignore
  const { request:update, loading:updateLoading } = useApi(onUpdate) as any // prettier-ignore

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

  const Schema = Yup.object().shape({
    // image: Yup.mixed().required(
    //   "Image alanı zorunlu bir alan. Lütfen doldurunuz !"
    // ),
    // title: Yup.string().required(
    //   "Title alanı zorunlu bir alan. Lütfen doldurunuz !"
    // ),
    // description: Yup.string().required(
    //   "Description alanı zorunlu bir alan. Lütfen doldurunuz !"
    // ),
    // price: Yup.number().required(
    //   "Price alanı zorunlu bir alan. Lütfen doldurunuz !"
    // ),
    // price_with_discount: Yup.number().required(
    //   "Price with discount alanı zorunlu bir alan. Lütfen doldurunuz !"
    // ),
    // category: Yup.string().required(
    //   "Category with discount alanı zorunlu bir alan. Lütfen doldurunuz !"
    // ),
  });

  const handleSubmit = async (values: any) => {
    const formData = convertFormData(values);
    let res;

    if (updateObject) {
      res = await update(values._id, values);
    } else {
      res = await save(formData);
    }

    if (res.status) {
      toast.success("Product saved successfully !");
      setShow(false);
      initData();
      setInitialValues(_initialValues);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    validateOnBlur: true,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: handleSubmit,
  }) as any;

  return (
    <Modal
      title="Add Product"
      show={show}
      setShow={setShow}
      submitBtn={() => (
        <LoadingButton
          loading={updateLoading || saveLoading}
          type="submit"
          variant="contained"
          onClick={() => formik.handleSubmit()}
        >
          Save
        </LoadingButton>
      )}
    >
      <form className="h-100 d-flex flex-column" onSubmit={formik.handleSubmit}>
        <div className="row">
          {headCells?.map(
            (cell: any) =>
              cell.inputProps && (
                <>
                  {/* IMAGE START */}
                  {cell.inputProps.type === "image" && (
                    <Dropzone
                      className={cell.class}
                      onChange={(files: any) => {
                        formik.setFieldValue("image", files[0]);
                        formik.setFieldValue("other_images", files.slice(1));
                      }}
                    />
                  )}
                  {/* IMAGE END */}
                  {/* TEXT START */}
                  {cell.type === "input" && (
                    <div
                      className={"my-2 col-md-" + cell.inputProps.columnSize}
                    >
                      <TextField
                        name={cell.inputProps.name}
                        label={cell.inputProps.label}
                        type={cell.inputProps.type}
                        variant="outlined"
                        value={formik.values[cell.inputProps.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={cell.inputProps.class}
                        error={
                          formik.touched[cell.inputProps.name] &&
                          Boolean(formik.errors[cell.inputProps.name])
                        }
                        helperText={
                          formik.touched[cell.inputProps.name] &&
                          formik.errors[cell.inputProps.name]
                        }
                      />
                    </div>
                  )}
                  {/* TEXT END */}
                  {/* SELECT START */}
                  {cell.type === "select" && (
                    <div
                      className={"my-2 col-md-" + cell.inputProps.columnSize}
                    >
                      <FormSelect
                        cell={cell}
                        fetch={cell.inputProps.fetchFrom}
                        formik={formik}
                      />
                    </div>
                  )}
                  {/* SELECT END */}
                </>
              )
          )}
        </div>
      </form>
    </Modal>
  );
};
