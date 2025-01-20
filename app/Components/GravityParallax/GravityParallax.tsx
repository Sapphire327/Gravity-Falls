import React, {FC, useRef} from 'react'
import styles from "./GravityParallax.module.css";
import {motion, useScroll, useTransform} from "framer-motion";

const GravityParallax:FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div ref={ref} className={styles.top}>
            <motion.h1 style={{y: textY}} className={styles.h1}>
                Gravity falls
            </motion.h1>
            <motion.div style={{y: backgroundY}} className={styles.fullimg}></motion.div>
            <div className={styles.partimg}></div>
        </div>
    )
};
export default GravityParallax;