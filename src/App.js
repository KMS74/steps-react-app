import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  // states
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // methods
  const handelNext = () => {
    // React reacts to the state changes by re-rendering the component
    if (step < 3)
      // update the state based on the current value of the state.
      setStep((s) => s + 1);
  };

  const handelPrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)} className="close">
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handelPrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handelNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
