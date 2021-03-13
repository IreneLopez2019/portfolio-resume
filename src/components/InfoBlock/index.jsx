import React from "react";
import styles from "./InfoBlock.module.scss";

const InfoBlock = ({ title, data, keys, isHtml = false, customClass }) => (
    <section className={customClass}>
        <h2>{title}</h2>

        <div className={styles.content}>
            {data &&
                (isHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: data }} />
                ) : (
                    data.map((x, i) => (
                        <div key={i} className={styles.toolsItem}>
                            {console.log(x[keys[0]], x[keys[1]])}
                            {x[keys[0]] && <h3>{x[keys[0]].text}</h3>}
                            {x[keys[1]] && (
                                <div dangerouslySetInnerHTML={{ __html: x[keys[1]].html }} />
                            )}
                        </div>
                    ))
                ))}
        </div>
    </section>
);

export default InfoBlock;
