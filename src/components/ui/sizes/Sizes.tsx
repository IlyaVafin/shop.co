import Button from '../button/Button'

interface ISizes {
	selectedSize: string | string[] | null
	setSelectedSize: (size: string) => void
	error: boolean
}

export default function Sizes({
	selectedSize,
	setSelectedSize,
	error,
}: ISizes) {
	const sizes = ['Small', 'Medium', 'Large', 'X-Large']
	return (
		<>
			<ul className='flex flex-col gap-3 mb-6 pt-6 pb-6 border-b-1 border-b-gray-100 border-t-1 border-t-gray-100'>
				<p>Choose Size</p>
				<div className='flex gap-3'>
					{sizes.map(size => (
						<li key={size}>
							<Button
								style={{ transition: 'all 0.5s ease' }}
								btnWidth='106px'
								btnHeight='46px'
								variant={selectedSize === size ? 'black' : 'gray'}
								onClick={() => setSelectedSize(size)}
							>
								{size}
							</Button>
						</li>
					))}
				</div>
				{error && (
					<p className=' text-red-500 mt-[5px]'>Choose size :)</p>
				)}
			</ul>
		</>
	)
}
