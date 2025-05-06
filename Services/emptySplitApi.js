import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 
export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    //prepare headers work need to be done
    prepareHeaders : async (headers, {getState, endpoint}) => {
      try{
        const token = getState().auth?.userDetail?.token;
        if (token) {
          if ( endpoint !== 'uploadFile') {
             headers.set('authorization', `Bearer ${token}`)
          }
     
        } else {
          headers.set('authorization', '')
        }
      } catch(err) {
        headers.set('authorization', '')
      }
      return headers
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "getTool",
  ],
});
