import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Olá, eu sou o Gustavo!</h1>
            <p className={styles.description}>
                lore lore lore lore lore lore lore lore lore lore lore lore lorelorelorelore
                lorelorelorelorel lorelore
            </p>
            <a href="mailto:gustavocaruso82@gmail.com" className={styles.contactBtn}>Entre em contato comigo</a>
           
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
};