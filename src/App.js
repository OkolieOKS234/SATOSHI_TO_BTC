import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <h1>SATOSHI TO BTC CONVETER</h1>
      <div className="converter">
        <form>
          <label>SATOSHI: </label>
          <input
            type="number"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p>
            The value of BTC is{" "}
            <span className="btcvalue">{name / 100000000}</span>
          </p>
        </form>
      </div>
    </div>
  );
}
