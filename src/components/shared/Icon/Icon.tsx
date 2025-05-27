interface IconProps {
	className?: string
	id: string
	style?: React.CSSProperties
	Iconwidth?: string
	Iconheight?: string
}
export default function Icon({
	className,
	id,
	style,
	Iconwidth,
	Iconheight,
}: IconProps) {
	return (
		<>
			<svg
				style={{ width: Iconwidth, height: Iconheight, ...style }}
				className={className}
			>
				<use href={`/sprite.svg/#${id}`}></use>
			</svg>
		</>
	)
}
