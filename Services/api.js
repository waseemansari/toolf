import { emptySplitApi } from "./emptySplitApi";
import { API_END_POINTS } from "../config/ApiEndPoints";

export const api = emptySplitApi.injectEndpoints({

  reducerPath: "api",
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query: (data) => {
        return {
          url: API_END_POINTS.upload_file,
          method: "POST",
          body: data,
        };
      },

      invalidatesTags: ["uploadFile"]
    }),
    registerUser: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.register,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: [ "getTool"]
    }),
    sendForgetEmail: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.sendForgetEmail,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: [ "getTool"]
    }),
    verifyEmail: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.verifyEmail,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: [ "getTool"]
    }),
    loginuser: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.login,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["getTool"]
    }),
    updatepassword: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.updatePassword,
        method: "PUT",
        body: { ...data },
      }),
    }),
    updateProfile: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.updateProfile,
        method: "PUT",
        body: { ...data },
      }),
    }),
    updateProfilePhoto: builder.mutation({
      query: (data) => {
        return {
          url: API_END_POINTS.updateProfilePhoto + '/' + data.get('id'),
          method: "PUT",
          body: data,
        };
      },

    }),
    logout: builder.mutation({
      query: () => ({
        url: API_END_POINTS.logout,
        method: "POST",
      }),
    }),
   
    ///////////documents/////////
    
   
    //////////////end api///////////////////
  }),
  overrideExisting: true,
});
export const {
  useVerifyEmailMutation,
  useRegisterUserMutation,
  useSendForgetEmailMutation,
  useLoginuserMutation,
  useUpdatepasswordMutation,
  useUpdateProfileMutation,
  useUpdateProfilePhotoMutation,
  useLogoutMutation,
  useGetSingleUserQuery,
  useUploadFileMutation,

  
  // end student side  //////////
} = api;