import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/types/types'

const initialState: { items: Product[] } = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<Product>) {
			const existing = state.items.find(item => item.id === action.payload.id)
			if (existing) {
				existing.quantity++
			} else {
				state.items.push({ ...action.payload, quantity: 1 })
			}
		},
		removeFromCart(state, action: PayloadAction<number>) {
			state.items = state.items.filter(item => item.id !== action.payload)
		},
		clearCart(state) {
			state.items = []
		},
		incrementQuantity(state, action: PayloadAction<number>) {
			const el = state.items.find(item => item.id === action.payload)
			if (el) {
				el.quantity++
			}
		},
		decrementQuantity(state, action: PayloadAction<number>) {
			const el = state.items.find(item => item.id === action.payload)
			if (el) {
				el.quantity--
				if (el.quantity === 0) {
					state.items = state.items.filter(item => item.id !== el.id)
				}
			}
		},
		chooseColor(state, action: PayloadAction<{ id: number; color: string }>) {
			const el = state.items.find(item => item.id === action.payload.id)
			if (el) {
				el.color = action.payload.color
			}
		},
		chooseSize(state, action: PayloadAction<{ id: number; size: string }>) {
			const el = state.items.find(item => item.id === action.payload.id)
			if (el && el.size?.includes(action.payload.size)) {
				el.size = action.payload.size
			}
		},
	},
})

export const {
	addToCart,
	removeFromCart,
	clearCart,
	incrementQuantity,
	decrementQuantity,
	chooseColor,
	chooseSize
} = cartSlice.actions
export default cartSlice.reducer
