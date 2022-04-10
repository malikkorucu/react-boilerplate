import { FC, useState } from "react";
import { useSelector } from "react-redux";
import CustomToolbarGrid from "../../components/common/DataGrid/DataGrid";
import { Dropdown } from "../../components/common/Dropdown/Dropdown";
import MultipleSelectChip from "../../components/common/MultiSelect/MultiSelect";
import MultiSelectSearch from "../../components/common/MultiSelectSearch/MultiSelectSearch";
import { IUser } from "../../redux/auth/auth.interface";
import { RootState } from "../../setup/redux/RootReducer";
import { confirm } from "../../utils/confirm";

export const Dashboard: FC<any> = () => {
  const [products, setProducts] = useState([]);
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeData, setPlaceData] = useState({}) as any;

  const items = [
    { id: 1, title: "Yunus" },
    { id: 2, title: "Yunus" },
    { id: 3, title: "Yunus" },
    { id: 4, title: "Yunus" },
  ];

  const user = useSelector<RootState>(({ auth }) => auth.user) as IUser;

  const test = async () => {
    const res = await confirm("burası title", "burası body");
  };

  return (
    <div>
      <button
        onClick={() => {
          test();
        }}
      >
        aşslfdkj
      </button>
      <button
        onClick={() => {
          test();
        }}
      >
        test
      </button>
      <Dropdown items={items} />
      <MultipleSelectChip />
      <MultiSelectSearch />

      <CustomToolbarGrid />
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
