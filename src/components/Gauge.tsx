import React from "react";
import { Gauge } from "@ant-design/plots";

export interface GaugeProps {
  gauge: number;
}

export default function DemoGauge({ gauge }: GaugeProps) {
  const config = {
    percent: gauge,
    type: "meter",
    innerRadius: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ["#30BF78", "#FAAD14", "#F4664A"],
    },
    indicator: {
      pointer: {
        style: {
          stroke: "#D0D0D0",
        },
      },
      pin: {
        style: {
          stroke: "#D0D0D0",
        },
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }: any) => (100 * percent).toFixed(0) + "%",
        style: {
          color: "#D0D0D0",
          fontSize: "36px",
          lineHeight: "36px",
        },
      },
    },
  };
  return <Gauge {...config} />;
}
