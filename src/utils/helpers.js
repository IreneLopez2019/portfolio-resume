export function isBrowser() {
    return typeof window !== "undefined";
}

export function slugify(string) {
    /* eslint-disable no-useless-escape */
    return string
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+|-+$/, "");
}

export function className(...classNames) {
    const classes = [];

    for (const className of classNames) {
        if (typeof className === "object") {
            for (const key in className) {
                if (className.hasOwnProperty(key) && className[key]) {
                    classes.push(key);
                }
            }
        } else {
            classes.push(className);
        }
    }

    return { className: classes.join(" ") };
}
