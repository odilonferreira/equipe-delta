import React, { PureComponent, useEffect, useState } from 'react';
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

export default function RespostaVersao() {

  const [resposta, setResposta] = useState()

  useEffect(() => {
    fetch("http://localhost:5000/satisfacao_media").
      then((response) => response.json())
  .then((data) => setResposta(data));
  }, []);

    return (
        <ComposedChart
          width={500}
          height={400}
          data={resposta}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="versao" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="media" stroke="#ff7300" />
        </ComposedChart>
    );
}
