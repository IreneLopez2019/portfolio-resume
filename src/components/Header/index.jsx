import React from "react";
import styles from "./Header.module.scss";

const Header = ({ data }) => (
    <header className={styles.header}>
        <img src={data.picture.url} alt={data.picture.alt} />

        <h1>
            {data.name}
            {data.deco.url && <img src={data.deco.url} alt={data.deco.alt} />}
        </h1>
    </header>
);

export default Header;
