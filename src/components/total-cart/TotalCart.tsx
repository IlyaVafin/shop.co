import Icon from '../shared/Icon/Icon'
import Button from '../ui/button/Button'
import Input from '../ui/input/Input'
import { useSelector } from 'react-redux'
import { selectCartTotal } from '@/store/selectors/selectors'
type TotalCart = {
	subTotal: number
	discount: number
	total: number
}
export default function TotalCart() {
		const subTotal = useSelector(selectCartTotal)
		const discount = Math.floor(subTotal * 0.2)
		const total = Math.floor(subTotal * 0.8) + 15
	return (
		<div className='w-[505px] max-h-[458px] border-gray-100 border-solid border rounded-[20px] pt-5 pl-6 pr-6 pb-5'>
			<h3 className='text-[24px] font-bold mb-6'>Order Summary</h3>
			<ul className='flex flex-col gap-5'>
				<li className='text-[20px] font-bold flex justify-between items-center'>
					<span className='font-light'>SubTotal</span> <span>${subTotal}</span>
				</li>
				<li className='text-[20px] flex justify-between items-center'>
					<span className='font-light'>Discount (-20%)</span>{' '}
					<span className='text-red-400 font-bold'>
						{'-'}${discount}
					</span>
				</li>
				<li className='text-[20px] flex justify-between items-center'>
					<span className='font-light'>Delivery Fee</span>{' '}
					<span className='font-bold'>$15</span>
				</li>
				<li className='flex justify-between items-center border-t border-t-gray-100 border-solid pt-4'>
					<span className='font-light text-[20px]'>Total</span>{' '}
					<span className='text-[24px] font-bold'>${total}</span>
				</li>
			</ul>
			<div className='flex gap-4 mt-6'>
				<Input
					inputPlaceholder='Add promo code'
					inputBackground='#f0f0f0'
					inputWidth='326px'
					inputHeight='48px'
				>
					<Icon id='icon-promo-code' Iconheight='24px' Iconwidth='24px' />
				</Input>
				<Button btnWidth='119px' btnHeight='48px' variant='black'>
					Apply
				</Button>
			</div>
			<Button
				className='mt-6 flex items-center justify-center gap-3'
				variant='black'
				btnWidth='457px'
				btnHeight='60px'
			>
				Go to Checkout <Icon id='icon-arrow-btn' Iconheight='24px' Iconwidth='24px'/>
			</Button>
		</div>
	)
}
