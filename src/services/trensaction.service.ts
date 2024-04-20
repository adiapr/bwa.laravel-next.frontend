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
        }),
        getDetailTransaction: build.query({
            query: (id) => ({
                url: `/transaction/${id}`,
                method: "GET",
            })
        }),
        getTransaction: build.query({
            query: () => ({
                url: "/transaction",
                method: "GET",
            })
        })
    }),
})

export const { useCheckAvaibilityMutation, useTransactionMutation, useGetDetailTransactionQuery, useGetTransactionQuery } = transactionApi;