import Button from "../button/Button"
import { useState } from "react"
export default function Sizes() {
	const sizes = ['Small', 'Medium', 'Large', 'X-Large']
	const [selectedSize, setSelectedSize] = useState<null | string>(null)
	return (
		<ul className='flex gap-3'>
			{sizes.map(size => (
				<li key={size}>
					<Button
						btnWidth='106px'
						btnHeight='46px'
						variant={selectedSize === size ? 'black' : 'gray'}
						onClick={() => setSelectedSize(size)}
					>
						{size}
					</Button>
				</li>
			))}
		</ul>
	)
}
