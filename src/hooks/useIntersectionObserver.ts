import { useEffect } from "react"

const useIntersectionObserver = (
    targetRef: React.RefObject<HTMLElement | null>,
    onIntersect: () => void,
    threshold: number = 1.0
) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        onIntersect()
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold }
        )

        const target = targetRef.current
        if (target) {
            observer.observe(target)
        }

        return () => {
            if (target) {
                observer.unobserve(target)
            }
        }
    }, [targetRef, onIntersect, threshold])
}

export { useIntersectionObserver }