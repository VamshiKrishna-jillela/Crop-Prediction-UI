import { useState } from "react";
import "./analysis.css";
import Graph from "../Graph";

const Analysis = () => {
  const [region, setRegion] = useState("dumpling");
  const [length, setLength] = useState(30);
  const [draw, setDraw] = useState(null);

  return (
    <div className="bb">
      {!draw && (
        <div className="form-div">
          <form className="analysis-form">
            <h1>Enter Details</h1>
            <div className="formInput">
              <label className="form-label">Region</label>
              <select
                className="form-input"
                value={region}
                onChange={(e) => {
                  const x = e.target.value;
                  setRegion(x);
                }}
              >
                <option value="ap">Region-1</option>
              </select>
              <span className="error-span">hi hello</span>

              <label className="form-label">State</label>
              <select
                className="form-input"
                value={length}
                onChange={(e) => {
                  const x = e.target.value;
                  setLength(x);
                }}
              >
                <option value="30">1 Month</option>
                <option value="90"> 3 Months</option>
                <option value="180"> 6 Months</option>
                <option value="270"> 9 Months</option>
                <option value="365"> 12 Months</option>
              </select>
              <span className="error-span">hi hello</span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setDraw(1);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {draw && <Graph length={length} draw={draw} />}
    </div>
  );
};

export default Analysis;
