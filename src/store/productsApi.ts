import { Product } from '@/types/types'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
	endpoints: builder => ({
		getProducts: builder.query<Product[], void>({
			query: () => 'products',
		}),
		getProductById: builder.query<Product, number>({
			query: id => `products/${id}`,
		}),
	}),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi
