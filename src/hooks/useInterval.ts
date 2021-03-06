import { useEffect, useRef } from 'react'

// Хук установки интервала (вызов логики через промежутки времени)
export function useInterval(callback: any, delay: number | null): void {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            // @ts-ignore
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}