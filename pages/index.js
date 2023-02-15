import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
