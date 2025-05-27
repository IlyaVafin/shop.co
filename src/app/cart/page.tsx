'use client'
import { incrementQuantity, decrementQuantity } from '@/store/cartSlice'
import { RootState } from '@/store/store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function Basket() {
	const cart = useSelector((state: RootState) => state.cart.items)
	const dispatch = useDispatch()
	return (
		<>
			{cart.length === 0 && (
				<p className='flex items-center justify-center'>
					Корзина пуста! Добавьте что нибудь...
				</p>
			)}
			<ul>
				{cart.map(item => (
					<li key={item.id}>
						<p>{item.name}</p>
						<img src={item.imageUrl} alt='' />
						<p>{item.quantity}</p>
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
