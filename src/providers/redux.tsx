"use client"
import { store } from '@/lib/store'
import React from 'react'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"

function ReduxProvider({children}: {children: React.ReactNode}) {
  return (
    <SessionProvider>
      <Provider store={store}>
          {children}
      </Provider>
    </SessionProvider>
  )
}

export default ReduxProvider