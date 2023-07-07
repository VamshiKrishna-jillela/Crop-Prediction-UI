import { useEffect, useState } from "react";
import Draw from "./Draw";
var Web3 = require("web3");

const crop = [
  "apple",
  "banana",
  "blackgram",
  "chickpea",
  "coconut",
  "coffee",
  "cotton",
  "grapes",
  "jute",
  "kidneybeans",
  "lentil",
  "maize",
  "mango",
  "mothbeans",
  "mungbean",
  "muskmelon",
  "orange",
  "papaya",
  "pigeonpeas",
  "pomegranate",
  "rice",
  "watermelon",
];

function ConvertData(Data) {
  if (Data.length == 0) return null;
  let sd = [];

  for (let i = 0; i < crop.length; i++) {
    let sum = 0.0;
    for (let j = 0; j < Data.length; j++) {
      sum += Data[j][crop[i]];
    }
    sum = sum / Data.length + 10;
    sd.push({ label: crop[i], y: sum });
  }
  return sd;
}

function CropWise(x) {
  let df = {};
  for (let i = 0; i < crop.length; i++) {
    df[crop[i]] = [];
  }

  for (let i = 0; i < x.length; i++) {
    const date = new Date(x[i]["date"]);
    for (let j = 0; j < crop.length; j++) {
      df[crop[j]].push({ x: date, y: x[i]["label"][crop[j]] });
    }
  }

  return df;
}

function Graph(props) {
  const [loadContent, setLoadContent] = useState([
    "Connecting to BlockChain Node...",
  ]);
  const [SummarizedData, setSummarizedData] = useState(null);
  const [cropWiseData, setCropWiseData] = useState(null);
  const [cropDisplayedData, setCropDisplayedData] = useState(null);

  let labelData = [];

  useEffect(() => {
    async function zzz() {
      var web3 = new Web3(
        new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
      );
      setLoadContent("connected...");
      const json_interface = [
        {
          inputs: [
            {
              internalType: "string",
              name: "newCID",
              type: "string",
            },
          ],
          name: "pushCID",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "startIndex",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "size",
              type: "uint256",
            },
          ],
          name: "getLastKcids",
          outputs: [
            {
              internalType: "string[]",
              name: "",
              type: "string[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "Region",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];

      setLoadContent("Fetching CIDs...");

      const CID = new web3.eth.Contract(
        json_interface,
        process.env.REACT_APP_CONTRACT_ADDRESS
      );

      var data = [];
      try {
        data = await CID.methods.getLastKcids(0, props.length).call();
        setLoadContent("Gathered CIDs...");
        setLoadContent("Connecting to IPFS...");
      } catch (e) {
        console.log(e);
      }

      let x = [];
      let y = [];
      setLoadContent("Collecting Data From IPFS...");

      // for (let i = 0; i < data.length; i++) {
      //   const cid = data[i];

      //   try {
      //     const data1 = await fetch(
      //       `https://vamshi.infura-ipfs.io/ipfs/${cid}`
      //     );
      //     const ndata = await data1.json();
      //     x.push(ndata["label"]);
      //     y.push(ndata);
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }

      try {
        const responses = await Promise.allSettled(
          data.map(async (cid) => {
            const res = await fetch(
              `https://vamshi.infura-ipfs.io/ipfs/${cid}`
            ); // Send request for each id
            const ndata = await res.json();
            x.push(ndata["label"]);
            y.push(ndata);
          })
        );
      } catch (e) {
        console.log(e);
      }

      setLoadContent("Data Has Been Collected...");
      setLoadContent("PreProcessing Data..");

      const dd = ConvertData(x);
      const ff = CropWise(y);
      setCropWiseData(ff);
      setSummarizedData(dd);
      setLoadContent("Drawing Graphs For You...");
    }

    return zzz;
  }, []);

  function func(e) {
    let xd = {};
    xd["crop"] = e["dataPoint"].label;
    xd["data"] = cropWiseData[e["dataPoint"].label];
    setCropDisplayedData(xd);
  }

  return (
    <>
      <div
        className="Appi"
        style={{
          border: "2px solid #066395",
          margin: "40px",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        {SummarizedData ? (
          <Draw
            // className="Bar"
            heading="Crop Recommnding percentage of each "
            type="pie"
            func={func}
            dataPoint={SummarizedData}
          />
        ) : (
          <>
            <h1 style={{ color: "#066395" }}>...{loadContent}</h1>
            <section style={{ textAlign: "center" }} className="loading-div">
              <div>
                <img src="./Dual Ball-1s-200px.svg" alt="" />
              </div>
            </section>
          </>
        )}
      </div>

      <div
        className="Appi"
        style={{
          border: "2px solid #066395",
          margin: "40px",
          padding: "40px",
          backgroundColor: "",
          borderRadius: "8px",
        }}
      >
        {cropDisplayedData ? (
          <Draw
            // className="line"
            heading={`Recommendation of ${cropDisplayedData["crop"]} over time`}
            type="line"
            dataPoint={cropDisplayedData["data"]}
          />
        ) : (
          <h1 style={{ color: "#066395" }}>
            "Click on some Crop Segment to view Recommendation Trend"
          </h1>
        )}
      </div>
    </>
  );
}

export default Graph;
