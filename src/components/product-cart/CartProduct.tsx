import { Product } from '@/types/types'
import Image from 'next/image'
import { ButtonCounter } from '../ui/ButtonCounter'
import Icon from '../shared/Icon/Icon'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '@/store/cartSlice'
interface ICartProduct extends Omit<Product, 'quantity' | 'description'> {
	item: Product
}
export default function productCart({
	imageUrl,
	name,
	color,
	size,
	price,
	item,
	id,
}: ICartProduct) {
	const dispatch = useDispatch()
	return (
		<>
			<Image
				className='rounded-[20px]'
				width={124}
				height={124}
				src={imageUrl}
				alt={name}
			/>
			<div className='ml-4'>
				<p className='font-bold text-[20px]'>{name}</p>
				<p className='text-[14px]'>
					Color:{' '}
					<span className='text-gray-500'>
						{color ? color[0].toUpperCase() + color?.slice(1) : ''}
					</span>
				</p>
				<p className='text-[14px]'>
					Size: <span className='text-gray-500'>{size}</span>
				</p>
				<p className='font-bold text-2xl mt-[15px]'>${price}</p>
			</div>
			<div className='flex flex-col items-end ml-auto gap-[56px]'>
				<button onClick={() => dispatch(removeFromCart(id))}>
					<Icon Iconheight='24px' Iconwidth='24px' id='icon-delete-cart' />
				</button>
				<ButtonCounter width='124px' cartItem={item} />
			</div>
		</>
	)
}
