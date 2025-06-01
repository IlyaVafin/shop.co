import { useState } from 'react'

export default function useСharacteristicsProduct() {
	const [selectedColor, setSelectedColor] = useState<string | null>(null)
	const [selectedSize, setSelectedSize] = useState<string | string[] | null>(
		null
	)
	const [sizeError, setSizeError] = useState(false)
	const [colorError, setColorError] = useState(false)
	return {
		selectedColor,
		selectedSize,
		sizeError,
		setSizeError,
		setSelectedColor,
		setSelectedSize,
		colorError,
		setColorError,
	}
}
