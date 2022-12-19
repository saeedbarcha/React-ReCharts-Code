import React from "react";
import LineChart from "./components/LineChartComp";
import AreaChart from "./components/AreaChartComp";
import BarChart from "./components/BarChartCont";
import NewLineChart from "./components/NewLineChart";

const App = () => {
  return (
    <>
    <NewLineChart/>
    <br/>
    <LineChart/>
    <br/>
    <AreaChart/>
    <br/>
    {/* <BarChart/> */}
    </>
  );
};

export default App;
