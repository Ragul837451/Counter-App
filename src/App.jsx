import Counter from "./Counter";

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="tagline">A SIMPLE LITTLE COUNTER</div>
        <h1 className="title">Keep count.</h1>
        <p className="subtitle">Tap the buttons and watch your number change.</p>
      </div>
      <Counter />
    </div>
  );
}
