import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
       <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contatos</h2>
            <p>Escolha uma das opções!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:gustavocaruso82@gmail.com">gustavocaruso82@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/gustavo-caruso-dos-santos-276042232/">linkedin.com/Gustavo Caruso dos Santos</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                <a href="https://github.com/GustavoCaruso">github.com/GustavoCaruso</a>
            </li>
        </ul>
       </footer>
    );
}