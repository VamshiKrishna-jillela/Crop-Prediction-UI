import { useState } from "react";
import "./form.css";
import FormInput from "./formInput";
import axios from "axios";
import Draw from "../Draw";

const converted = (data) => {
  let df = [];
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
  for (let i = 0; i < crop.length; i++) {
    df.push({ label: crop[i], y: data[crop[i]] });
  }
  return df;
};

const Form = () => {
  const url = "https://qqcr35km22.ap-southeast-1.awsapprunner.com/form";
  const [values, setValues] = useState({
    nitrogen: "",
    phosphorous: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [draw, setdraw] = useState(null);
  const [SummarizedData, setSummarizedData] = useState(null);

  const inputs = [
    {
      id: 1,
      name: "nitrogen",
      type: "number",
      placeholder: "Nitrogen(%)",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Nitrogen(%)",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phosphorous",
      type: "number",
      placeholder: "Phosporous(%)",
      errorMessage: "It should be a valid email address!",
      label: "Phosphorous(%)",
      required: true,
    },
    {
      id: 3,
      name: "potassium",
      type: "number",
      placeholder: "Potassium(%)",
      label: "Potassium(%)",
    },
    {
      id: 4,
      name: "temperature",
      type: "number",
      placeholder: "Temperature(°C)",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Temperature(°C)",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "humidity",
      type: "number",
      placeholder: "Humidity",
      label: "Humidity",
    },
    {
      id: 6,
      name: "ph",
      type: "number",
      placeholder: "PH",
      errorMessage: "Passwords don't match!",
      label: "PH",
      pattern: values.password,
      required: true,
    },
    {
      id: 7,
      name: "rainfall",
      type: "number",
      placeholder: "rainfall",
      label: "rainfall",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      N: values.nitrogen,
      P: values.phosphorous,
      K: values.potassium,
      temperature: values.temperature,
      humidity: values.humidity,
      ph: values.ph,
      rainfall: values.rainfall,
    };

    axios
      .post(url, data, {
        headers: {
          "Content-Type": "Application/Json",
        },
      })
      .then((res) => {
        const data = JSON.parse(res["data"]);
        let dd = converted(data["label"]);
        setSummarizedData(dd);
        setdraw(1);
      })
      .catch((err) => {});
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {!draw ? (
        <div className="form-div">
          <form onSubmit={handleSubmit} action="/form" method="POST">
            <h1>Enter Features Values </h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Submit</button>
          </form>
        </div>
      ) : (
        <div
          style={{
            border: "2px solid #066395",
            margin: "40px",
            padding: "40px",
            borderRadius: "8px",
          }}
        >
          {" "}
          <Draw
            heading={`Crop Percentages of Manually Entered Data`}
            type="pie"
            dataPoint={SummarizedData}
          />
        </div>
      )}
    </>
  );
};

export default Form;
