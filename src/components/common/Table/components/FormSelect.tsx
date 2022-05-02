import React, { useEffect } from "react";
import { Select } from "../../Select/Select";
import { useApi } from "../../../../hooks/useApi";

export const FormSelect: React.FC<any> = ({ cell, fetch, formik }) => {
  const { request, loading, data } = useApi(fetch);

  useEffect(() => {
    request();
  }, []);

  return (
    <Select
      title={cell.inputProps.label}
      name={cell.inputProps.name}
      options={data?.map((item: any) => ({
        label: item[cell.inputProps.labelField],
        value: item[cell.inputProps.valueField],
      }))}
      value={formik.values[cell.inputProps.name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={
        formik.touched[cell.inputProps.name] && Boolean(formik.errors.category)
      }
      helperText={
        formik.touched[cell.inputProps.name] &&
        formik.errors[cell.inputProps.name]
      }
    />
  );
};
