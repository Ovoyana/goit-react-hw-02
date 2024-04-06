import css from "./Options/Options.module.css";

export default function Options({ clickHandler, totalFeedback, resetFeedback }) {
    return (
      <div className={css.buttonBox}>
        <button onClick={() => clickHandler('good')} className={css.button}>Good</button>
        <button onClick={() => clickHandler('neutral')} className={css.button}>Neutral</button>
        <button onClick={() => clickHandler('bad')} className={css.button}>Bad</button>
        {totalFeedback > 0 && (
          <button onClick={resetFeedback} className={css.button}>Reset</button>
        )}
      </div>
    );
  }