import React, { FC, useEffect, useState } from "react";

export const AuthInit: FC<any> = (props) => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // burada kontroller yapılacak
  }, []);

  return showSplash ? <div>splash screen buraya gelecek</div> : <>{props.children}</> // prettier-ignore
};
