import { useState } from "react";
import { confirm } from "../utils/confirm";

export const useConfirm = ({ title, message }: any) => {
  const [res, setRes] = useState(false);

  const request = async (...args: any) => {
    const response = await confirm(title, message);
    setRes(response);
    return response;
  };

  return res;
};
