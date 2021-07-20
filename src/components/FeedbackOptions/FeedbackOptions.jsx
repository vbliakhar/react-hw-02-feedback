import './FeedbackOptions.scss';
const FeedbackOptions = ({ options }) => {
  return (
    <div className="FeedbackOptions">
      <button onClick={options} name="good" type="button">
        Good
      </button>
      <button onClick={options} name="neutral" type="button">
        Neutral
      </button>
      <button onClick={options} name="bad" type="button">
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
