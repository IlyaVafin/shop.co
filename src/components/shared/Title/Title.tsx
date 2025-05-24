import { CSSProperties } from 'react'
import s from './Title.module.css'

export default function Title({ size, children, style }: { size: string, children: React.ReactNode, style?: CSSProperties }) {
	return <p style={{ fontSize: size, ...style }} className={s.title}>{children}</p>
}
