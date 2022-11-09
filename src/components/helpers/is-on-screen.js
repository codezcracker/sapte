import {useEffect, useState} from "preact/hooks";

export default function isOnScreen(ref) {
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
