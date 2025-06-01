import Icon from '../../shared/Icon/Icon'
import Button from '../button/Button'

interface ISelectedColor {
	selectedColor: string | null
	setSelectedColor: (color: string) => void
	error: boolean
}
const buttonColors = ['brown', 'green', 'black']

export default function selectedColor({
	selectedColor,
	setSelectedColor,
	error,
}: ISelectedColor) {
	return (
		<>
			<ul className='flex flex-col gap-4 border-t-1 border-t-gray-100 pt-6 pb-6'>
				<p>Select Colors</p>
				<div className='flex gap-4'>
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
				</div>
				{error && (
					<p className='mb-2 text-red-500 mt-[-10px]'>Choose color :)</p>
				)}
			</ul>
		</>
	)
}
