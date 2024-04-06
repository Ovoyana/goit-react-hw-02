import css from '../Feedback/Feedback.module.css';

export default function Feedback({feedbackObj, total, positive}) {
    return (
        <div className={css.feedbackList}>
            <p>Good: {feedbackObj.good}</p>
            <p>Neutral: {feedbackObj.neutral}</p>
            <p>Bad: {feedbackObj.bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </div>
    )
}