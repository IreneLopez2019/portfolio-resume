import React from "react";
import styles from "./ContactData.module.scss";

const ContactData = ({ data }) => (
    <section className={styles.contactData}>
        {data.map((x, i) => (
            <div key={i}>
                <img src={x.icon.url} alt={x.icon.alt} />
                <span dangerouslySetInnerHTML={{ __html: x.text.html }} />
            </div>
        ))}
    </section>
);

export default ContactData;
