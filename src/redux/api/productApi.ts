/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { TMeta } from "@/types/common";
import { TProduct } from "@/types/product";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all Products
    getAllProducts: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/products",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TProduct[], meta: TMeta) => {
        return {
          products: response,
          meta,
        };
      },
      providesTags: [tagTypes.product],
    }),

    //get single Product
    getProduct: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productApi;
