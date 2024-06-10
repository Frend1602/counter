import { useState } from "react";
import "./app.scss";

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };
  const onClickReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Минус
        </button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
        <button onClick={onClickReset} className="reset">
          сброс
        </button>
      </div>
    </div>
  );
}

export default App;
