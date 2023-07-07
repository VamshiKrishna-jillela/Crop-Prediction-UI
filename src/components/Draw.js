import React from "react";
import CanvasJSReact from "../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Draw extends React.Component {
  render() {
    const options = {
      title: {
        text: this.props.heading,
      },
      data: [
        {
          cursor: "pointer",
          click: this.props.func,
          type: this.props.type,
          dataPoints: this.props.dataPoint,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default Draw;
