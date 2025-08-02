import React, {FC, useEffect, useRef} from 'react'
import {IEventProps, IFlipSetting} from "react-pageflip/build/html-flip-book/settings";
import dynamic from "next/dynamic";
import styles from "./Diary.module.css"
import Image from 'next/image'
import {useInView, useScroll} from "framer-motion";
interface HTMLFlipPageOverride extends Partial<IFlipSetting & IEventProps> {
    className?: string
    style?: React.CSSProperties
    children: React.ReactNode
    renderOnlyPageLengthChange?: boolean
    ref?: any
}
const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
    ssr: false
}) as React.ComponentType<HTMLFlipPageOverride>

const Diary:FC = () => {
    const ref = useRef(null);
    const book = useRef(null);
    const descriptionRef = useRef(null);
    const bookInView =  useInView(ref,{amount:"some"})
    const descriptionInView =  useInView(descriptionRef,{amount:"all"})
    useEffect(() => {
        if(bookInView&&book.current&&!descriptionInView)
            { // @ts-ignore
                book.current.pageFlip().flipNext({corner: ['top', 'bottom']})
            }
        else if(descriptionInView&&descriptionRef.current)
            { // @ts-ignore
                book.current.pageFlip().flipPrev({corner: ['top', 'bottom']})
            }
    }, [bookInView,descriptionInView])
    return (
        <div className={styles.mainWrap} >
            <p className={styles.description} ref={descriptionRef}>
                В лесу Диппер находит дневник, который полон информации о различных паранормальных существах и событиях,
                происходящих в городе. Автор дневников — таинственный исследователь, который изучал аномалии Гравити
                Фолз задолго до приезда Диппера и Мэйбл. Эти записи помогают героям разбираться в том, что происходит вокруг них, и спасать город от различных угроз.
            </p>
            <div className={styles.diaryWrap} ref={ref}>
                <HTMLFlipBook   useMouseEvents={false} ref={book} drawShadow={false} className={styles.diary} width={602} height={700}>
                    <div className="demoPage"><Image width={602} height={784} alt={'page 1'} src={'/page1.png'}/></div>
                    <div className="demoPage"><Image width={602} height={784} alt={'page 2'} src={'/page2.png'}/></div>
                    <div className="demoPage"><Image width={602} height={784} alt={'page 3'} src={'/page3.png'}/></div>
                    <div className="demoPage"><Image width={602} height={784} alt={'page 4'} src={'/page4.png'}/></div>
                </HTMLFlipBook>
            </div>
        </div>

    )
};
export default Diary;