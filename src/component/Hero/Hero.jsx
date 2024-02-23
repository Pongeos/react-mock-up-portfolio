import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation' //react-type-animation
import Tilt from 'react-parallax-tilt'; //react-parallax-tilt

function Hero() {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <div className={styles.text_1}>Hi, it’s me</div>
                        <div className={styles.text_2}>John Doe</div>
                        <div className={styles.text_3}>
                            <span style={{ marginRight: '10px' }}>I’m a</span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Front-end Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Developer',
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                        <div className={styles.text_4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat commodi <br /> quas cupiditate minus dolore nulla eos accusantium labore explicabo.</div>
                        <ul className={styles.hero_social}>
                            <li><a href="#"><FaGithub /></a></li>
                            <li><a href="#"><FaLinkedinIn /></a></li>
                            <li><a href="#"><FaFacebookF /></a></li>
                        </ul>
                    </div>

                    <Tilt tiltReverse={true} transitionSpeed={2500} scale={1.1}>
                        <div className={styles.hero_img}></div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default Hero