import Icon from '../shared/Icon/Icon'
import s from './Brands.module.css'
const brands = [
	{
		title: 'versace',
		id: 'icon-versace',
		width: '166px',
	},
	{
		title: 'zara',
		id: 'icon-zara',
		width: '91px',
	},
	{
		title: 'gucci',
		id: 'icon-gucci',
		width: '156px',
	},
	{
		title: 'prada',
		id: 'icon-prada',
		width: '194px',
	},
	{
		title: 'calvin-klein',
		id: 'icon-calvin-klein',
		width: '210px',
	},
]

export default function Brands() {
	return (
		<>
				<ul className={s.brands}>
					<div className="container">
					{brands.map(brand => (
						<li key={brand.title}>
							<Icon Iconwidth={brand.width} Iconheight='40px' id={brand.id} />
						</li>
					))}
					</div>
				</ul>
		</>
	)
}
