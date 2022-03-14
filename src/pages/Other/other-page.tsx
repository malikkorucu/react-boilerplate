import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

export const OtherPage = (props: any) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <span>other page asdfasf</span>
    </div>
  );
};
