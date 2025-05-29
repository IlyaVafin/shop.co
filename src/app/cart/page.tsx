'use client'
import Title from '@/components/shared/Title/Title'
import { incrementQuantity, decrementQuantity } from '@/store/cartSlice'
import { RootState } from '@/store/store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function Cart() {
	const cart = useSelector((state: RootState) => state.cart.items)
	const dispatch = useDispatch()
	return (
		<>
			{cart.length === 0 && (
				<p className='flex items-center justify-center'>
					Корзина пуста! Добавьте что нибудь...
				</p>
			)}
			<p>Home {">"} Cart</p>
			<Title size='40px'>Your cart</Title>
			<ul>
				{cart.map(item => (
					<li key={item.id}>
						<p>{item.name}</p>
						<img src={item.imageUrl} alt='' />
						<p>{item.quantity}</p>
						<p>
							Color:{' '}
							{item.color
								? item.color[0].toUpperCase() + item.color?.slice(1)
								: ''}
						</p>
						<p>{item.size}</p>
						<button onClick={() => dispatch(incrementQuantity(item.id))}>
							+
						</button>
						<button onClick={() => dispatch(decrementQuantity(item.id))}>
							-
						</button>
					</li>
				))}
			</ul>
		</>
	)
}
