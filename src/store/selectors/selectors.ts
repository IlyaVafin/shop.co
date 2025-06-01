import { RootState } from '../store'

export const selectorCart = (state: RootState) => state.cart.items

export const selectCartTotal = (state: RootState) =>
	state.cart.items.reduce(
		(total, item) => total + item.price * (item.quantity ?? 1),
		0
	)


