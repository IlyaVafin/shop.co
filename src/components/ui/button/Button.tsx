import React from 'react'
import s from './Button.module.css'
interface ButtonProps {
	variant?: 'transparent' | 'black' | 'gray'
	btnWidth?: string
	btnHeight?: string
	children?: React.ReactNode
	borderRadius?: string
	background?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
	variant,
	btnWidth,
	btnHeight,
	children,
	borderRadius,
	background,
	onClick,
}: ButtonProps) {
	return (
		<button
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
			}}
		>
			{children}
		</button>
	)
}
