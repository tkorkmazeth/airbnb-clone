'use client'

import { useCallback } from "react"

interface CounterProps {
    title: string
    subtitle: string
    onChange: (value: number) => void
    value: number
}

const Counter: React.FC<CounterProps> = ({
    title, subtitle, onChange, value
}) => {
    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [onChange, value])

    const onReduce = useCallback(() => {
        if (value === 1) {
            return null
        }

        onChange(value - 1)
    }, [onChange, value])
  return (
    <div className="flex flex-row justify-between ">

    </div>
  )
}

export default Counter