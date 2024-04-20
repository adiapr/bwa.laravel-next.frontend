import { apiSlice } from "./base-query";

export const transactionApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        checkAvaibility: build.mutation({
            query: (payload) => ({
                url: "/transaction/is-avaiable",
                method: "POST",
                body: payload,
            }),
        }),
        transaction: build.mutation({
            query: (payload) => ({
                url: '/transaction',
                method: 'POST',
                body: payload,
            }),
        })
    }),
})

export const { useCheckAvaibilityMutation, useTransactionMutation } = transactionApi;