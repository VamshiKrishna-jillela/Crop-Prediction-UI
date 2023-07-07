import React from "react";
import "./home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";

const Home = () => {
  const [q1, setq1] = useState("question");
  const [ans1, setans1] = useState("answer");
  const [q2, setq2] = useState("question");
  const [ans2, setans2] = useState("answer");
  const [q3, setq3] = useState("question");
  const [ans3, setans3] = useState("answer");
  const [q4, setq4] = useState("question");
  const [ans4, setans4] = useState("answer");
  const [q5, setq5] = useState("question");
  const [ans5, setans5] = useState("answer");
  const [q6, setq6] = useState("question");
  const [ans6, setans6] = useState("answer");
  const [q7, setq7] = useState("question");
  const [ans7, setans7] = useState("answer");
  const [q8, setq8] = useState("question");
  const [ans8, setans8] = useState("answer");

  return (
    <div className="home-body">
      <div className="accordian">
        <h2 className="accordian-title">Questions, Back in Your Mind</h2>

        <div className="container">
          <div
            onClick={() => {
              if (q1 === "question") {
                setq1("question js");
                setans1("answer ajs");
              } else {
                setq1("question");
                setans1("answer");
              }
            }}
            id="q1"
            className={q1}
          >
            What it was all about ????
          </div>
          <div id="ans1" className={ans1}>
            <p>
              Some Sensors collect N, P, K percentages, humidity, pH, and
              temperature data from a region. This data is sent to a
              crop-prediction engine that uses a trained neural network to label
              22 crops, assigning higher percentages to the most suitable crop.
              The total percentage adds up to 100.
            </p>
            <br />
            <p>
              Labeled data points are then sent to IPFS, a distributed database.
              IPFS processes the data and generates a unique content identifier
              (CID) - a 64-bit hash value. This CID identifies the content on
              the IPFS network.
            </p>
            <br />
            <p>
              This CID is stored on a public blockchain through a smart contract
              invocation to maintain a record.
            </p>
            <br />
            <p>This process runs continuously at regular intervals.</p>
          </div>
        </div>

        <div className="container">
          <div
            onClick={() => {
              if (q2 === "question") {
                setq2("question js");
                setans2("answer ajs");
              } else {
                setq2("question");
                setans2("answer");
              }
            }}
            id="q2"
            className={q2}
          >
            What this Crop-Analysis is About?
          </div>
          <div id="ans2" className={ans2}>
            <p>
              Now, this application fetches CIDs from the blockchain and
              utilizes them to retrieve the actual labeled data from IPFS. The
              gathered data is then meticulously visualized to provide the best
              possible insights, empowering you to make informed decisions.
            </p>
            <br />
            <p>
              For a thorough analysis of past crop prediction trends, I invite
              you to proceed to the dedicated
              <span
                style={{
                  color: "#066395",
                  fontWeight: "bolder",
                  textDecoration: "underline",
                }}
              >
                <Link to="/analysis"> crop-analysis </Link>
              </span>
              section. Here, you will have the opportunity to explore valuable
              insights and trends derived from the historical data. This
              analysis will contribute to enhancing your decision-making process
              and refining future crop predictions.
            </p>
          </div>
        </div>

        <div className="container">
          <div
            onClick={() => {
              if (q3 === "question") {
                setq3("question js");
                setans3("answer ajs");
              } else {
                setq3("question");
                setans3("answer");
              }
            }}
            id="q3"
            className={q3}
          >
            What this Manual-Input is About ?
          </div>
          <div id="ans3" className={ans3}>
            <p>
              Absolutely! It's indeed amazing! In addition to the sensors
              collecting data automatically, we also provide you with the
              opportunity to manually input custom features specific to your
              region through{" "}
              <span
                style={{
                  color: "#066395",
                  fontWeight: "bolder",
                  textDecoration: "underline",
                }}
              >
                <Link to="/form"> Manual Input </Link>
              </span>{" "}
              section. This allows for a more personalized and accurate
              prediction of the best-suitable crops for your particular area.
            </p>
          </div>
        </div>

        <div className="container">
          <div
            onClick={() => {
              if (q4 === "question") {
                setq4("question js");
                setans4("answer ajs");
              } else {
                setq4("question");
                setans4("answer");
              }
            }}
            id="q4"
            className={q4}
          >
            Want to Know More about Prediction-Engine ??
          </div>
          <div id="ans4" className={ans4}>
            Yeah!!! I Think You are excited, We will navigate you to the right
            Place. Yes, It's{" "}
            <a
              href="https://github.com/VamshiKrishna-jillela/Crop-Prediction-Engine"
              style={{
                color: "#066395",
                fontWeight: "bolder",
                textDecoration: "underline",
              }}
            >
              GitHub Repository
            </a>{" "}
            . Hope You will enjoy it...
          </div>
        </div>

        <div className="container">
          <div
            onClick={() => {
              if (q5 === "question") {
                setq5("question js");
                setans5("answer ajs");
              } else {
                setq5("question");
                setans5("answer");
              }
            }}
            id="q5"
            className={q5}
          >
            Want to Know More about This React-Application ??
          </div>
          <div id="ans5" className={ans5}>
            Awwwww!!! I Think You are excited about REACT, We will navigate you
            to the right Place. Yes, It's{" "}
            <a
              href="https://github.com/VamshiKrishna-jillela/Crop-Prediction-UI"
              style={{
                color: "#066395",
                fontWeight: "bolder",
                textDecoration: "underline",
              }}
            >
              GitHub Repository
            </a>{" "}
            . Hope You will enjoy it...
          </div>
        </div>

        <div className="container">
          <div
            onClick={() => {
              if (q6 === "question") {
                setq6("question js");
                setans6("answer ajs");
              } else {
                setq6("question");
                setans6("answer");
              }
            }}
            id="q6"
            className={q6}
          >
            Finally, Who we are?
          </div>
          <div id="ans6" className={ans6}>
            Me{" "}
            <a
              href="https://www.linkedin.com/in/vamshi-krishna-57074520a/"
              style={{
                color: "#066395",
                fontWeight: "bolder",
                textDecoration: "underline",
              }}
            >
              Vamshi Krishna Jillela
            </a>{" "}
            and my Team{" "}
            <a
              href="https://www.linkedin.com/in/karthik-reddy-dyn/"
              style={{
                color: "#066395",
                fontWeight: "bolder",
                textDecoration: "underline",
              }}
            >
              Karthik Reddy M
            </a>{" "}
            ,{" "}
            <a
              href="#"
              style={{
                color: "#066395",
                fontWeight: "bolder",
                textDecoration: "underline",
              }}
            >
              Ravi Teja L
            </a>{" "}
          </div>
        </div>

        <div className="container">
          <div
            onClick={() => {
              if (q7 === "question") {
                setq7("question js");
                setans7("answer ajs");
              } else {
                setq7("question");
                setans7("answer");
              }
            }}
            id="q7"
            className={q7}
          >
            And, One More thing !!!!
          </div>
          <div id="ans7" className={ans7}>
            <p>We Really Loved Your Presence!!! </p>
            <br />
            <p> Thank You So Much!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
