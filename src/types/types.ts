export interface Product {
	id: number
	name: string
	size: string[] | string | null
	price: number
	imageUrl: string
	quantity: number
	description: string
	color: string | null
}