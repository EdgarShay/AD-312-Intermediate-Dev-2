import React from "react"

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

import PostList from "../../components/PostList"

const queryClient = new QueryClient()

export default function HomeScreen() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostList />
    </QueryClientProvider>
  )
}