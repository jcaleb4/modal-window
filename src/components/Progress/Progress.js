import React, { useEffect } from 'react';
import './Progress.scss';

const Progress = ({closeModal, progressData}) => {
    useEffect(() => {}, [progressData]);

    const progressSteps = () => (progressData.steps.map((step, index) => {
        const date = step.lastUpdated ? new Date(step.lastUpdated) : null;
        return (
            <li key={`step-${index}`} alt-index={index + 1} className={`progress__item ${step.complete ? 'passed' : ''}`}>
                <h2 className="progress__item__title">{step.title}</h2>
                {
                    date ?
                        <h4  className="progress__item__time">
                            {step.lastUpdatedTitle || 'Last updated'}
                            <span className="progress__item__date">
                                {`${(date.getMonth() - 9 ? '0' : '') + (date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`}
                            </span>
                        </h4>
                    :
                        null
                }
            </li>
        );
    }));

    return (
        <div className="progress__container">
            <header className="progress__header">
                <h2 className="progress__title">
                    {progressData.taskTitle}
                </h2>
                <span className="progress__status">{progressData.overallStatus}</span>
                <h3 className="progress__subtitle">{progressData.taskDescription}</h3>
            </header>
            <div className="progress__scroll">
                <ul className="progress__list">
                    {progressSteps()}
                </ul>
            </div>

            <div className="buttons__container">
                <button
                    className="app__process__btn btn ripple"
                >
                    Reinstate
                </button>
                <button
                    className="app__process__btn btn enfasis ripple"
                >
                    Draft revisions
                </button>
            </div>
        </div>
    );
}

export default React.memo(Progress);