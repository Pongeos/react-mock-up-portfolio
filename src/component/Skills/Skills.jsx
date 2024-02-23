import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNodeJs } from "react-icons/fa6";

function Skills() {
    return (
        <div className={styles.skill_con}>
            <h3 className={styles.skill_titer}>
                My Skill Set
            </h3>
            <ul className={styles.skill_list}>
                <li><FaSquareJs /></li>
                <li><FaReact /></li>
                <li><FaSass /></li>
                <li><FaGitAlt /></li>
                <li><FaNodeJs /></li>
            </ul>
        </div>
    )
}

export default Skills