import { useState, useEffect } from "react"
export default function useMobile() {
	const [isMobile, setIsMobile] = useState(false)
	const isMobileFunc = () => {
				setIsMobile(window.innerWidth <= 1293)
	}
	useEffect(() => {
		if(typeof window === 'undefined') return;
				isMobileFunc()
			window.addEventListener('resize', isMobileFunc)
			return () => window.removeEventListener('resize', isMobileFunc)
	}, [])
	return {isMobile}
}