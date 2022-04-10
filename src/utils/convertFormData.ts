import { serialize } from 'object-to-formdata';

export const convertFormData = (data: any) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    console.log(Array.isArray(data[key]));
    if (Array.isArray(data[key])) {
      data[key].forEach((item: any) => {
        formData.append(key, item);
      });
    } else {
      formData.append(key, data[key]);
    }
  });
  console.log(formData)
  return formData;
};
