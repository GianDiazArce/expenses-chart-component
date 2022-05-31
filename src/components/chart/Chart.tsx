import { IData } from "../../interface";

import "./chart.css";

interface Props {
  data: IData[];
}

export const Chart: React.FC<Props> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.amount));
  const percentage = 100 / maxValue;

  return (
    <div className="chart">
      {data.map((info, index) => (
        <div className="chart__info" key={index}>
          <div
            className="chart__bar"
            style={{
              height: `${info.amount * percentage}%`,
              background:
                info.amount === maxValue ? "var(--cyan)" : "var(--soft-red)",
            }}
            data-content={`$${info.amount}`} // Send data to css
          />
          <p className="paragraph">{info.day}</p>
        </div>
      ))}
    </div>
  );
};
