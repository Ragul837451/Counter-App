import { useState, useEffect, useRef } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const countRef = useRef(null);

  useEffect(() => {
    // Animate scale on change
    countRef.current.classList.remove("changed");
    void countRef.current.offsetWidth; // trigger reflow
    countRef.current.classList.add("changed");
  }, [count]);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(0);

  // Color based on count value
  let countColor = "#7c3aed"; // purple for zero
  if (count > 0) {
    countColor = "#10b981"; // green for positive
  } else if (count < 0) {
    countColor = "#ef4444"; // red for negative
  }

  return (
    <div className="counter-card">
      <div className="step-selector">
        <label className="step-option">
          <input
            type="radio"
            name="step"
            value={1}
            checked={step === 1}
            onChange={() => setStep(1)}
          />
          1
        </label>
        <label className="step-option">
          <input
            type="radio"
            name="step"
            value={5}
            checked={step === 5}
            onChange={() => setStep(5)}
          />
          5
        </label>
        <label className="step-option">
          <input
            type="radio"
            name="step"
            value={10}
            checked={step === 10}
            onChange={() => setStep(10)}
          />
          10
        </label>
      </div>

      <div className="display">
        <span className="count" ref={countRef} style={{ color: countColor }}>
          {count}
        </span>
      </div>

      <div className="buttons">
        <button type="button" className="btn decrease" onClick={decrement}>
          <span className="sign">−</span> Decrease {step}
        </button>
        <button type="button" className="btn increase" onClick={increment}>
          Increase {step} <span className="sign">+</span>
        </button>
      </div>

      <div className="footer">
        <button type="button" className="reset-btn" onClick={reset}>
          Reset count
        </button>
        <p className="current-count">
          Current count: <span className="current-value" style={{ color: countColor }}>
            {count}
          </span>
        </p>
      </div>
    </div>
  );
}
