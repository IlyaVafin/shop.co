
import { CSSProperties } from 'react'
import s from './Input.module.css'
interface InputProps {
	children?: React.ReactNode
	inputWidth?: string
	inputHeight?: string
	inputPlaceholder?: string
	style?: CSSProperties
	inputBackground?: string
}

export default function Input({
	children,
	inputWidth,
	inputHeight,
	inputPlaceholder,
	inputBackground,
	style
}: InputProps) {
	return (
		<div className={s.inputWrapper}>
			<input
			className={s.inputComponent}
			style={{ width: inputWidth, height: inputHeight, background: inputBackground, ...style}}
				placeholder={inputPlaceholder}
				type='text'
			/>
			<button className={s.iconsInput}>
			{children}
			</button>
		</div>
	)
}
