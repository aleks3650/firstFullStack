import React from "react";
import { useDeleteProductMutation } from "../hook/UseQuery";

const Item = ({ dupa }) => {
  const { mutate } = useDeleteProductMutation(dupa);

  const handleDelete = async () => {
    mutate();
  };

  return (
    <div className="my-2">
      <span className="list-none bg-slate-400 rounded-lg text-xs w-fit p-2 mx-2">
        {dupa.name}
      </span>
      <button
        onClick={handleDelete}
        className="bg-red-500 rounded-3xl p-2 text-xs">
        X
      </button>
    </div>
  );
};

export default Item;
