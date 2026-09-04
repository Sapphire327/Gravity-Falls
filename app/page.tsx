'use client'
import Bill from "@/app/Components/Bill/Bill"
import Diary from "@/app/Components/Diary3/Diary"
import GravityParallax from "@/app/Components/GravityParallax/GravityParallax"
import clsx from "clsx"
import { motion } from "framer-motion"
import Lenis from 'lenis'

import Image from "next/image"
import { useEffect } from "react"
import styles from './page.module.css'


export default function MultiLayerParallax() {

    useEffect(()=>{
        const lenis = new Lenis({
            autoRaf: true,
        });
        return () => {
            lenis.destroy();
        };
    },[])

    return (
        <div className={styles.main}>
            <GravityParallax/>
            <div className={styles.about}>
                <motion.div initial={{opacity: 0}}
                            className={styles.aboutBlock}
                            whileInView={{
                                opacity: 1,
                                transition: {duration: 4}
                            }}
                >
                    <Image className={styles.MabelImg} src="/Mabel1.png" width={640} height={360} alt={"Mabel"}/>
                    <p className={styles.description}>
                        Диппер и Мэйбл, приезжают к своему чудаковатому дяде Стэну в
                        какой-то захолустный городок под
                        названием Гравити Фолз. Казалось бы, ничего особенного, но тут начинается настоящий трэш!
                        Городок
                        оказывается полным всяких мистических существ, секретов и тайн.

                    </p>
                </motion.div>
                <motion.div className={clsx(styles.aboutBlock,styles.DipperBlock)}
                            initial={{opacity: 0}}
                            whileInView={{
                                opacity: 1,
                                transition: {duration: 4}
                            }}>
                    <p className={styles.description}> Близняшки постоянно попадают в
                        переделки, разгадывают загадки и сражаются с монстрами. А еще там куча смешных моментов и
                        неожиданных поворотов сюжета. В общем, если любишь приключения, юмор и немного мистики, то этот
                        мульт точно зайдет!</p>
                    <Image src="/Dipper1.png" className={styles.DipperImg} width={640} height={360} alt={"Dipper"}/>

                </motion.div>
            </div>

            <div style={{marginTop:"150px"}}>
                <Diary/>
            </div>
            <div style={{marginTop:"150px"}}>
                <Bill/>
            </div>

            {/*<div style={{height:"2000px"}}>*/}

            {/*</div>*/}

        </div>
    );
}
