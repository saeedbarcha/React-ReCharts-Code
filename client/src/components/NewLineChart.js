import React from "react";
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,Tooltip} from 'recharts';
const dataArr = [
  {
    name: 1,
    student: -2,
    fees: 10
  },
  {
    name: 2,
    student: 10,
    fees: 12
  },
  {
    name: 3,
    student: -4,
    fees: 10
  },
  {
    name: 4,
    student: -2,
    fees: 5
  },
  {
    name: 5,
    student: 5,
    fees: 4
  },
  {
    name: 6,
    student: 6,
    fees: 8
  },
  {
    name: 7,
    student: 7,
    fees: 10
  },

  
];

let stylee={
  backgroundColor:"red",
  with:"33px"
}
const NewLineChart = () => {
  return (
    <>
    <h1 className="chart-heading">New LineChart</h1>
    <ResponsiveContainer className="resCont" width={1000} aspect={6}>
     <LineChart className="LineChart" data={dataArr} width={100} height={100}>
       {/* <CartesianGrid strokeWidth={3}/> */}
       <XAxis dataKey={"name"}/>
       <YAxis  dataKey={"student"}/>
       <Tooltip/>
       <Legend/>
       <Line dataKey={"student"} type="monotone" stroke="red" activeDot={{r:4}}/>
     </LineChart>
    </ResponsiveContainer>
   
    </>
  );
};

export default NewLineChart;
