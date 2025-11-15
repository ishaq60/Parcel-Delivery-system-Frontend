import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ICreateParcelInput, IParcelResponse, IParcelListResponse } from '@/types/parcel.types';
import config from '@/config';

export const parcelApi = createApi({
  reducerPath: 'parcelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.baseUrl}/parcels`,
    prepareHeaders: (headers, { getState }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const state = getState() as any;
      const token = (state.auth?.user?.token) || localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Parcel'],
  endpoints: (builder) => ({
    // Create a new parcel
    createParcel: builder.mutation<IParcelResponse, ICreateParcelInput>({
      query: (data) => ({
        url: '/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Parcel'],
    }),

    // Get all parcels (admin)
    getAllParcels: builder.query<IParcelListResponse, { page?: number; limit?: number; status?: string }>({
      query: ({ page = 1, limit = 10, status }) => {
        const params = new URLSearchParams();
        params.append('page', page.toString());
        params.append('limit', limit.toString());
        if (status) params.append('status', status);
        return `/all?${params.toString()}`;
      },
      providesTags: ['Parcel'],
    }),

    // Get sender's parcels
    getMyParcels: builder.query<IParcelListResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 }) => `/my-parcels?page=${page}&limit=${limit}`,
      providesTags: ['Parcel'],
    }),

    // Get receiver's parcels
    getReceivedParcels: builder.query<IParcelListResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 }) => `/received?page=${page}&limit=${limit}`,
      providesTags: ['Parcel'],
    }),

    // Get parcel by tracking ID (public)
    getParcelByTrackingId: builder.query<IParcelResponse, string>({
      query: (trackingId) => `/track/${trackingId}`,
      providesTags: ['Parcel'],
    }),

    // Get parcel by ID
    getParcelById: builder.query<IParcelResponse, string>({
      query: (id) => `/${id}`,
      providesTags: ['Parcel'],
    }),

    // Cancel parcel (sender)
    cancelParcel: builder.mutation<IParcelResponse, string>({
      query: (id) => ({
        url: `/${id}/cancel`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Parcel'],
    }),

    // Confirm delivery (receiver)
    confirmDelivery: builder.mutation<IParcelResponse, string>({
      query: (id) => ({
        url: `/${id}/confirm`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Parcel'],
    }),

    // Update parcel status (admin)
    updateParcelStatus: builder.mutation<IParcelResponse, { id: string; status: string; note?: string }>({
      query: ({ id, status, note }) => ({
        url: `/${id}/status`,
        method: 'PATCH',
        body: { status, note },
      }),
      invalidatesTags: ['Parcel'],
    }),

    // Block/Unblock parcel (admin)
    toggleBlockParcel: builder.mutation<IParcelResponse, string>({
      query: (id) => ({
        url: `/${id}/toggle-block`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Parcel'],
    }),
  }),
});

export const {
  useCreateParcelMutation,
  useGetAllParcelsQuery,
  useGetMyParcelsQuery,
  useGetReceivedParcelsQuery,
  useGetParcelByTrackingIdQuery,
  useGetParcelByIdQuery,
  useCancelParcelMutation,
  useConfirmDeliveryMutation,
  useUpdateParcelStatusMutation,
  useToggleBlockParcelMutation,
} = parcelApi;
