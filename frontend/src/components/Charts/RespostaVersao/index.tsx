import React, { PureComponent, useEffect } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '5.0.0',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: '5.0.1',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: '5.0.2',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: '5.0.3',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: '5.0.4',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: '5.0.5',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: '5.0.6',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: '5.0.7',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: '5.0.8',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: '5.0.9',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: '5.0.10',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: '5.0.11',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: '5.0.12',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

export default function RespostaVersao() {

    return (
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
    );
}
