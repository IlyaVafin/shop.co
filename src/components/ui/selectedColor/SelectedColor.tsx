import { useState } from 'react'
import Icon from '../../shared/Icon/Icon'
import Button from '../button/Button'
export default function selectedColor() {
	const [selectedColor, setSelectedColor] = useState<null | string>(null)
	const buttonColors = ['#4F4631', '#314F4A', '#31344F']
	return (
		<>
			<ul className='flex gap-4'>
				{buttonColors.map(color => (
					<li key={color}>
						<Button
							onClick={() => setSelectedColor(color)}
							btnHeight='37px'
							btnWidth='37px'
							style={{
								background: color,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{selectedColor === color ? (
								<Icon Iconheight='16px' Iconwidth='16px' id='icon-check' />
							) : (
								''
							)}
						</Button>
					</li>
				))}
			</ul>
		</>
	)
}
