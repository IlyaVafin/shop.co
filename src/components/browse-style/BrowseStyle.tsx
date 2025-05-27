import Title from '../shared/Title/Title'
import s from './BrowseStyle.module.css'
import Image from 'next/image'
import Link from 'next/link'
const borwseList = [
	{
		title: 'Casual',
		bg: '/casual.jpg',
		width: 407,
	},
	{
		title: 'Formal',
		bg: '/formal.jpg',
		width: 684,
	},
	{
		title: 'Party',
		bg: '/party.jpg',
		width: 684,
	},
	{
		title: 'Gym',
		bg: '/gym.jpg',
		width: 407,
	},
]

export default function BrowseStyle() {
	return (
		<>
			<div className={s.browse}>
				<div className='container'>
					<div className={s.content}>
						<Title style={{textAlign: 'center'}} size='48px'>BROWSE BY dress STYLE</Title>
						<ul className={s.contentList}>
							{borwseList.map(item => (
								<li key={item.title}>
									<Link href=''>
										<p>{item.title}</p>
										<Image
											width={item.width}
											height={289}
											alt={`${item.title} style`}
											src={item.bg}
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
