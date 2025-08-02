import { FC } from 'react'
import styles from './Bill.module.css'
import clsx from "clsx";
import Image from 'next/image'
import { motion } from 'motion/react';
const Bill:FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.scheme}>
                <Image className={styles.circle} alt={''} src={'/circle.svg'} height={512} width={512}></Image>
                <motion.div className={styles.Bill} animate={{
                    y: [10, -10, 10],
                }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}>
                    <Image className={styles.BillFire} alt={''} src={'/fire.gif'} height={261} width={400}/>
                    <Image alt={''} src={'/bill2.png'} height={529} width={646}/>
                </motion.div>

            </div>
        </div>
    )
};
export default Bill;