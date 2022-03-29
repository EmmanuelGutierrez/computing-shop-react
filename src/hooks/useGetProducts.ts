import { useEffect, useState } from "react";
import axios from "axios";
import { AxiosRes } from "../interfaces/IAxiosRes";
import { IProduct } from "../interfaces/IProduct";

const useGetProducts = (API: string) => {
  const vacio: Array<IProduct> = [];
  const [products, setProducts] = useState(vacio);

  useEffect(() => {
    const axiosData = async () => {
      const res: AxiosRes<IProduct> = await axios(API);
      if (res.data.data) {
        setProducts(res.data.data);
      }
    };
    axiosData();
  }, []);

  return products;
};

export { useGetProducts };
