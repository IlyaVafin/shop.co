'use client'
import Title from '@/components/shared/Title/Title'
import Button from '@/components/ui/button/Button'
import { ButtonCounter } from '@/components/ui/ButtonCounter'
import SelectedColor from '@/components/ui/selectedColor/SelectedColor'
import Sizes from '@/components/ui/sizes/Sizes'
import { addToCart } from '@/store/cartSlice'
import useСharacteristicsProduct from '@/hooks/useCharacteristicsProduct'
import useGetPath from '@/hooks/useGetPath'
import Image from 'next/image'
import s from './Product.module.css'

export default function Product() {
	const { cartItem, data, isError, isLoading, dispatch } = useGetPath()
	const {
		selectedColor,
		selectedSize,
		sizeError,
		setSelectedColor,
		colorError,
		setSelectedSize,
		setColorError,
		setSizeError,
	} = useСharacteristicsProduct()

	function AddToCart() {
		const isColorMissing = selectedColor === null
		const isSelectedSize = selectedSize === null

		setColorError(isColorMissing)
		setSizeError(isSelectedSize)

		if (isColorMissing || isSelectedSize) return
		if (!data) return

		const productToAdd = { ...data, color: selectedColor, size: selectedSize }
		dispatch(addToCart(productToAdd))
	}

	if (!data) return null

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>Something wrong :( </p>

	return (
		<>
			{data && (
				<div className='container'>
					<div className='flex gap-10 mb-20'>
						<Image
							className='rounded-[20px]'
							width={444}
							height={530}
							alt={data.name}
							src={data.imageUrl}
						/>
						<div className={s.desc}>
							<Title size='40px'>One Life Graphic T-shirt</Title>
							<p className={s.price}>${data.price}</p>
							<p className={s.description}>{data.description}</p>
							<SelectedColor
								selectedColor={selectedColor}
								setSelectedColor={setSelectedColor}
								error={colorError}
							/>
							<Sizes
								selectedSize={selectedSize}
								setSelectedSize={setSelectedSize}
								error={sizeError}
							/>
							<div className='flex items-center gap-[20px]'>
								{cartItem && (
									<ButtonCounter width='170px' cartItem={cartItem} />
								)}
								<Button
									onClick={AddToCart}
									disabled={cartItem ? true : false}
									btnWidth='400px'
									btnHeight='52px'
									variant='black'
									className={cartItem ? 'opacity-50' : 'opacity-100'}
								>
									Add to Cart
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
