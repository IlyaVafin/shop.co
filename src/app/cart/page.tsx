'use client'
import CartProduct from '@/components/product-cart/CartProduct'
import Title from '@/components/shared/Title/Title'
import TotalCart from '@/components/total-cart/TotalCart'
import { selectorCart } from '@/store/selectors/selectors'
import { useSelector } from 'react-redux'
export default function Cart() {
	const cart = useSelector(selectorCart)
	return (
		<>
			{cart.length > 0 ? (
				<div className='container'>
					<p>Home {'>'} Cart</p>
					<Title size='40px'>Your cart</Title>
					<div className='flex gap-5 flex-wrap mb-20'>
						<ul className='flex flex-col gap-6 border-gray-100 border-solid border max-w-[715px] rounded-[20px] pl-6 pt-5 pb-5 pr-6 h-auto'>
							{cart.map(item => (
								<li
									className='flex w-[667px] max-h-[148px] border-b-gray-100 border-b-col border-b-solid border-b pb-6 '
									key={item.id}
								>
									<CartProduct
										item={item}
										size={item.size}
										price={item.price}
										id={item.id}
										color={item.color}
										name={item.name}
										imageUrl={item.imageUrl}
									/>
								</li>
							))}
						</ul>
						<TotalCart />
					</div>
				</div>
			) : (
				<p className='flex items-center justify-center'>
					Add something to cart :)
				</p>
			)}
		</>
	)
}
