import { apiSlice } from "./base-query";

export const listingApi = apiSlice.injectEndpoints({
    endpoints: (builders) => ({
        getAllListing: builders.query({
            query: () => ({
                url: "/listing",
                method: "GET",
            })
        }),
        getDetailListing: builders.query({
            query: (slug: string) => ({
                url: `/listing/${slug}`,
                method: "GET"
            })
        })
    })
})

export const { useGetAllListingQuery, useGetDetailListingQuery } = listingApi;