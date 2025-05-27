import React, { CSSProperties } from 'react'
import s from './Button.module.css'
interface ButtonProps {
	variant?: 'transparent' | 'black' | 'gray'
	btnWidth?: string
	btnHeight?: string
	children?: React.ReactNode
	borderRadius?: string
	background?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement> 
	disabled?: boolean
	style?: CSSProperties
}

export default function Button({
	variant,
	btnWidth,
	btnHeight,
	children,
	borderRadius,
	background,
	disabled,
	style,
	onClick,
}: ButtonProps) {
	return (
		<button
		disabled={disabled}
			onClick={onClick}
			className={`buttonComponent ${
				variant === 'transparent'
					? s.transparentBtn
					: variant === 'black'
					? s.blackBtn
					: variant === 'gray'
					? s.grayBtn
					: ''
			}`}
			style={{
				borderRadius: borderRadius,
				width: btnWidth,
				height: btnHeight,
				background: background,
				...style
			}}
		>
			{children}
		</button>
	)
}
