React Hook Form + TanStack Query Profile Editor
Overview

Author: Edgar
Assignment – React Hook Form with TanStack Query

This project demonstrates integration between React Hook Form and TanStack Query using a mock REST API powered by JSON Server.

The application loads profile data from a server, populates a form, performs profile updates, handles server-side validation errors, and automatically refreshes cached data after successful mutations.

Technologies
React
React Hook Form
TanStack Query
Axios
JSON Server
Vite
Installation
npm install
npm run server
npm run dev
Features
Fetch profile using useQuery
Populate form using reset()
Update profile using useMutation
Cache invalidation using invalidateQueries
Server-side error handling using setError
Form dirty-state tracking
Loading states
Mock REST API
API Endpoint

http://localhost:3001/profile

Test Cases
Normal Cases
Update username
Update bio
Toggle notifications
Edge Cases
Invalid email format
Empty username
conflict@example.com server rejection
