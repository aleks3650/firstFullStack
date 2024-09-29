import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "../lib/axios";

export const dataHook = {
  queryFn: () => instance.get("/").then((res) => res.data),
  queryKey: ["info"],
};

export const useDeleteProductMutation = (dupa) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => instance.delete(`${dupa._id}`),
    onSuccess: () => {
      console.log("success with deleting", dupa._id);
      queryClient.invalidateQueries({ queryKey: ["info"] });
    },
    onError: (error) => {
      console.error("error with deleting", error);
    },
  });
};

export const useAddNewProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => instance.post("/", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["info"] });
    },
    onError: () => {
      console.error("error with adding item", error);
    },
  });
};
