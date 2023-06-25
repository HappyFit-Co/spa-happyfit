
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



function BarChartComponent({ data, color ,fillColor, limite, tick }){
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" style={{ fill:color }} />
      <YAxis style={{ fill:color }} domain={[0, limite]} tickCount={tick}/>
      <Tooltip />
      <Bar dataKey="value" fill = {fillColor} />
    </BarChart>
  );
};


export default BarChartComponent;
