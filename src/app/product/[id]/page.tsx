'use client'
import Title from '@/components/shared/Title/Title'
import Button from '@/components/ui/button/Button'
import SelectedColor from '@/components/ui/selectedColor/SelectedColor'
import useGetPath from '@/hooks/useGetPath'
import {
	addToCart,
	decrementQuantity,
	incrementQuantity,
} from '@/store/cartSlice'
import Image from 'next/image'
import { useState } from 'react'
import s from './Product.module.css'
import Sizes from '@/components/ui/sizes/Sizes'

export default function Product() {
	const { cartItem, data, isError, isLoading, dispatch } = useGetPath()

	if (isLoading) return <p>Загрузка...</p>
	if (isError) return <p>Не удалось получить информацию о товаре :(</p>

	return (
		<>
			{data && (
				<>
					<div className='container'>
						<div className='flex gap-10'>
							<Image width={444} height={530} alt='' src={data.imageUrl} />
							
							<div className={s.desc}>
								<Title size='40px'>One Life Graphic T-shirt</Title>
								<p className={s.price}>${data.price}</p>
								<p>{data.description}</p>
								<p>Select Colors</p>
								<SelectedColor />
								<Sizes/>
								<div className='flex items-center gap-[20px]'>
									{cartItem ? (
										<>
											<div className='flex w-[170px] items-center justify-around h-[52px] rounded-[20px] bg-[#f0f0f0] text-[16px]'>
												<Button
													onClick={() =>
														dispatch(decrementQuantity(cartItem.id))
													}
												>
													-
												</Button>
												<span style={{ background: '#f0f0f0' }}>
													{cartItem.quantity}
												</span>
												<Button
													onClick={() =>
														dispatch(incrementQuantity(cartItem.id))
													}
												>
													+
												</Button>
											</div>
											<Button
												disabled={true}
												btnWidth='400px'
												btnHeight='52px'
												variant='black'
												onClick={() => dispatch(addToCart(data))}
												style={{ opacity: '0.5' }}
											>
												Add to cart
											</Button>
										</>
									) : (
										<Button
											disabled={false}
											btnWidth='400px'
											btnHeight='52px'
											variant='black'
											onClick={() => dispatch(addToCart(data))}
											style={{ opacity: '1' }}
										>
											Add to cart
										</Button>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}
