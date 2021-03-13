import React from "react";
import styles from "./ContactData.module.scss";

const ContactData = ({ data }) => (
    <section className={styles.contactData}>
        <div>
            {data.map((x, i) => (
                <div key={i} className={styles.dataBlock}>
                    <img src={x.icon.url} alt={x.icon.alt} />
                    <span dangerouslySetInnerHTML={{ __html: x.text.html }} />
                </div>
            ))}
        </div>
    </section>
);

export default ContactData;
