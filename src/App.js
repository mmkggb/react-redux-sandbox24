import { useEffect, useState } from "react";
export default function App() {
  // creating async function to call api when button clicked
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    //creating response fetch variable
    const res = await fetch("https://api.adviceslip.com/advice");
    // creating variable to execute
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
  return;
}

// REACT COMPONENTS ARE SIMPLY FUNCTIONS LIKE "function fnName(){}"
// the contents that are returned are jsx files that uses html tags
