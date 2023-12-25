import React from 'react'
import { motion } from 'framer-motion'
import './Cover.css'
import { useTranslation } from 'react-i18next';
export const Cover = () => {

    const { t, i18n } = useTranslation();
    //i18n bizim aktif dilimizi tutar en/tr
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

    const SliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: '-200%',
            transition: {
                repeat: Infinity,

                duration: 100,
            }
        }
    }

    return (
        <div className='cover-container' id='cover'>
            <div className='wrapper'>
                <motion.div className='cover-content' variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants} className='name'> IREM SARAL</motion.h2>
                    <motion.h1 variants={textVariants} className='info'>
                        {t('position')}</motion.h1>
                    <motion.div variants={textVariants} className='button-container'>
                        <motion.button className='cover-btn' onClick={() => window.location.href = '#projects'}>{t('showProject')}</motion.button>
                        <motion.button className='cover-btn' onClick={() => window.location.href = '#contact'}>
                            {t('getContact')}
                        </motion.button>
                    </motion.div>
                    <motion.div className='sliderText' variants={SliderVariants} initial="initial" animate="animate">
                        Software Developer | Web Design
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
}