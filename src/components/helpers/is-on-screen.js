import {useEffect, useState} from "preact/hooks";

export default function isOnScreen(ref) {
	
	if (typeof window === "undefined"){
		return false
	}
	
	const [isIntersecting, setIntersecting] = useState(false)
	const observer = new IntersectionObserver(
		([entry]) => setIntersecting(entry.isIntersecting)
	)
	useEffect(() => {
		observer.observe(ref.current)

		return () => {
			observer.disconnect()
		}
	}, [])

	return isIntersecting
}
