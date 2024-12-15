import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return( <section className={styles.container} id="about">
        <h2 className={styles.title}>Sobre mim</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            Lore lore lorel lore lorel lroe lore lore lore lroe lroe lroe rleor elroelo rleor

                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            Lore lore lorel lore lorel lroe lore lore lore lroe lroe lroe rleor elroelo rleor

                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            Lore lore lorel lore lorel lroe lore lore lore lroe lroe lroe rleor elroelo rleor

                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    )
}