import { decrementQuantity, incrementQuantity } from '@/store/cartSlice'
import { Product } from '@/types/types'
import { useDispatch } from 'react-redux'
import Button from './button/Button'

export const ButtonCounter = ({ cartItem, width }: { cartItem: Product, width?:string }) => {
	const dispatch = useDispatch()
	return (
		<>
			{cartItem && (
				<div style={{width: width}} className={`flex items-center justify-around h-[52px] rounded-[20px] bg-[#f0f0f0] text-[16px]`}>
					<Button onClick={() => dispatch(decrementQuantity(cartItem.id))}>
						-
					</Button>
					<span style={{ background: '#f0f0f0' }}>{cartItem.quantity}</span>
					<Button onClick={() => dispatch(incrementQuantity(cartItem.id))}>
						+
					</Button>
				</div>
			)}
		</>
	)
}
