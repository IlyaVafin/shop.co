'use client'
import Link from 'next/link'
import Card from '../shared/card/Card'
import Title from '../shared/Title/Title'
import Button from '../ui/button/Button'

export default function Topics({
	title,
	start,
	end,
}: {
	title: string
	start: number
	end: number
}) {

	return (
		<>
			<div className='topics'>
				<div className='container'>
					<div className='flex items-center justify-center flex-col'>
						<Title
							style={{ marginTop: '72px', marginBottom: '52px' }}
							size='48px'
						>
							{title}
						</Title>
						<Card start={start} end={end} />
						<div className='mt-9 mb-20'>
							<Button btnWidth='218px' btnHeight='52px' variant='transparent'>
								<Link href='/cart'>View All</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
