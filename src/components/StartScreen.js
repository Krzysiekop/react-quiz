function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2> Wellcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React skills</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Click the button to start the quiz
      </button>
    </div>
  );
}

export default StartScreen;
