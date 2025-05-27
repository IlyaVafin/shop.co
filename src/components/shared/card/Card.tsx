'use client'
import s from './Card.module.css'
import Link from 'next/link'
import { useGetProductsQuery } from '@/store/productsApi'

export default function Card({ end, start }: { end: number; start: number }) {
	const { data, isLoading, error } = useGetProductsQuery()
	return (
		<>
			{error && <p>Не удалось получить информацию :(</p>}
			{isLoading && <p>Загрузка</p>}

			<ul className={s.listCarts}>
				{data && !error && (
					<>
						{data.slice(start, end).map(item => (
							<li key={item.id}>
								<Link href={`/product/${item.id}`}>
									<img
										width={268}
										height={268}
										src={item.imageUrl}
										alt={item.name}
									/>
									<p className={s.name}>{item.name}</p>
									<p className={s.price}>${item.price}</p>
								</Link>
							</li>
						))}
					</>
				)}
			</ul>
		</>
	)
}
