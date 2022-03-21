import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../redux/auth/auth.interface";
import { RootState } from "../../setup/redux/RootReducer";

export const Dashboard: FC<any> = () => {
  const [products, setProducts] = useState([]);
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeData, setPlaceData] = useState({}) as any;

  const user = useSelector<RootState>(({ auth }) => auth.user) as IUser;

  return (
    <div>
      <span>{user.name}</span>
    </div>
  );
};

const styles = {
  input: {
    border: "1px solid #dedede",
    borderRadius: 10,
    padding: "5px 10px",
    outline: "none",
  },
};
