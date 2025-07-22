/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { TMeta } from "@/types/common";
import { TTrainingVideo } from "@/types/trainingVideo";

export const disclaimerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all Training Videos
    getAllTrainingVideos: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/training-videos",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TTrainingVideo[], meta: TMeta) => {
        return {
          trainingVideos: response,
          meta,
        };
      },
      providesTags: [tagTypes.trainingVideo],
    }),

    //get single Training Video
    getTrainingVideo: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/training-videos/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.trainingVideo],
    }),
  }),
});

export const { useGetAllTrainingVideosQuery, useGetTrainingVideoQuery } =
  disclaimerApi;
