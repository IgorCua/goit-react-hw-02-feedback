import React, { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    render() {
        return (
            <section className="feedback">

                <h1 className="feedback__title-main">Please leave feedback</h1>

                <div className="feedback__buttons">
                    <button className="feedback__btn">Good</button>
                    <button className="feedback__btn">Neutral</button>
                    <button className="feedback__btn">Bad</button>
                </div>

                <div className="feedback__stat">
                    <h2 className="feedback__title">Statistics</h2>
                    <p className="feedback__item">Good: </p>
                    <p className="feedback__item">Neutral: </p>
                    <p className="feedback__item">Bad: </p>
                </div>
            </section>
        )
    }
}