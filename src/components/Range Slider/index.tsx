import React, { FC, TouchEvent, useEffect, useRef, useState } from 'react'
import * as styles from './styles.module.scss'
import cn from 'classnames'

export interface ISliderRange {
    min: number,
    max: number,
    value?: number,
    setValue?: React.Dispatch<React.SetStateAction<number>>
    orientation: 'horizontal' | 'vertical'
    promtAdditionalInfo?: string
}

const SliderRange: FC<ISliderRange> = (props) => {

    const initPercent = props.value ? Math.round(props.value / props.max * 100) : 0
    const [percent, setPercent] = useState(initPercent)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState(props.value ? props.value : props.min)
    const [isPromt, setIsPromt] = useState(false)


    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        console.log(e)
        document.addEventListener('mousemove', calculatePosMouse)
    }

    const calculatePosMouse = (e: MouseEvent) => {
        document.addEventListener('mouseup', hidePromt)
        calculateGeneral(e.clientX, e.clientY)
    }

    const calculatePosTouch = (e: any) => {
        e.preventDefault()
        calculateGeneral(e.touches[0].clientX, e.touches[0].clientY)
    }

    const calculateGeneral = (posX: number, posY: number) => {
        const sliderRect = sliderRef.current?.getBoundingClientRect()
        const sliderLength = props.orientation === "horizontal" ? sliderRect?.width : sliderRect?.height
        const clickPosition = props.orientation === "horizontal" ? posX - sliderRect?.left : sliderRect?.bottom - posY
        const realPercent = Math.max(0, Math.min(1, clickPosition / sliderLength))
        const valueTemp = Math.round(props.max * realPercent)
        setPercent(realPercent * 100)//Math.round(100 * clickPosition / sliderLength)
        setValue(valueTemp)
        props.setValue ? props.setValue(valueTemp) : null
        setIsPromt(true)
    }

    const handleTouchStart = (e: TouchEvent) => {
        document.addEventListener('touchend', hidePromt)
        document.addEventListener('touchmove', calculatePosTouch, { passive: false })
        calculateGeneral(e.touches[0].clientX, e.touches[0].clientY)
    };


    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        document.addEventListener('mouseup', hidePromt)
        setIsPromt(false)
    }

    const hidePromt = () => {
        setIsPromt(false)
        document.removeEventListener('mouseup', hidePromt)
        document.removeEventListener('touchend', hidePromt)
        document.removeEventListener('touchmove', calculatePosTouch)
        document.removeEventListener('mousemove', calculatePosMouse)
        console.log('hidepromt')
    }
    return (
        <div className={cn(styles.root, {
            [styles.rootVariantHorizontal]: props.orientation === 'horizontal',
            [styles.rootVariantVertical]: props.orientation === 'vertical',
        })}>
            <div className={styles.values}>{props.min}</div>
            <div
                ref={sliderRef}
                className={cn(styles.containerSlider, {
                    [styles.containerSliderHorizontal]: props.orientation === 'horizontal',
                    [styles.containerSliderVertical]: props.orientation === 'vertical',
                })}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
            >
                <div className={styles.fillSlider} style={props.orientation === 'horizontal' ? { height: '100%', width: percent + '%' } : { height: percent + '%', width: '100%' }}>
                    <div className={cn(
                        {
                            [styles.thumbHorizontal]: props.orientation === 'horizontal',
                            [styles.thumbVertical]: props.orientation === 'vertical'
                        }
                    )}> {(isPromt || (value > props.min && value < props.max)) && <div className={cn(styles.promt, props.orientation === 'vertical' ? styles.promtVertical : null)}>{value}</div>}</div>
                </div>
            </div>
            <div className={styles.values} >{props.max} </div>
        </div>
    )
}

export default SliderRange