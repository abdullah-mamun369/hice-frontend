/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { TMeta } from "@/types/common";
import { TDisclaimer } from "@/types/disclaimer";

export const disclaimerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all Disclaimers
    getAllDisclaimers: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/disclaimers",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TDisclaimer[], meta: TMeta) => {
        return {
          disclaimers: response,
          meta,
        };
      },
      providesTags: [tagTypes.disclaimer],
    }),

    //get single Disclaimer
    getDisclaimer: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/disclaimers/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.disclaimer],
    }),
  }),
});

export const { useGetAllDisclaimersQuery, useGetDisclaimerQuery } =
  disclaimerApi;
