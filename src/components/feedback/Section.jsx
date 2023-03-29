import PropTypes from "prop-types";
import style from "./Section.module.css";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Children } from "react";

export const Section = ({title, children}) => {
    return (
        <section className={style.feedback}>
            <h1 className={style.title}>{title}</h1>
            {children}
        </section>
    )
}