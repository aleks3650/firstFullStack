import { useQuery } from "@tanstack/react-query";
import React from "react";
import { dataHook } from "./hook/UseQuery";
import Item from "./components/Item";
import FormAddNew from "./components/FormAddNew";

const Program = () => {
  const { data: info, isLoading } = useQuery(dataHook);

  return (
    <div className="w-full mx-auto p-2 bg-zinc-200 min-h-[100vh]">
      <span className="m-2">Program</span>
      {isLoading && <p className="m-2">Loading...</p>}
      {info?.data.map((dupa, i) => (
        <Item dupa={dupa} key={i} />
      ))}

      <FormAddNew />
    </div>
  );
};

export default Program;
