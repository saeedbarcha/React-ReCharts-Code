import React from "react";
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend,Tooltip} from 'recharts';
const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 0,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];

const AreaChartComp = () => {
  return (
    <>
    <h1 className="chart-heading">AreaChart</h1>
    {/* aspect is similar to height */}
   <ResponsiveContainer className="chart" width="100%" aspect={3}>
   <AreaChart className="LineChart" data={pdata}   height={300} margin={{
     top:20, right:50, left:0, bottom:10
    }}>
    <CartesianGrid strokeDasharray="4 1 2 3 2 3 1 2 2"  tickMargin={100}/>
     <XAxis dataKey={"name"}   interval={'preserveStartEnd'}  tickFormatter={ (value) => value+" Programming"} />
     <YAxis dataKey={"student"} interval={'preserveStartEnd'}/>
     <Tooltip contentStyle={{backgroundColor:'brown'}}/>
     <Legend/>
     <Area dataKey={"student"} strokeWidth={13} stroke="red" activeDot={{r:10}} type="monotone"/>
     <Area dataKey={"fees"} stroke="blue"  activeDot={{r:4}} type="natural"/>

   </AreaChart>

   </ResponsiveContainer>
    </>
  );
};

export default AreaChartComp;
