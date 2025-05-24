'use client'
import Button from '@/components/ui/button/Button'
import { addToCart } from '@/store/cartSlice'
import { useGetProductByIdQuery } from '@/store/productsApi'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


export default function Product() {
	const param = useParams()
	const id = param?.id
	const dispatch = useDispatch()
	const { data, isError, isLoading } = useGetProductByIdQuery(Number(id), {
		skip: !id,
	})

	if (isLoading) return <p>Загрузка...</p>
	if (isError) return <p>Не удалось получить информацию о товаре :(</p>


		
	return (
		<>
			{data && (
				<>
					<p>{data?.name}</p>
					<p>
						<img src={data.imageUrl} alt='' />
					</p>
					<Button onClick={() => dispatch(addToCart(data))}>Add to cart</Button>
				</>
			)}
		</>
	)
}
