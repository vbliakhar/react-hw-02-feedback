import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="FeedbackOptions">
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
