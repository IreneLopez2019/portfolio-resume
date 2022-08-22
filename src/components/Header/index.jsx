import React from "react";
import styles from "./Header.module.scss";

const Header = ({ data, languages, currentLanguage, setCurrentLanguage }) => (

    <header className={styles.header}>
        <div className={styles.languageToggler}>
            {languages.map(language =>
                <button
                    key={language}
                    className={language === currentLanguage ? styles.active : undefined}
                    onClick={() => setCurrentLanguage(language)}>
                    {language}
                </button>
            )}
        </div>

        <img src={data.picture.url} alt={data.picture.alt} />

        <h1>
            {data.name}
            {data.deco.url && <img src={data.deco.url} alt={data.deco.alt} />}
        </h1>
    </header>
);

export default Header;
